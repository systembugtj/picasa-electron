import Ember from 'ember';
import folderReader from "../../utils/folder-reader";
export default Ember.Route.extend({
  model() {
    // Need a very specific path reading from preferences.
    return folderReader("/Users/albert.li/Desktop");
  }
});
