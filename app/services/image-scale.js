import Service from '@ember/service';
import Evented from '@ember/object/evented';
import { uniqueName } from "picasa/utils/folder-reader";
import { info } from "picasa/utils/logger";
import { task, waitForEvent } from 'ember-concurrency';

const { ipcRenderer } = requireNode('electron');
const EVENT_THUMBNAIL_CREATED = "thumbnailCreated";

export default Service.extend(Evented, {
  init() {
    this._super(...arguments);
    // wait for event, ready.
    ipcRenderer.on('picasa-thumbnail-ready', (event, arg) => {
      info(event, arg);
      this.trigger(EVENT_THUMBNAIL_CREATED);
    });
  },

  uniqueName(path) {
    return uniqueName(path);
  },

  fileExist(file) {
    return new Promise(resolve => {
      const fs = requireNode('fs');

      fs.access(file, fs.constants.F_OK, (err) => {
        resolve(!err);
      });
    });
  },

  createThumbnail: task(function* (path, thumbnail, resolve) {
    ipcRenderer.send("picasa-create-thumbnail", {
      path,
      thumbnail,
      width: 100,
      height: 100,
      withoutEnlargement: true
    })
    yield waitForEvent(this, EVENT_THUMBNAIL_CREATED);
    resolve && resolve(thumbnail);
  }).maxConcurrency(1).enqueue(),
});
