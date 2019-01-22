import Component from '@ember/component';
import { notEmpty } from '@ember/object/computed';
import { observer } from '@ember/object';
import { inject as service } from "@ember/service";
import { from } from 'rxjs';
import { mergeMap, reduce } from 'rxjs/operators';
import PreferenceMixin from "picasa/mixins/preference";
import { A } from "@ember/array";

const PROPERTY_NAME = {
  FOLDERS: "folders"
}
export default Component.extend(PreferenceMixin, {
  fetchCache: service(),
  hasFolders: notEmpty("foldersWithThumbnail"),
  folderChanged: observer(PROPERTY_NAME.FOLDERS, () => {
    this.scanThumbnail();
  }),

  init() {
    this._super(...arguments);
    this.scanThumbnail();
  },

  scanThumbnail() {
    const $source = from(this.get(PROPERTY_NAME.FOLDERS))
    const mergeImage = (images, image) => {
      images.push(image);
      return images
    };

    $source.pipe(
        mergeMap(folder => from(folder.images)),
        mergeMap(image => this.get("fetchCache").checkCache(image)),
        reduce(mergeImage, A()),
        reduce((folders, images) => {
          folders.forEach(folder => {
            if (folder.cwd === images[0].root) {
              folder.images = images;
            }
          });
          return folders;
        }, this.get(PROPERTY_NAME.FOLDERS))
      )
      .subscribe(folders => {
        this.set("foldersWithThumbnail", folders);
      });
  }
});
