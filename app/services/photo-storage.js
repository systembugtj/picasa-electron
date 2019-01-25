import Service from '@ember/service';
import { debug, error } from "picasa/utils/logger";

const Realm = require('realm');
// Define your models and their properties
const PhotoCacheSchema = {
  name: 'PhotoCache',
  properties: {
    uniqueName:  'string',
    cached: 'bool',
    location: "string"
  }
};
const NAME = "PhotoCache";

export default Service.extend({

  checkPhotoCached(uniqueName) {
    return Realm.open({schema: [PhotoCacheSchema]})
      .then(realm => {
        debug(`Check if ${uniqueName} is cached`);
        const items = realm.objects(NAME).filtered(`uniqueName = "${uniqueName}"`);
        if (items.length > 0) {
          return items;
        } else {
          return null;
        }
      })
      .catch(err => {
        error(err);
        return null;
      })
  },

  setPhotoCached(uniqueName, location) {
    return Realm.open({schema: [PhotoCacheSchema]})
      .then(realm => {
        realm.write(() => {
          realm.create(NAME, {
            uniqueName:  uniqueName,
            cached: true,
            location: location
          });
        });
      })
      .catch(err => {
        console.log(err);
      })
  }

});

