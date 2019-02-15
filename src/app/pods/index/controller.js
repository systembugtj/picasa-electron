import Controller from "@ember/controller"
import { action } from "@ember-decorators/object";
import { inject } from '@ember-decorators/service';
import I18nMixin from 'ember-i18next/mixins/i18n';
import { info } from "picasa/utils/logger";
import { normalizeImage } from "picasa/utils/data-normalizer";

const { dialog } = requireNode('electron').remote;

export default class IndexController extends Controller.extend(I18nMixin) {
  @inject windowMenu;
  @inject fileWatcher;
  @inject fetchCache;
  @inject folderScan;

  init() {
    super.init(...arguments)

    this.windowMenu.on("openFolderSelection", () => {
      this.openDirectoryDialog();
    });

    this.windowMenu.on("openPreferences", () => {
      this.set("showPreferenceDialog", true);
    });

    this.windowMenu.on("importFromFolder", () => {
      this.importPhotosFromFolder();
    })

    this.fileWatcher.startWatcher();

    this.fileWatcher
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
        this.currentProcessing = target.path;
        this.showNotification = true;
      });
  }
  importPhotosFromFolder(item, focusedWindow) {
    if(this.showImportDialog) {
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
  }

  openDirectoryDialog() {
    dialog.showOpenDialog({
        properties: ['openDirectory']
    }, (paths) => {
        if (paths) {
          this.getPreferenceService().addFolders(paths);
        } else {
          info("No path selected");
        }
    });
  }
  @action
  handleImportStarted() {
    this.set("disableCancel", true);
  }
  @action
  handleImportFinished(error) {
    this.set("showImportDialog", false);

    this.set("globalMessage", error ? error.message : "Import successfully!")
    this.set("showSystemNotification", true);
  }
  @action
  closeImportDialog() {
    this.set("showImportDialog", false);
  }
  @action
  closeDialog() {
    this.set("showPreferenceDialog", false);
  }
  @action
  closeToast() {
    this.set("showNotification", false);
  }
  @action
  showImage() {

  }
  @action
  closeSystemToast() {
    this.set("showSystemNotification", false);
  }
}
