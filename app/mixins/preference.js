import Ember from 'ember';

export default Ember.Mixin.create({
  preferenceManager: Ember.inject.service(),

  getPreferenceService() {
    return this.get("preferenceManager");
  }
});
