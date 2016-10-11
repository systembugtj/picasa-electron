import Ember from 'ember';

export default Ember.Service.extend({

  getService() {
    return requireNode('electron-json-storage');
  },

  get(key) {
    return new Ember.RSVP.Promise((resolve, reject) => {
      this.getService().get(key, function(error, data) {
        if (error) {
          reject(error);
        } else {
          resolve(data);
        }
      });
    });
  },

  set(key, value) {
    return new Ember.RSVP.Promise((resolve, reject) => {
      this.getService().set(key, value, (error) => {
        if (error) {
          reject(error);
        } else {
          resolve(value);
        }
      });
    });
  }
});
