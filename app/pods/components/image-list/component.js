import Component from '@ember/component';

export default Component.extend({
  classNames: ["image-list"],
  imageClicked: () => {},
  actions: {
    handleImageClicked(src) {
      this.imageClicked(src);
    }
  }
});
