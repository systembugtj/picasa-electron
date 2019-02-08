import Service from '@ember/service';
import PreferenceMixin from "picasa/mixins/preference";
import { of, from, Observable } from "rxjs";
import { map, filter, mergeMap, catchError } from 'rxjs/operators';
import moment from 'moment';

const fs = requireNode("fs-extra");
const ExifReader = requireNode('exifreader');
const klaw = requireNode('klaw');
const path = requireNode("path");

function fullPath (filepath, options) {
  const _options = options || {};
  const root = _options.root;
  return (root) ? path.join(root, filepath) : filepath
}

export default Service.extend(PreferenceMixin, {
  import(source) {
    return from(this.getPreferenceService().getWatchedFolders())
      .pipe(
        map(target => target[0]),
        mergeMap(folder => this.scanFolder(source, folder)),
        filter(action => !action.notImage),
        mergeMap(action => this.ensureDir(action)),
        mergeMap(action => this.copyFile(action))
      )
  },

  fileExistsSync(filepath, options) {
    const _filepath = filepath || '';
    const _options = options || {};
    try {
      return fs.statSync(fullPath(_filepath, _options)).isFile()
    }
    catch (e) {
      // Check exception. If ENOENT - no such file or directory ok, file doesn't exist.
      // Otherwise something else went wrong, we don't have rights to access the file, ...
      if (e.code != 'ENOENT') {
        throw e
      }

      return false
    }
  },

  ensureDir(action) {
    action.targetDir = `${action.target}/${action.targetName}`;
    const promise = new Promise(resolve => {
      fs.ensureDir(action.targetDir, () => {
        resolve(action);
      })
    });
    return from(promise);
  },

  copyFile(action) {
    // copy file to target as 年/月/日
    action.targetFileName = path.basename(action.file);
    action.targetFullPath = `${action.targetDir}/${action.targetFileName}`;
    let count = 1;
    let exist = this.fileExistsSync(action.targetFullPath);
    while(exist) {
      const parts = path.parse(action.targetFullPath)
      action.targetFullPath = `${parts.dir}/${parts.name}_${count}${parts.ext}`;
      exist = this.fileExistsSync(action.targetFullPath);
      count ++;
    }
    // fs.copyFile
    const promise = new Promise((resolve, reject) => {
      fs.copy(action.file, action.targetFullPath, err => {
        if (err) {
          reject(err);
          return;
        }
        resolve(action);
      }) // copies file
    });

    return from(promise);
  },

  scanFolder(source, target) {

    return Observable.create(function(observer) {
      klaw(source)
        .on('data', item => {
          if(!item.stats.isDirectory()) {
            observer.next({
              file: item.path,
              created: item.stats.birthtime,
              target
            })
          }
        })
        .on('end', () => {
          observer.complete()
        })
    }).pipe(mergeMap(action => this.resolveExifDate(action)));
  },

  resolveExifDate(action) {
    const promise = this.checkExifDate(action.file)
        .then(date => {
          if (date && date.value[0]) {
            const created = moment(date.value[0], 'YYYY:MM:DD hh:mm:ss');
            action.created = created.toDate();
            action.targetName = created.format("YYYY/YYYYMMDD");
          } else {
            const created = moment(action.created);
            action.created = created.toDate();
            action.targetName = created.format("YYYY/YYYYMMDD");
          }

          return action;
        })
    return from(promise)
      .pipe(
        catchError(() => {
          action.notImage = true;
          return of(action);
        })
      );
  },

  checkExifDate(filePath) {
    return new Promise((resolve, reject) => {
      fs.readFile(filePath, function (error, data) {
        if (error) {
            reject(error);
        } else {
          try {
              const tags = ExifReader.load(data.buffer);
              // The MakerNote tag can be really large. Remove it to lower memory
              // usage if you're parsing a lot of files and saving the tags.

              resolve(tags["DateTimeDigitized"]);
          } catch (error) {
              reject(error);
          }
        }
      })
  });
  }
});
