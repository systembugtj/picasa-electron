import Route from '@ember/routing/route';
import folderReader, { specialFolder, FOLDERS } from "../../utils/folder-reader";
import Precondition from "ember-precondition/utils/precondition";
import PreferenceMixin from "../../mixins/preference";
import Promise from "rsvp";
import { uniqueName } from "picasa/utils/folder-reader";

export default Route.extend(PreferenceMixin, {

  model() {
    // Need a very specific path reading from preferences.
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
        .then(paths => {
          const model = [];
          paths.forEach(path => {
            model.push(folderReader(path))
          });
          // TODO: request scan service.
          return Promise.all(model);
        }).then(folders => {
          folders.forEach(folder => {
            const images = [];
            folder.images.forEach(image => {
              const path = `${folder.cwd}/${image}`;
              images.push({
                root: folder.cwd,
                name: image,
                path: `${folder.cwd}/${image}`,
                uniqueName: uniqueName(path)
              });
            })
            folder.images = images;
          })

          return {
            folders
          }
        });
  },
});
