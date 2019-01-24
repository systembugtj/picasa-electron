import Controller from "@ember/controller"
import { computed } from "@ember/object";
import { inject as service } from '@ember/service';
import { hostname } from "picasa/utils/folder-reader";
import TreeNode from 'ember-tree-view/node';

export default Controller.extend({
  windowMenu: service(),

  init() {
    this._super(...arguments);
    const windowMenu = this.get("windowMenu");
    windowMenu.on("openFolderSelection", () => {
      this.openDirectoryDialog();
    });

    windowMenu.on("openPreferences", () => {
      this.set("showPreferenceDialog", true);
    });
  },

  openDirectoryDialog() {
    const { dialog } = requireNode('electron').remote;
    dialog.showOpenDialog({
        properties: ['openDirectory']
    }, (paths) => {
        if (paths) {
          this.getPreferenceService().addFolders(paths);
        } else {
          console.log("No path selected");
        }
    });
  },

  folders: computed("model", {
    get() {
      const folders = this.get("model.folders");
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
  }),

  actions: {
    closeDialog() {
      this.set("showPreferenceDialog", false);
    }
  }
})
