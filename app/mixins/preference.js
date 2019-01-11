import Mixin from '@ember/object/mixin';
import { inject } from '@ember/service';

export default Mixin.create({
  preferenceManager: inject.service(),

  getPreferenceService() {
    return this.get("preferenceManager");
  }
});
