import Component from '@ember/component';

export default Component.extend({
  actions: {
    saveToDisk() {
      this.set("showToast", true);
    },
    closeToast() {
      this.set("showToast", false);
    },
    buttonAction() {

    }
  }
});
