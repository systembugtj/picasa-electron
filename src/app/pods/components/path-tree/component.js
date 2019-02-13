import Component from '@ember/component';
import PreferenceMixin from "picasa/mixins/preference";
import { classNames } from '@ember-decorators/component';
import { action, computed } from '@ember-decorators/object';
import TreeNode from 'ember-tree-view/node';
import { hostname } from "picasa/utils/folder-reader";
import { connect } from 'ember-redux';
import { listFiles } from "picasa/actions/folders";

const stateToComputed = (state /*, attrs*/) => {
  return {
    folders: state.watched.folders
  }
};

const dispatchToActions = {
  listFiles
};
@classNames("path-tree")
class PathTreeComponent extends Component.extend(PreferenceMixin) {
  expandDepth = 1;
  @computed("folders")
  get treeNodes() {
    const folders = this.get("folders");
    const root = TreeNode.create({
      title: hostname()
    });

    folders.forEach(element => {
      root.createChild({
        title: element.cwd
      });
    });
    return root;
  }
  @action
  flatButton() {
    const { dialog } = requireNode('electron').remote;
    dialog.showOpenDialog({
        properties: ['openDirectory']
    }, (path) => {
        if (path) {
          this.getPreferenceService().addFolders(path);
        } else {
          console.log("No path selected");
        }
    });
  }
}

export default connect(stateToComputed, dispatchToActions)(PathTreeComponent);
