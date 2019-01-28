import Controller from "@ember/controller"
import { computed } from "@ember/object";
import { inject as service } from '@ember/service';
import { hostname } from "picasa/utils/folder-reader";
import TreeNode from 'ember-tree-view/node';
const { dialog } = requireNode('electron').remote;

export default Controller.extend({
  windowMenu: service(),
  photoImport: service(),

  init() {
    this._super(...arguments);
    const windowMenu = this.get("windowMenu");
    windowMenu.on("openFolderSelection", () => {
      this.openDirectoryDialog();
    });

    windowMenu.on("openPreferences", () => {
      this.set("showPreferenceDialog", true);
    });

    windowMenu.on("importFromFolder", () => {
      this.importPhotosFromFoloer();
    })
  },

  importPhotosFromFoloer() {
    dialog.showOpenDialog({
      properties: ['openDirectory']
    }, (paths) => {
        if (paths) {
          this.set("showImportDialog", true);
          this.set("importSource", paths[0]);
          /*
          const path = paths[0];
          this.get("photoImport").import(path)
            .subscribe(photo => {
              this.set("fileInProgress", photo.file);
            }, () => {
              this.set("showImportDialog", false);
            }, () => {
              this.set("showImportDialog", false);
            })
          */
        } else {
          console.log("No path selected");
        }
    });
  },

  openDirectoryDialog() {
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
    handleImportStarted() {
      this.set("disableCancel", true);
    },

    handleImportFinished() {
      this.set("disableCancel", false);
    },

    closeImportDialog() {
      this.set("showImportDialog", false);
    },

    closeDialog() {
      this.set("showPreferenceDialog", false);
    },
    closeToast() {
      this.set("showNotification", false);
    },
    showImage() {

    }
  }
})
