import Component from '@ember/component';
import { classNames } from '@ember-decorators/component';
import { computed } from '@ember-decorators/object';
import TreeNode from 'ember-tree-view/node';
import { hostname } from "picasa/utils/folder-reader";
import PreferenceMixin from "picasa/mixins/preference";
import I18nMixin from 'ember-i18next/mixins/i18n';
import { connect } from 'ember-redux';
import { listFiles, addFolders } from "picasa/actions/folders";
import { action } from '@ember-decorators/object';
import { inject } from "@ember-decorators/service";
import { error } from "picasa/utils/logger";
import { map } from 'rxjs/operators';
import EventNames from 'picasa/constants/event-name';

const stateToComputed = (state /*, attrs*/) => {
  return {
    folders: state.watched.folders
  }
};

const dispatchToActions = {
  listFiles,
  addFolders
};

@classNames("path-tree")
class PathTreeComponent extends Component.extend(PreferenceMixin, I18nMixin) {
  @inject photoImport;
  @inject preferenceManager;

  expandDepth = 1;

  constructor() {
    super(...arguments);

    this.preferenceManager.on(EventNames.FolderUpdated, (folders) => {
      //this.store.dispatch("")
      this.actions.addFolders(folders);
    });

  }

  @computed("folders")
  get treeNodes() {
    const folders = this.get("folders");
    const root = TreeNode.create({
      title: hostname(),
      nodeIcon: "filing_cabinet",
      nodeExpandedIcon: "opened_folder",
    });

    folders.forEach(element => {
      root.createChild({
        title: element.cwd,
        path: element.cwd,
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
