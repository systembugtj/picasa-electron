import Component from '@ember/component';
import { notEmpty } from '@ember/object/computed';
import { observes } from '@ember-decorators/object';
import { inject } from "@ember/service";
import { from } from 'rxjs';
import { concatMap, mergeMap, reduce, map } from 'rxjs/operators';
import { run } from "@ember/runloop";
import { error } from "picasa/utils/logger";

import PreferenceMixin from "picasa/mixins/preference";
import { action } from '@ember/object';


const PROPERTY_NAME = {
  FOLDERS: "folders",
  THUMBNAILS: "foldersWithThumbnail",
  MOVETO: "moveTo",
}

export default class FolderPhotosComponent extends Component.extend(PreferenceMixin) {
  @inject fetchCache;
  skipExictCheck = true;

  @notEmpty(PROPERTY_NAME.THUMBNAILS)
  hasFolders;

  @observes(PROPERTY_NAME.FOLDERS)
  folderChanged() {
    this.scanThumbnail();
  }

  folders = [];
  foldersWithThumbnail = [];
  imageClicked = () => {}

  init() {
    super.init(...arguments);
    this.scanThumbnail(this.skipExictCheck);
  }

  @action
  handleRefreshThumbnail(root) {
    this.scanThumbnail(false);
  }

  isCached(image, checkExist) {
    return from(this.fetchCache.checkCache(image, checkExist));
  }

  checkImages(folder, checkExist) {
    const mergeImage = (images, image) => {
      images.push(image);
      return images;
    };

    return from(folder.images).pipe (
        mergeMap(image => this.isCached(image, checkExist)),
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

  scanThumbnail(checkExist) {
    from(this.folders)
      .pipe(
        concatMap(folder => {
          return this.checkImages({ ... folder }, checkExist)
        }),
        reduce((acc, folder) => {
          acc.push(folder)
          return acc
        }, [])
      )
      .subscribe(folders => {
        run(() => {
          this.set("foldersWithThumbnail", folders);
        })
      },
      this.notifyReady,
      this.notifyReady);
  }
}
