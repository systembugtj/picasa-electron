import Service from '@ember/service';
import { Promise } from 'rsvp';
import EventNames from "picasa/constants/event-name"
import { inject } from '@ember-decorators/service';
import Evented from '@ember/object/evented';

export default class PersistenceService extends Service.extend(Evented) {
  @inject electronApi;

  init() {
    this._super(...arguments);

    this.electronApi.ipc.on('tripasa-access-token', (event, arg) => {
      this.set("accessToken", arg)
        .then(token => {
          this.trigger(EventNames.AccessTokenReady, token);
        })
    });
  }

  getService() {
    return requireNode('electron-json-storage');
  }

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
  }

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
}
