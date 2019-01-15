import Route from '@ember/routing/route';
import {
  setup as setupContextMenu
} from '../utils/context-menu';
import { inject as service } from '@ember/service';


export default Route.extend({
  windowMenu: service(),

  beforeModel() {
    this.get('windowMenu').setup();
    setupContextMenu();
  },

  error(e) {
    //handle error
    if (e.code && e.message) {
      this.showErrorPrompt(e.code, e.message);
    }
  }
});
