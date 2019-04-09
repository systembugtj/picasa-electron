import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | image list', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    await render(hbs`{{image-list}}`);

    assert.dom('*').hasText('');

    // Template block usage:
    await render(hbs`
      {{#image-list}}
        template block text
      {{/image-list}}
    `);

    assert.dom('*').hasText('template block text');
  });
});
