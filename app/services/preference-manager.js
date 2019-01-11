import Service from '@ember/service';
import PersistenceMixin from "../mixins/persistence";
import Preferences from "../constants/preference-entry";
import Precondition from "ember-precondition/utils/precondition";
import { resolve } from 'rsvp';

export default Service.extend(PersistenceMixin, {

  getWatchedFolder() {
    return this.getPersistenceService().get(Preferences.WATCH_PATHS)
      .then(paths => {
        return Precondition.checkArray(paths);
      })
      .catch(() => {
        return []; // if error, return [];
      })
  },

  setWatchedFolder(folders) {
    return resolve()
      .then(() => {
        return this.getPersistenceService().set(Preferences.WATCH_PATHS, Precondition.checkArray(folders));
      })
  },

  addFolder(folder) {
    return this.getWatchedFolder()
      .then(paths => {
        paths.push(folder);
        return this.setWatchedFolder(paths);
      });
  },

  addFolders(folders) {
    return this.getWatchedFolder()
      .then(paths => {
        return this.setWatchedFolder(paths.concat(Precondition.checkArray(folders)));
      });
  }

});
