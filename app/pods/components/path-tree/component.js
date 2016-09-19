import Ember from 'ember';
import TreeNode from 'ember-tree-view/node'

export default Ember.Component.extend({
  classNames: ["path-tree"],
  init() {
    this._super(...arguments);
    var family, gaya, josh, lud, moses, suz, verdi;
    family = TreeNode.create({
      title: 'Family'
    });
    suz = family.createChild({
      title: 'Susan'
    });
    lud = family.createChild({
      title: 'Luda'
    });
    josh = suz.createChild({
      title: 'Josh'
    });
    moses = suz.createChild({
      title: 'Moses'
    });
    verdi = lud.createChild({
      title: 'Verdi'
    });
    gaya = lud.createChild({
      title: 'Gaya'
    });
    return this.set('model', family);
  },
  actions: {
    expand() {
      this.get('selected').toggleProperty('expanded');
    }
  }
});
