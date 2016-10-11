import Ember from 'ember';
import PersistenceMixin from 'picasa/mixins/persistence';
import { module, test } from 'qunit';

module('Unit | Mixin | persistence');

// Replace this with your real tests.
test('it works', function(assert) {
  let PersistenceObject = Ember.Object.extend(PersistenceMixin);
  let subject = PersistenceObject.create();
  assert.ok(subject);
});
