import Service, { inject as service } from '@ember/service';
import { isEmpty } from "lodash/lang";
import { resolve } from "rsvp";
import PreferenceMixin from "picasa/mixins/preference";
import { debug, info} from "picasa/utils/logger";

export default Service.extend(PreferenceMixin, {
  imageScale: service(),
  photoStorage: service(),

  checkCache(image) {
    if (!isEmpty(image.root) && !isEmpty(image.name)) {
      const { path, uniqueName } = image;
      info("Check ${path}");
      return this.getPreferenceService().getCachedPath()
        .then(cached => `${cached}/${uniqueName}`)
        .then(thumbnail => {
          return this.get("photoStorage").checkPhotoCached(uniqueName)
            .then(cached => {
              if (cached != null) {
                return thumbnail;
              } else {
                debug(`Check ${uniqueName} to ${thumbnail}`);
                return this.cacheImage(uniqueName, thumbnail, path);
              }
            })
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
    const resizer = this.get("imageScale");
    return resizer.fileExist(thumbnail);
  },

  cacheImage(uniqueName, thumbnail, path) {
    return this.thumbnailExist(thumbnail)
              .then(exist => {
                return this.updateCacheRecord(exist, uniqueName, thumbnail, path);
              })
              .then(() => thumbnail);
  },

  updateCacheRecord(exist, uniqueName, thumbnail, path) {
    const resizer = this.get("imageScale");
    return exist ?
                  this.get("photoStorage").setPhotoCached(uniqueName, thumbnail)
                  :
                  resizer.createThumbnail(path, thumbnail)
                    .then(() => this.get("photoStorage").setPhotoCached(uniqueName, thumbnail));
  }
});
