import Ember from 'ember';
import folderReader from "../../utils/folder-reader";
import Precondition from "ember-precondition/utils/precondition";
import PreferenceMixin from "../../mixins/preference";

// TODO: a default way return document folder.
const DEFAULT_PATH = "/Users/albert.li/Desktop";

export default Ember.Route.extend(PreferenceMixin, {

  model() {
    // Need a very specific path reading from preferences.
    return this.getPreferenceService().getWatchedFolder()
        .then(paths => {
          Precondition.checkNotEmpty(paths);
          return folderReader(paths[0]);
        })
        .catch(() => {
          return this.getPreferenceService().addFolder(DEFAULT_PATH);
        })
        .then(() => {
          // TODO: request scan service.
          return folderReader(DEFAULT_PATH);
        });
  }
});
