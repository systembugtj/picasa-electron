import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { route } from "ember-redux";

import Promise from "rsvp";
import scanFolderForImages from "picasa/utils/folder-reader";
import PreferenceMixin from "picasa/mixins/preference";
import { normalizeImages } from "picasa/utils/data-normalizer";
import { addFolders } from 'picasa/actions/folders';
const path = requireNode("path");
/**
 * list files from path.
 * @param {array} paths
 */
function listFiles(paths) {
  const promises = [];
  paths.forEach(path => {
    // scanFolderForImages return { cwd, files }
    const promise = scanFolderForImages(path);
    promises.push(promise);
  });
  // TODO: request scan service.
  return Promise.all(promises);
}

function breakdownWithPath(results) {
  const splitted = {};
  // array of [ { cwd, images }]
  results.forEach(folder => {
    // folder is { cwd, images }.
    splitted[folder.cwd] = {
      cwd: folder.cwd,
      images: [],
    }

    folder.images.forEach(image => {
      const cwd = path.dirname(path.join(folder.cwd, image));
      if (!splitted[cwd]) {
        splitted[cwd] = {
          cwd,
          images: [],
        }
      }
      splitted[cwd].images.push(image);
    })

  });
  const folders = [];
  Object.keys(splitted).forEach(key => {
    folders.push(splitted[key]);
  });

  return folders;
}
function toModel(folders) {

  const promises = [];
  folders.forEach(folder => {
    const promise = normalizeImages(folder.cwd, folder.images)
      .then(images => {
        folder.images = images
        return folder;
      })
      promises.push(promise);
  })
  return Promise.all(promises);
}

const model = function (dispatch) {
  // Need a very specific path reading from preferences.
  return this.getFileWatcher().getWatchedFolders()
      .then(paths => listFiles(paths))
      .then(paths => breakdownWithPath(paths))
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
