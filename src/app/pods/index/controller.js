import Controller from "@ember/controller"
import { inject as service } from '@ember/service';

import { info } from "picasa/utils/logger";
import { normalizeImage } from "picasa/utils/data-normalizer";

const { dialog } = requireNode('electron').remote;

export default Controller.extend({
  windowMenu: service(),
  fileWatcher: service(),
  fetchCache: service(),
  folderScan: service(),

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
      this.importPhotosFromFolder();
    })

    this.get("fileWatcher").startWatcher();

    this.get("fileWatcher")
      .on("added", async (target) => {
        if(target.isFile) {
          const folders = await this.get("fileWatcher").getWatchedFolders()

          const matched = folders.filter(folder => target.path.indexOf(folder) >= 0)

          if(matched && matched.length > 0) {


            this.get("folderScan").requestScanFile(normalizeImage(matched[0], target.path))
          }
        } else {
          // Scan folder.
        }
      });

    this.get("folderScan")
      .on("imageScanned", (target) => {
        this.set("currentProcessing", target.path);
        this.set("showNotification", true);
      });
  },

  importPhotosFromFolder(item, focusedWindow) {
    if(this.get("showImportDialog")) {
      // Importing photos.
      return;
    }
    dialog.showOpenDialog(focusedWindow, {
      properties: ['openDirectory']
    }, (paths) => {
        if (paths) {
          this.set("showImportDialog", true);
          this.set("importSource", paths[0]);
        } else {
          info("No path selected");
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

  actions: {
    handleImportStarted() {
      this.set("disableCancel", true);
    },

    handleImportFinished(error) {
      this.set("showImportDialog", false);

      this.set("globalMessage", error ? error.message : "Import successfully!")
      this.set("showSystemNotification", true);
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

    },

    closeSystemToast() {
      this.set("showSystemNotification", false);
    }
  }
})
