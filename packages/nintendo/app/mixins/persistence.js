import Mixin from '@ember/object/mixin';
import { inject as service } from '@ember/service';

export default Mixin.create({
  persistence: service(),

  getPersistenceService() {
    return this.persistence;
  }
});
