import Component from '@ember/component';
import PreferenceMixin from "picasa/mixins/preference";

function startWatcher(path){
  var chokidar = require("chokidar");

  var watcher = chokidar.watch(path, {
      ignored: /[\/\\]\./,
      persistent: true
  });

  function onWatcherReady(){
      console.info('From here can you check for real changes, the initial scan has been completed.');
  }

  // Declare the listeners of the watcher
  watcher
  .on('add', function(path) {
        console.log('File', path, 'has been added');
  })
  .on('addDir', function(path) {
        console.log('Directory', path, 'has been added');
  })
  .on('change', function(path) {
       console.log('File', path, 'has been changed');
  })
  .on('unlink', function(path) {
       console.log('File', path, 'has been removed');
  })
  .on('unlinkDir', function(path) {
       console.log('Directory', path, 'has been removed');
  })
  .on('error', function(error) {
       console.log('Error happened', error);
  })
  .on('ready', onWatcherReady)
  .on('raw', function(event, path, details) {
       // This event should be triggered everytime something happens.
       console.log('Raw event info:', event, path, details);
  });
}
export default Component.extend(PreferenceMixin, {
  classNames: ["path-tree"],
  actions: {
    flatButton() {
      const { dialog } = requireNode('electron').remote;
      dialog.showOpenDialog({
          properties: ['openDirectory']
      }, (path) => {
          if (path) {
            this.getPreferenceService().addFolders(path);
            // Start to watch the selected path
            startWatcher(path[0]);
          } else {
            console.log("No path selected");
          }
      });
    }
  }
});
