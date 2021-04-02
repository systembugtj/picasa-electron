import Component from '@ember/component';
import { classNames } from '@ember-decorators/component';
import { computed } from '@ember/object';
import TreeNode from 'ember-tree-view/node';
import { hostname } from "picasa/utils/folder-reader";
import PreferenceMixin from "picasa/mixins/preference";
import I18nMixin from 'ember-i18next/mixins/i18n';
import { connect } from 'ember-redux';
import { addFolderList, addFolders } from "picasa/actions/folders";
import { action } from '@ember/object';
import { inject } from "@ember/service";
import { error } from "picasa/utils/logger";
import { map } from 'rxjs/operators';
import EventNames from 'picasa/constants/event-name';
import { observes } from '@ember-decorators/object';

const stateToComputed = (state /*, attrs*/) => {
  return {
    folders: state.watched.folders
  }
};

const dispatchToActions = {
  addFolderList,
  addFolders
};

@classNames("path-tree")
class PathTreeComponent extends Component.extend(PreferenceMixin, I18nMixin) {
  @inject photoImport;
  @inject preferenceManager;

  expandDepth = 1;

  pathSelected = () => {};

  constructor() {
    super(...arguments);

    this.preferenceManager.on(EventNames.FolderUpdated, (folders) => {
      this.actions.addFolderList(folders);
    });

  }

  @observes("selected")
  selectedPath() {
    if (this.selected && this.selected.path) {
      this.pathSelected(this.selected.path);
    }
  }

  @computed("folders")
  get treeNodes() {
    const folders = this.folders;
    const root = TreeNode.create({
      title: hostname(),
      nodeIcon: "filing_cabinet",
      nodeExpandedIcon: "opened_folder",
    });

    folders.forEach(element => {
      root.createChild({
        title: element,
        path: element,
        nodeIcon: "folder",
      });
    });
    return root;
  }
  @action
  getChildren(node) {
    return new Promise(resolve => {
      if(node.isLevel1) {
        resolve();
        return;
      }
      this.photoImport.scanCurrentFolder(node.path)
      .pipe(map(directory => {
        return node.createChild({
          title: directory.name,
          path: directory.file,
          nodeIcon: "folder",
          nodeExpandedIcon: "opened_folder",
        });
      }))
      .subscribe(
        () => {},
        error,
        () => resolve()
      );
    });
  }
}

export default connect(stateToComputed, dispatchToActions)(PathTreeComponent);
