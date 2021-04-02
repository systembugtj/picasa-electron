import Mixin from '@ember/object/mixin';
import { computed } from '@ember/object';
import Ember from "@ember/engine";

export default Mixin.create({
  configName: computed(() => {
    let config = this;
    if (config) {
      return config.get('configName');
    } else {
      return 'default';
    }
  }),
  config: computed('configName', function() {
    return Ember.Config.getConfig(this.get('configName'));
  })
});
