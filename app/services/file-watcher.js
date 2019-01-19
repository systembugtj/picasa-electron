import Service from '@ember/service';
import { inject as service} from '@ember/service';
import createWatcher from '../utils/fs-watch';
import { difference } from "lodash/array";

export default Service.extend({
  preferenceManager: service(),

  init() {
    this._super(...arguments);

    this.get("preferenceManager")
      .on("folderUpdated", folders => this.adjustWatchedFolder(folders));
  },

  adjustWatchedFolder(folders) {
    const watcher = this.get("watcher");
    if (watcher) {
      const current = watcher.getWatched();

      const removed = difference(current, folders);
      const added = difference(folders, current);
      watcher.unwatch(removed);
      watcher.addObserver(added);
    }
  },

  startWatcher() {
    this.get("preferenceManager").getWatchedFolder()
      .then(paths => {
        const watcher = createWatcher(paths, {
          ignored: /[/\\]\./,
          persistent: true
          });
        // Declare the listeners of the watcher
        watcher
        .on('add', function(path) {
          console.log('File', path, 'has been added');
          this.trigger("added", { isFile: true, path });
        })
        .on('addDir', function(path) {
          console.log('Directory', path, 'has been added');
          this.trigger("added", { isFile: false, path });
        })
        .on('change', function(path) {
          console.log('File', path, 'has been changed');
          this.trigger("changed", { isFile: true, path });
        })
        .on('unlink', function(path) {
          console.log('File', path, 'has been removed');
          this.trigger("unlink",  { isFile: true, path });
        })
        .on('unlinkDir', function(path) {
          console.log('Directory', path, 'has been removed');
          this.trigger("unlink",  { isFile: false, path });
        })
        .on('error', function(error) {
          console.log('Error happened', error);
          this.trigger("error",  { error });
        })
        .on('ready', function() {
          console.info('From here can you check for real changes, the initial scan has been completed.');
          this.trigger("ready");
        })
        .on('raw', function(event, path, details) {
          // This event should be triggered everytime something happens.
          console.log('Raw event info:', event, path, details);
          this.trigger("raw", { event, path, details });
        });
      })
  }
});
