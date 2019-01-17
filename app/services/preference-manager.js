import Service from '@ember/service';
import PersistenceMixin from "../mixins/persistence";
import Preferences from "../constants/preference-entry";
import Precondition from "ember-precondition/utils/precondition";
import { resolve } from 'rsvp';
import { difference } from "lodash/array";
import { A } from "@ember/array";

export default Service.extend(PersistenceMixin, {

  /**
   * return managed folder.
   */
  getWatchedFolder() {
    return this.getPersistenceService().get(Preferences.WATCH_PATHS)
      .then(paths => {
        return Precondition.checkArray(paths);
      })
      .catch(() => {
        return []; // if error, return [];
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
        this.getPersistenceService().set(Preferences.WATCH_PATHS, Precondition.checkArray(folders));
      })
  },

  /**
   * Add folder to watched folders
   * @param {String} folder
   */
  addFolder(folder, clear) {
    Precondition.checkString(folder);
    return this.getWatchedFolder()
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
    return this.getWatchedFolder()
      .then(paths => {
        const added = difference(folders, paths);
        return paths.concat(added);
      })
      .then(paths => {
        this.setWatchedFolder(paths);
      });
  }
});
