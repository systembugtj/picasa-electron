import Service, { inject as service } from '@ember/service';
import { isEmpty } from "lodash/lang";
import { resolve } from "rsvp";
import { info } from "picasa/utils/logger";

export default Service.extend({
  imageScale: service(),
  photoStorage: service(),
  preferenceManager: service(),

  checkCache(image, skipExistCheck) {
    if (!isEmpty(image.root) && !isEmpty(image.name)) {
      const { fullPath, uniqueName } = image;
      return this.preferenceManager.getCachedPath()
        .then(cached => `${cached}/${uniqueName}`)
        .then(thumbnail => {
          return this.photoStorage.checkPhotoCached(uniqueName)
            .then(cached => {
              if (cached != null || skipExistCheck) {
                return thumbnail;
              } else {
                return this.cacheImage(uniqueName, thumbnail, fullPath);
              }
            });
        })
        .then(thumbnail => {
          return {
            ...image,
            thumbnail
          }
        });
    } else {
      return resolve(image);
    }
  },

  thumbnailExist(thumbnail) {
    const resizer = this.imageScale;
    return resizer.fileExist(thumbnail);
  },

  cacheImage(uniqueName, thumbnail, path) {
    info(`caching => ${thumbnail} : ${path}`)
    return this.thumbnailExist(thumbnail)
              .then(exist => {
                return this.updateCacheRecord(exist, uniqueName, thumbnail, path);
              })
              .then(() => thumbnail);
  },

  updateCacheRecord(exist, uniqueName, thumbnail, path) {
    return exist ?
                  this.photoStorage.setPhotoCached(uniqueName, thumbnail)
                  :
                  this.createThumbnail(path, thumbnail)
                    .then(() => this.photoStorage.setPhotoCached(uniqueName, thumbnail));
  },

  createThumbnail(path, thumbnail) {
    return new Promise(resolve => {
      this.imageScale.get("createThumbnail").perform(path, thumbnail, resolve);
    });
  }
});
