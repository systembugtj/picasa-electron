import fetchImage from 'dummy/utils/fetch-image';
import { module, test } from 'qunit';

module('Unit | Utility | fetch image');

// Replace this with your real tests.
test('it works', function(assert) {
  let done = assert.async();

  fetchImage("http://placekitten.com/2000/1125").then(img => {
    assert.ok(img);
    done();
  });
});
