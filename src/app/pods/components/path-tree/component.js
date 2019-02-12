import Component from '@ember/component';
import { classNames } from '@ember-decorators/component';
import { action } from '@ember-decorators/object';

import PreferenceMixin from "picasa/mixins/preference";
import I18nMixin from 'ember-i18next/mixins/i18n';

@classNames("path-tree")
class PathTreeComponent extends Component.extend(PreferenceMixin, I18nMixin) {
  expandDepth = 1;

  @action
  addWatchedFolder() {
    const { dialog } = requireNode('electron').remote;
    dialog.showOpenDialog({
        properties: ['openDirectory']
    }, (path) => {
        if (path) {
          this.getPreferenceService().addFolders(path);
        } else {
          console.log("No path selected");
        }
    });
  }
}

export default PathTreeComponent;
