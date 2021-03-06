import Service from '@ember/service';
import PersistenceMixin from "picasa/mixins/persistence";
import Preferences from "picasa/constants/preference-entry";
import Precondition from "ember-precondition/utils/precondition";
import { resolve } from 'rsvp';
import { difference } from "lodash/array";
import { isEmpty } from "lodash/lang";
import { A } from "@ember/array";
import { specialFolder, FOLDERS } from "picasa/utils/folder-reader";
import Evented from '@ember/object/evented';
import EventNames from "picasa/constants/event-name";

const APPDATA_CACHE_THUMBNAIL = "/ThePicasa/cache/thumbnail";

export default Service.extend(PersistenceMixin, Evented, {

  createPath(path) {
    return new Promise((resolve, reject) => {
      const mkdirp = require('mkdirp');
      mkdirp(path, (err) => {
          if (err) {
            reject(err)
          } else {
            resolve(path)
          }
      });
    })
  },

  getCachedPath() {
    const cachedPath = this.get(Preferences.CACHED_PATH);

    return resolve().then(() => {
        if (isEmpty(cachedPath)) {
          return this.getPersistenceService().get(Preferences.CACHED_PATH)
        } else {
          return cachedPath;
        }
      })
      .then(path => {
        if (isEmpty(path)) {
          const cachedPath = `${specialFolder(FOLDERS.APPDATA)}${APPDATA_CACHE_THUMBNAIL}`;
          this.set(Preferences.CACHED_PATH, cachedPath);
          return this.createPath(cachedPath);
        } else {
          this.set(Preferences.CACHED_PATH, path);
          return path;
        }
      })
  },

  /**
   * Set watched folder, overwrite exist.
   * @param {Array} folders
   */
  setWatchedFolder(folders) {
    Precondition.checkArray(folders);
    return resolve()
      .then(() => {
        this.getPersistenceService().set(Preferences.WATCH_PATHS, folders);
        this.trigger(EventNames.FolderUpdated, folders);
      });
  },

  /**
   * @return managed folder.
   */
  getWatchedFolders() {
    return this.getPersistenceService().get(Preferences.WATCH_PATHS)
      .then(paths => {
        return Precondition.checkArray(paths);
      })
      .catch(() => {
        return []; // if error, return [];
      })
  },
  /**
   * Add folder to watched folders
   * @param {String} folder
   */
  addFolder(folder, clear) {
    Precondition.checkString(folder);
    return this.getWatchedFolders()
      .then(paths => {
        paths = (paths && !clear) || A();
        if (!paths.includes(folder)) {
          paths.push(folder);
          this.setWatchedFolder(paths);
        }
      });
  },

  addFolders(folders) {
    Precondition.checkArray(folders);
    return this.getWatchedFolders()
      .then(paths => {
        const added = difference(folders, paths);
        return paths.concat(added);
      })
      .then(paths => {
        this.setWatchedFolder(paths);
      });
  }
});
