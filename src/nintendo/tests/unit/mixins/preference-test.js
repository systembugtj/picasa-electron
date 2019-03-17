import EmberObject from '@ember/object';
import PreferenceMixin from 'picasa/mixins/preference';
import { module, test } from 'qunit';

module('Unit | Mixin | preference');

// Replace this with your real tests.
test('it works', function(assert) {
  let PreferenceObject = EmberObject.extend(PreferenceMixin);
  let subject = PreferenceObject.create();
  assert.ok(subject);
});
