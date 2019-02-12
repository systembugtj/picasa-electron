import Component from '@ember/component';
import { from } from 'rxjs';
import { concatMap, mergeMap, reduce, map } from 'rxjs/operators';
import { run } from "@ember/runloop";
import { error } from "picasa/utils/logger";
import { inject } from '@ember-decorators/service';
import { observes } from '@ember-decorators/object';
import { notEmpty } from '@ember-decorators/object/computed';

import PreferenceMixin from "picasa/mixins/preference";

const PROPERTY_NAME = {
  FOLDERS: "folders",
  THUMBNAILS: "foldersWithThumbnail"
}

export default class FolderPhotosComponent extends Component.extend(PreferenceMixin) {
  folder = [];
  foldersWithThumbnail = [];

  @inject
  fetchCache;

  @notEmpty(PROPERTY_NAME.THUMBNAILS)
  hasFolders;

  @observes(PROPERTY_NAME.FOLDERS)
  folderChanged() {
    this.scanThumbnail();
  }

  imageClicked = () => {};

  init() {
    super.init(...arguments);
    this.scanThumbnail();
  }

  isCached(image) {
    return from(this.get("fetchCache").checkCache(image, true));
  }

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
  }

  notifyReady(e) {
    if (e) error(e);
    const { ipcRenderer } = requireNode('electron');
    ipcRenderer.send('picasa-is-ready');
  }

  scanThumbnail() {
    from(this.get(PROPERTY_NAME.FOLDERS))
      .pipe(
        concatMap(folder => this.checkImages(folder))
      )
      .subscribe(folder => {
        run(() => {
          const folders = this.get(PROPERTY_NAME.THUMBNAILS);
          folders.pushObject(folder);
        })
      },
      this.notifyReady,
      this.notifyReady);
  }
}
