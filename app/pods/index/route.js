import Route from '@ember/routing/route';
import folderReader, { specialFolder, FOLDERS } from "../../utils/folder-reader";
import Precondition from "ember-precondition/utils/precondition";
import PreferenceMixin from "../../mixins/preference";

export default Route.extend(PreferenceMixin, {

  model() {
    // Need a very specific path reading from preferences.
    return this.getPreferenceService().getWatchedFolder()
        .then(paths => {
          Precondition.checkNotEmpty(paths);
          return paths[0];
        })
        .catch(() => {
          const path = specialFolder(FOLDERS.DESKTOP);
          this.getPreferenceService().addFolder(path);
          return path;
        })
        .then(path => {
          // TODO: request scan service.
          return folderReader(path);
        });
  },
});
