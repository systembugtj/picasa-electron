import Component from '@ember/component';

export default Component.extend({

  doubleClick() {
    this.imageClicked(this.get("source"));
  },

  imageClicked: () => {},

  actions: {
    handleImageClick() {
      this.imageClicked(this.get("source"));
    }
  }
});
