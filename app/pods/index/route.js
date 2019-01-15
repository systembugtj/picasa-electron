import Route from '@ember/routing/route';
import folderReader from "../../utils/folder-reader";
import Precondition from "ember-precondition/utils/precondition";
import PreferenceMixin from "../../mixins/preference";

// TODO: a default way return document folder.
const DEFAULT_PATH = "/Users/albert.li/Desktop";

export default Route.extend(PreferenceMixin, {

  model() {
    // Need a very specific path reading from preferences.
    return this.getPreferenceService().getWatchedFolder()
        .then(paths => {
          Precondition.checkNotEmpty(paths);
          return paths[0];
        })
        .catch(() => {
          this.getPreferenceService().addFolder(DEFAULT_PATH);
          return DEFAULT_PATH;
        })
        .then(path => {
          // TODO: request scan service.
          return folderReader(path);
        });
  }
});
