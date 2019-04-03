import Route from '@ember/routing/route';
import { route } from "ember-redux";
import { inject } from "@ember-decorators/service";

const model = function (/*dispatch*/) {
  // Need a very specific path reading from preferences.
  return this.fileWatcher.getWatchedFolders();
};

class TripRoute extends Route {
  @inject fileWatcher;
  @inject persistence;

  model() {
    return this.persistence.get("accessToken");
  }
}


export default route({ model })(TripRoute)
