import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { route } from "ember-redux";
import PreferenceMixin from "picasa/mixins/preference";
import {
  listFiles,
  breakdownWithPath,
  toModel
} from "picasa/utils/data-normalizer";
import { addFolderList, addFolders } from 'picasa/actions/folders';

const model = function (dispatch) {
  // Need a very specific path reading from preferences.
  return this.fileWatcher.getWatchedFolders()
      .then(paths => {
        addFolders(paths)(dispatch);
        return listFiles(paths)
      })
      .then(paths => breakdownWithPath(paths))
      .then(folders => toModel(folders))
      .then(folders => {
        addFolderList(folders)(dispatch);
      });
};

class IndexRoute extends  Route.extend(PreferenceMixin) {
  @service fileWatcher;
}

export default route({ model })(IndexRoute);
