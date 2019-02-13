import Component from '@ember/component';
import { classNames } from '@ember-decorators/component';
import { action, computed } from '@ember-decorators/object';
import TreeNode from 'ember-tree-view/node';
import { hostname } from "picasa/utils/folder-reader";
import PreferenceMixin from "picasa/mixins/preference";
import I18nMixin from 'ember-i18next/mixins/i18n';

@classNames("path-tree")
class PathTreeComponent extends Component.extend(PreferenceMixin, I18nMixin) {
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
  addWatchedFolder() {
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

export default PathTreeComponent;
