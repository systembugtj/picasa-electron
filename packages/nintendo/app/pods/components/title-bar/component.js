import Component from "@ember/component";
import { action, computed } from "@ember/object";
import { classNames } from "@ember-decorators/component";
import { isMacOSX } from "picasa/utils/platform";
import { inject } from "@ember/service";

@classNames("title-bar")
class TitleBarComponent extends Component {
  @inject electronApi;

  title = "";

  @computed
  get isVisible() {
    // Visible on macosx.
    // frame false will remove all titlebar and menu on windows and linux, but not on mac.
    // On mac, set titleBarStyle hidden/hiddenInset. will still have the menu and min/max/close.
    return isMacOSX();
  }

  @action
  addWatchedFolder() {
    const { dialog } = requireNode("@electron/remote");
    dialog.showOpenDialog(
      {
        properties: ["openDirectory"],
      },
      (path) => {
        if (path) {
          this.getPreferenceService().addFolders(path);
        } else {
          console.log("No path selected");
        }
      }
    );
  }

  doubleClick() {
    this.electronApi.send("picasa-toggle-window-max");
  }
}
export default TitleBarComponent;
