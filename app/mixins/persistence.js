import Mixin from '@ember/object/mixin';
import { inject } from '@ember/service';

export default Mixin.create({
  persistence: inject.service(),

  getPersistenceService() {
    return this.get("persistence");
  }
});
