import Component from '@ember/component';
import PreferenceMixin from "picasa/mixins/preference";
import { classNames } from '@ember-decorators/component';
import { action, computed } from '@ember-decorators/object';
import TreeNode from 'ember-tree-view/node';
import { hostname } from "picasa/utils/folder-reader";
@classNames("path-tree")
class PathTreeComponent extends Component.extend(PreferenceMixin) {
  expandDepth = 1;
  @computed("model")
  get treeNodes() {
    const folders = this.get("model");
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
          // Start to watch the selected path
        } else {
          console.log("No path selected");
        }
    });
  }
}

export default PathTreeComponent;
