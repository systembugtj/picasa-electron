import Ember from 'ember';
import PreferenceMixin from 'picasa/mixins/preference';
import { module, test } from 'qunit';

module('Unit | Mixin | preference');

// Replace this with your real tests.
test('it works', function(assert) {
  let PreferenceObject = Ember.Object.extend(PreferenceMixin);
  let subject = PreferenceObject.create();
  assert.ok(subject);
});
