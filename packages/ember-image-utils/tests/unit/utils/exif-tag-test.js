import queryExifTags from 'dummy/utils/exif-tag';
import { module, test } from 'qunit';

module('Unit | Utility | exif tag');

// Replace this with your real tests.
test('it works', function(assert) {
  const done = assert.async();
  queryExifTags("http://placekitten.com/2000/1125").then(tags => {
    assert.ok(tags != null);
    done();
  });
});
