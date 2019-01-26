import Route from '@ember/routing/route';
import {
  setup as setupContextMenu
} from 'picasa/utils/context-menu';
import { inject as service } from '@ember/service';
import I18nMixin from 'ember-i18next/mixins/i18n';

export default Route.extend(I18nMixin, {
  windowMenu: service(),

  beforeModel() {
    return this.get('i18n').initLibraryAsync().then(() => {
      this.get('windowMenu').setup();
      setupContextMenu();
    });
  },

  error(e) {
    //handle error
    if (e.code && e.message) {
      this.showErrorPrompt(e.code, e.message);
    }
  }
});
