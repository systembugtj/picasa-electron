import Controller from "@ember/controller"
import { computed } from "@ember/object";
import { inject as service } from '@ember/service';
import TreeNode from 'ember-tree-view/node';

export default Controller.extend({
  windowMenu: service(),

  init() {
    this._super(...arguments);

    this.get("windowMenu").on("openFolderSelection", () => {
      this.openDirectoryDialog();
    });
  },

  openDirectoryDialog() {
    const { dialog } = requireNode('electron').remote;
    dialog.showOpenDialog({
        properties: ['openDirectory']
    }, (paths) => {
        if (paths) {
          this.getPreferenceService().addFolders(paths);
          // Start to watch the selected path
          //startWatcher(path[0]);
        } else {
          console.log("No path selected");
        }
    });
  },

  folders: computed("model", {
    get() {
      const folders = this.get("model.folders");
      const root = TreeNode.create({
        title: "My Computer"
      });


      folders.forEach(element => {
        root.createChild({
          title: element.cwd
        });
      });
      return root;
    }
  })
})
