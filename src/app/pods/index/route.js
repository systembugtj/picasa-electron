import Route from '@ember/routing/route';
import scanFolderForImages from "picasa/utils/folder-reader";
import PreferenceMixin from "picasa/mixins/preference";
import Promise from "rsvp";
import { normalizeImages } from "picasa/utils/data-normalizer";
import { inject as service } from '@ember/service';

export default Route.extend(PreferenceMixin, {
  fileWatcher: service(),

  getFileWatcher() {
    return this.get("fileWatcher");
  },

  listFiles(paths) {
    const model = [];
    paths.forEach(path => {
      model.push(scanFolderForImages(path))
    });
    // TODO: request scan service.
    return Promise.all(model);
  },

  toModel(folders) {
    const promises = [];
    folders.forEach(folder => {
      const handler = normalizeImages(folder.cwd, folder.images)
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
    return this.getFileWatcher().getWatchedFolders()
        .then(paths => this.listFiles(paths))
        .then(folders => this.toModel(folders))
        .then(folders => {
          return {
            folders
          }
        });
  },
});