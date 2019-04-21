import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { route } from "ember-redux";

import Promise from "rsvp";
import scanFolderForImages from "picasa/utils/folder-reader";
import PreferenceMixin from "picasa/mixins/preference";

import { normalizeImages } from "picasa/utils/data-normalizer";

import { addFolders } from 'picasa/actions/folders';

/**
 * list files from path.
 * @param {array} paths
 */
function listFiles(paths) {
  const model = [];
  paths.forEach(path => {
    model.push(scanFolderForImages(path))
  });
  // TODO: request scan service.
  return Promise.all(model);
}

function toModel(folders) {
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
}

const model = function (dispatch) {
  // Need a very specific path reading from preferences.
  return this.getFileWatcher().getWatchedFolders()
      .then(paths => listFiles(paths))
      .then(folders => toModel(folders))
      .then(folders => {
        addFolders(folders)(dispatch);
      });
};

class IndexRoute extends  Route.extend(PreferenceMixin) {
  @service fileWatcher;

  getFileWatcher() {
    return this.fileWatcher;
  }
}

export default route({ model })(IndexRoute);
