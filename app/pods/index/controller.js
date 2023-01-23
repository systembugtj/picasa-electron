import Controller from "@ember/controller"
import { action } from "@ember/object";
import { inject as service } from '@ember/service';
import I18nMixin from 'ember-i18next/mixins/i18n';
import { info } from "picasa/utils/logger";
import { normalizeImage } from "picasa/utils/data-normalizer";
import { isMacOSX } from "picasa/utils/platform";

export default class IndexController extends Controller.extend(I18nMixin) {
  @service windowMenu;
  @service fileWatcher;
  @service fetchCache;
  @service folderScan;
  @service electronApi;
  @service preferenceManager;

  get macosxStyle() {
    return isMacOSX() ? "macosx" : "";
  }

  get dialog() {
    return this.electronApi.dialog;
  }

  // Use init instead of constructor
  // refer to https://blog.emberjs.com/2019/01/26/emberjs-native-class-update-2019-edition.html#toc_code-constructor-code-vs-code-init-code
  init() {
    super.init(...arguments);

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


            this.folderScan.requestScanFile(normalizeImage(matched[0], target.path))
          }
        } else {
          // Scan folder.
        }
      });

    this.folderScan
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
    this.dialog.showOpenDialog(focusedWindow, {
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

  openDirectoryDialog(item, focusedWindow) {
    this.dialog.showOpenDialog(focusedWindow, {
        properties: ['openDirectory']
    }, (paths) => {
        if (paths) {
          this.preferenceManager.addFolders(paths);
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
