import Ember from 'ember';
import {
  setup as setupContextMenu
} from '../utils/context-menu';

export default Ember.Route.extend({
  windowMenu: Ember.inject.service(),
  
  beforeModel() {
    this.get('windowMenu').setup();
    setupContextMenu();
  },
});
