import Service from '@ember/service';
import { inject as service } from '@ember/service';
import { task } from 'ember-concurrency';

export default Service.extend({
  fetchCache: service(),

  init() {
    this._super(...arguments);

    this.set("queue", []);
  },

  scanImageForCache: task(function * (target) {
    yield this.get("fetchCache").checkCache(target, false);
  }).maxConcurrency(2).enqueue(),

  requestScanFile(action) {
    this.get("scanImageForCache").perform(action);
  }
});
