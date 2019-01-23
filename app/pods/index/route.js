import Route from '@ember/routing/route';
import folderReader, { specialFolder, FOLDERS } from "../../utils/folder-reader";
import Precondition from "ember-precondition/utils/precondition";
import PreferenceMixin from "../../mixins/preference";
import Promise from "rsvp";
import { uniqueName } from "picasa/utils/folder-reader";
import { from } from "rxjs";
import { map, reduce } from "rxjs/operators";

export default Route.extend(PreferenceMixin, {
  normalizeImages(root, images) {
    return from(images).pipe(
        map(image => {
          const path = `${root}/${image}`;
          return {
            root,
            name: image,
            path,
            uniqueName: uniqueName(path)
          };
        }),
        reduce((images, image) => {
          images.push(image);
          return images
        }, [])
      ).toPromise();
  },

  fetchWatchedFolders() {
    return this.getPreferenceService().getCachedPath()
      .then(() => this.getPreferenceService().getWatchedFolder())
      .then(paths => {
        Precondition.checkNotEmpty(paths);
        return paths;
      })
      .catch(() => {
        const path = specialFolder(FOLDERS.DESKTOP);
        return this.getPreferenceService().addFolder(path, true).then(() => {
          return [path]
        });
      })
  },

  listFiles(paths) {
    const model = [];
    paths.forEach(path => {
      model.push(folderReader(path))
    });
    // TODO: request scan service.
    return Promise.all(model);
  },

  toModel(folders) {
    const promises = [];
    folders.forEach(folder => {
      const handler = this.normalizeImages(folder.cwd, folder.images)
        .then(images => {
          folder.images = images
          return folder;
        })
        promises.push(handler);
    })
    return Promise.all(promises);
  },

  model() {
    // Need a very specific path reading from preferences.
    return this.fetchWatchedFolders()
        .then(paths => this.listFiles(paths))
        .then(folders => this.toModel(folders))
        .then(folders => {
          return {
            folders
          }
        });
  },
});
