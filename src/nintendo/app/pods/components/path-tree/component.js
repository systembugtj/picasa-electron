import Component from '@ember/component';
import { classNames } from '@ember-decorators/component';
import { computed } from '@ember-decorators/object';
import TreeNode from 'ember-tree-view/node';
import { hostname } from "picasa/utils/folder-reader";
import PreferenceMixin from "picasa/mixins/preference";
import I18nMixin from 'ember-i18next/mixins/i18n';
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
class PathTreeComponent extends Component.extend(PreferenceMixin, I18nMixin) {
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
}

export default connect(stateToComputed, dispatchToActions)(PathTreeComponent);