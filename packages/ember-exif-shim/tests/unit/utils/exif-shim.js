// tests/unit/chartist-module-test.js
import { module, test } from 'qunit';
import EXIF from 'EXIF';

module('exif-js as an ES6 module');

test('it works', function(assert) {
  assert.ok(EXIF !== null);
});
