import Service, { inject as service } from '@ember/service';
import { isEmpty } from "lodash/lang";
import { resolve } from "rsvp";
import PreferenceMixin from "picasa/mixins/preference";
import { info } from "picasa/utils/logger";

export default Service.extend(PreferenceMixin, {
  imageScale: service(),
  photoStorage: service(),

  checkCache(image, skipExistCheck) {
    if (!isEmpty(image.root) && !isEmpty(image.name)) {
      const { path, uniqueName } = image;
      return this.getPreferenceService().getCachedPath()
        .then(cached => `${cached}/${uniqueName}`)
        .then(thumbnail => {
          return this.photoStorage.checkPhotoCached(uniqueName)
            .then(cached => {
              if (cached != null || skipExistCheck) {
                return thumbnail;
              } else {
                return this.cacheImage(uniqueName, thumbnail, path);
              }
            });
        })
        .then(thumbnail => {
          image.thumbnail = thumbnail;
          return image;
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
