import EmberObject from '@ember/object';
import PersistenceMixin from 'picasa/mixins/persistence';
import { module, test } from 'qunit';

module('Unit | Mixin | persistence');

// Replace this with your real tests.
test('it works', function(assert) {
  let PersistenceObject = EmberObject.extend(PersistenceMixin);
  let subject = PersistenceObject.create();
  assert.ok(subject);
});
