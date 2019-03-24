import Service from '@ember/service';
import { Promise } from 'rsvp';

export default Service.extend({

  getService() {
    return requireNode('electron-json-storage');
  },

  get(key) {
    return new Promise((resolve, reject) => {
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
    return new Promise((resolve, reject) => {
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
