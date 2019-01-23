import Component from '@ember/component';

export default Component.extend({
  imageClicked: () => {},
  actions: {
    imageClicked() {
      this.imageClicked(this.get("source"));
    }
  }
});
