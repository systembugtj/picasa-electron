import Service, { inject as service } from '@ember/service';
import Evented from '@ember/object/evented';
import { task } from 'ember-concurrency';

export default Service.extend(Evented, {
  fetchCache: service(),

  init() {
    this._super(...arguments);

    this.set("queue", []);
  },

  scanImageForCache: task(function * (target) {
    yield this.get("fetchCache").checkCache(target, false);
    this.trigger("imageScanned", target);
  }).maxConcurrency(2).enqueue(),

  requestScanFile(action) {
    this.get("scanImageForCache").perform(action);
  }
});
