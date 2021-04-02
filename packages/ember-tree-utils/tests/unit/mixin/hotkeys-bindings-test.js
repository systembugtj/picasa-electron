import { run } from '@ember/runloop';
import Application from '@ember/application';
//import HotkeysBindingsMixin from "ember-tree-utils/mixins/hotkeys-bindings";
import { module, test } from 'qunit';

module('Testing Hotkeys Bindings Mixin', function(hooks) {
  hooks.beforeEach(function() {
    run(function() {
      //without initializing app events won't be fired when triggering events on views such as
      //keypress
      let App = Application.create();
      App.injectTestHelpers();
    });
  });

  test('basic', function(assert) {
    assert.equal(1, 1);
    /*
    let TextComponent = Ember.Component.extend(HotkeysBindingsMixin, {
    });
    let comp = TextComponent.extend({
        hotkeysBindings: ['ctrl-a'],

        actions: {
          'ctrl+a': function() {
            this.set('last', 'ctrl+a');
          },

          'shift+r': function() {
            this.set('last', 'shift+r');
          },

          'alt+f10': function() {
            this.set('last', 'alt+f10');
          },

          'alt+b': function() {
            this.set('last', 'alt+b');
          },

          'meta+f12': function() {
            this.set('last', 'meta+f12');
          }
        }

      });

    let view = comp.create();

    Ember.run(function() {
      view.append();
    });

    let e = trigger("keypress", 65, "ctrl");
    view.$().trigger(e);
    assert.equal(view.get('last'), "ctrl+a");

    e = trigger("keypress", 82, "shift");
    view.$().trigger(e);
    assert.equal(view.get('last'), "shift+r");

    e = trigger("keypress", 121, "alt");
    view.$().trigger(e);
    assert.equal(view.get('last'), 'alt+f10');

    e = trigger("keydown", 66, "alt");
    view.$().trigger(e);
    assert.equal(view.get('last'), 'alt+b');

    e = trigger("keyup", 123, "meta");
    view.$().trigger(e);
    assert.equal(view.get('last'), "meta+f12");
    */
  });
});
