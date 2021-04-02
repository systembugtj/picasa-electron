import { normalizeImages } from 'picasa/utils/data-normalizer';
import { module, test } from 'qunit';

module('Unit | Utility | data-normalizer', function(/*hooks*/) {

  // Replace this with your real tests.
  test('it works', async function(assert) {
    const root = "/";
    const images = ["a", "b"];
    let result = await normalizeImages(root, images, true); // use promise then can be await.
    assert.equal(result.length, 2);
    assert.equal(result[0].root, root);
    assert.equal(result[0].image, images[0]);
    assert.equal(result[0].path, `${root}/${images[0]}`);
  });
});
