import Component from '@ember/component';

export default Component.extend({
  classNames: ["path-tree"],
  actions: {
    expand() {
      this.get('selected').toggleProperty('expanded');
    }
  }
});
