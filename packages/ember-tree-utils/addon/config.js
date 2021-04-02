import EmberObject from '@ember/object';
import Namespace from '@ember/application/namespace';

/*
Maintain a list of configuration within an Ember Namespace,
*/
export default Namespace.extend({
  _configs: EmberObject.create(),

  getConfig(name) {
    return this._configs.get(name);
  },

  addConfig(name, config) {
    let defaultConfig = this._configs.get('default');
    let newConfig = EmberObject.create(config);

    if (defaultConfig) {
      Object.apply(newConfig, defaultConfig)
    }
    return this._configs.set(name, newConfig);
  }
});
