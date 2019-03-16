import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | title-bar', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`{{title-bar}}`);

    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      {{#title-bar}}
        template block text
      {{/title-bar}}
    `);

    assert.dom(this.element).hasText('template block text');
  });
});
