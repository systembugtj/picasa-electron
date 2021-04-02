import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find, findAll } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | floating mobile buttons', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    await render(hbs`{{floating-mobile-buttons}}`);

    assert.dom('*').hasText('');

    // Template block usage:
    await render(hbs`
      {{#floating-mobile-buttons}}
        template block text
      {{/floating-mobile-buttons}}
    `);

    assert.dom('*').hasText('template block text');
  });

  test('it displays expected dom elements', async function(assert) {
    await render(hbs`
    {{#floating-mobile-buttons}}
      <a href>test</a>
    {{/floating-mobile-buttons}}
    `);
    assert.dom('ul > li').exists({ count: 1 }, 'has one element');
    assert.dom('ul > li > ul').doesNotExist('has no child buttons');
  });

  test('it displays "button" and "right" classes by default', async function(assert) {
    await render(hbs`{{floating-mobile-buttons}}`);

    assert.dom('ul').hasClass('bottom', 'has class "bottom" by default');
    assert.dom('ul').hasClass('right', 'has class "right" by default');
  });

  test('it displays the classes passed in the position property', async function(assert) {
    await render(hbs`{{floating-mobile-buttons position="top left"}}`);

    assert.dom('ul').hasClass('top', 'has class "top" by default');
    assert.dom('ul').hasClass('left', 'has class "left" by default');
  });

  test('it should trim position param', async function(assert) {
    await render(hbs`{{floating-mobile-buttons position=" top  left "}}`);

    assert.dom('ul').hasClass('top', 'has class "top" by default');
    assert.dom('ul').hasClass('left', 'has class "left" by default');
  });

  test('it throws an error if the passed position property is not correct', function(assert) {
    assert.expectAssertion(async () => {
        await render(hbs`{{floating-mobile-buttons position="test"}}`);
      }, 'The position property must be a string with the values top|bottom and left|right.');
  });

  test('it could have child buttons', async function(assert) {
    await render(hbs`
    {{#floating-mobile-buttons}}
      {{floating-mobile-child-buttons}}
    {{/floating-mobile-buttons}}
    `);

    assert.dom('ul ul').exists({ count: 1 }, 'has one child buttons');
    assert.dom('ul > li:not(.floating-child-button)').exists({ count: 2 }, 'has two li elements on first level');
    assert.dom('ul ul > li').exists({ count: 1 }, 'has one li elements on second level');
  });
});
