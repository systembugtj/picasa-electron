import Component from '@ember/component';
import { action } from '@ember-decorators/object';
import { classNames } from '@ember-decorators/component';

@classNames("title-bar")
class TitleBarComponent extends Component {

  title = "";

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
export default TitleBarComponent;
