import Component from '@ember/component';
import { notEmpty } from '@ember/object/computed';
import { observer } from '@ember/object';
import { isEmpty } from "lodash/lang";
import { inject as service } from "@ember/service";
import PreferenceMixin from "picasa/mixins/preference";

export default Component.extend(PreferenceMixin, {
  root: "",
  src: "",
  imageScale: service(),
  photoStorage: service(),
  hasImageReady: notEmpty("imageSrc"),

  init() {
    this._super(...arguments);
    observer("root", "src", () => {
      this.checkCache();
    });
    this.checkCache();
  },

  checkCache() {
    const root = this.get("root");
    const src = this.get("src");

    if (!isEmpty(root) && !isEmpty(src)) {

      const resizer = this.get("imageScale");
      const path = `${root}/${src}`;
      const uniqueName = resizer.uniqueName(path);

      this.getPreferenceService().getCachedPath()
        .then(cached => `${cached}/${uniqueName}`)
        .then(thumbnail => {
          return this.get("photoStorage").checkPhotoCached(uniqueName)
            .then(cached => {
              if (cached != null) {
                return thumbnail;
              } else {
                return this.get("imageScale").fileExist(thumbnail)
                  .then(exists => {
                    if (exists) {
                      return this.get("photoStorage").setPhotoCached(uniqueName, thumbnail)
                        .then(() => thumbnail);
                    } else {
                      return resizer.createThumbnail(path, thumbnail)
                        .then(() => this.get("photoStorage").setPhotoCached(uniqueName, thumbnail))
                        .then(() => thumbnail);
                    }
                  })
              }
            })
        })
        .then(thumbnail => {
          this.set("imageSrc", `file://${thumbnail}`);
        })
    }
  }
});
