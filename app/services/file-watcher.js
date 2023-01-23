import Service from '@ember/service';
import Evented from '@ember/object/evented';
import createWatcher from 'picasa/utils/fs-watch';
import { difference } from "lodash/array";
import PreferenceMixin from "picasa/mixins/preference";
import Precondition from "ember-precondition/utils/precondition";
import { specialFolder, FOLDERS } from "picasa/utils/folder-reader";
import { info } from "picasa/utils/logger";
/**
 * Watch folders change
 */
export default Service.extend(Evented, PreferenceMixin, {
  init() {
    this._super(...arguments);

    this.getPreferenceService()
      .on("folderUpdated", folders => this.adjustWatchedFolder(folders));
  },

  getThumbnailCachePath() {
    return this.getPreferenceService().getCachedPath();
  },

  getWatchedFolders() {
    return this.getThumbnailCachePath()
      .then(() => this.getPreferenceService().getWatchedFolders())
      .then(paths => {
        Precondition.checkNotEmpty(paths);
        return paths;
      })
      .catch(() => {
        const path = specialFolder(FOLDERS.DESKTOP);
        return this.getPreferenceService().addFolder(path, true).then(() => {
          return [path];
        });
      })
  },

  adjustWatchedFolder(folders) {
    const watcher = this.watcher;
    if (watcher) {
      const current = watcher.getWatched();

      const removed = difference(current, folders);
      const added = difference(folders, current);
      watcher.unwatch(removed);
      watcher.addObserver(added);
    }
  },

  sendEvent(name, param, log) {
    if (name === "ready") {
      this.set("ready", true);
      return;
    }

    if (this.ready) {
      info(...log);
      this.trigger(name, param);
    }
  },

  startWatcher() {
    this.preferenceManager.getWatchedFolders()
      .then(paths => {
        const watcher = createWatcher(paths, {
          ignored: /[/\\]\./,
          persistent: true
          });
        // Declare the listeners of the watcher
        watcher
        .on('add', (path) => {
          this.sendEvent("added", { isFile: true, path }, ["File", path, "has been added"]);
        })
        .on('addDir', (path) => {
          this.sendEvent("added", { isFile: false, path }, ["Directory", path, "has been added"]);
        })
        .on('change', (path) => {
          this.sendEvent("changed", { isFile: true, path }, ["File", path, "has been changed"]);
        })
        .on('unlink', (path) => {
          this.sendEvent("unlink",  { isFile: true, path }, ["File", path, "has been removed"]);
        })
        .on('unlinkDir', (path) => {
          this.sendEvent("unlink",  { isFile: false, path }, ["Directory", path, "has been removed"]);
        })
        .on('error', (error) => {
          this.sendEvent("error",  { error }, ["Error", error, "has been happened"]);
        })
        .on('ready', () => {
          this.sendEvent("ready", {}, ["Ready", 'From here can you check for real changes, the initial scan has been completed.']);
        })
        .on('raw', (event, path, details) => {
          // This event should be triggered every time something happens.
          this.sendEvent("raw", { event, path, details }, ['Raw event info:', event, path, details]);
        });
      })
  }
});
