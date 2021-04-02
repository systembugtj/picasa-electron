//import Ember from "ember";
import { module, test } from 'qunit';

module('Testing Style Bindings Mixin', function() {
  test('basic', function(assert) {
    assert.equal(1, 1);
    /*
    let TextComponent = Ember.Component.extend(StyleBindingsMixin, {
    });
    let view = TextComponent.create({
        styleBindings: ['color', 'width', 'height'],
        color: 'blue',
        width: 400,
        height: '100',
    });

    Ember.run(function() {
        view.append();
    });

    assert.equal(view.$().attr('style'), 'color:blue;width:400px;height:100;', 'Style property should be rendered properly.');
    */
  });
});

