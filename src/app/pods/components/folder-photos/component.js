import Component from '@ember/component';
import { notEmpty } from '@ember/object/computed';
import { observer } from '@ember/object';
import { inject as service } from "@ember/service";
import { from } from 'rxjs';
import { mergeMap, reduce, map } from 'rxjs/operators';
import PreferenceMixin from "picasa/mixins/preference";
import { run } from "@ember/runloop";
import { error } from "picasa/utils/logger";

const PROPERTY_NAME = {
  FOLDERS: "folders",
  THUMBNAILS: "foldersWithThumbnail"
}

export default Component.extend(PreferenceMixin, {
  fetchCache: service(),
  hasFolders: notEmpty(PROPERTY_NAME.THUMBNAILS),
  folderChanged: observer(PROPERTY_NAME.FOLDERS, () => {
    this.scanThumbnail();
  }),
  imageClicked: () => {},

  init() {
    this._super(...arguments);
    this.set(PROPERTY_NAME.THUMBNAILS, []);
    this.scanThumbnail();
  },

  isCached(image) {
    return from(this.get("fetchCache").checkCache(image, true));
  },

  checkImages(folder) {
    const mergeImage = (images, image) => {
      images.push(image);
      return images;
    };

    return from(folder.images).pipe (
        mergeMap(image => this.isCached(image)),
        reduce(mergeImage, []),
        map(images => {
          folder.images = images;
          return folder;
        })
      );
  },

  scanThumbnail() {
    from(this.get(PROPERTY_NAME.FOLDERS))
      .pipe(
        mergeMap(folder => this.checkImages(folder))
      )
      .subscribe(folder => {
        run(() => {
          const folders = this.get(PROPERTY_NAME.THUMBNAILS);
          folders.pushObject(folder);
        })
      }, error, () => {
        const { ipcRenderer } = requireNode('electron');
        ipcRenderer.send('picasa-is-ready');
      });
  },
});