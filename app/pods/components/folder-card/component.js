import Component from '@ember/component';
import InViewportMixin from 'ember-in-viewport';

export default Component.extend(InViewportMixin, {
  imageClicked: () => {},
  actions: {
    saveToDisk() {
      this.set("showToast", true);
    },
    closeToast() {
      this.set("showToast", false);
    },
    buttonAction() {

    },
    handleImageClicked(src) {
      this.set("lightboxSrc", `file://${src}`);
      this.set("showDialog", true);
    },

    closeDialog() {
      this.set("showDialog", false);
    }
  }
});
