import Route from '@ember/routing/route';
import folderReader, { specialFolder, FOLDERS } from "../../utils/folder-reader";
import Precondition from "ember-precondition/utils/precondition";
import PreferenceMixin from "../../mixins/preference";
import Promise from "rsvp";

export default Route.extend(PreferenceMixin, {

  model() {
    // Need a very specific path reading from preferences.
    return this.getPreferenceService().getWatchedFolder()
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
        .then(paths => {
          const model = [];
          paths.forEach(path => {
            model.push(folderReader(path))
          });
          // TODO: request scan service.
          return Promise.all(model);
        }).then(folders => {
          return {
            folders
          }
        });
  },
});
