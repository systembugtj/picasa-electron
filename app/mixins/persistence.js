import Ember from 'ember';

export default Ember.Mixin.create({
  persistence: Ember.inject.service(),

  getPersistenceService() {
    return this.get("persistence");
  }
});
