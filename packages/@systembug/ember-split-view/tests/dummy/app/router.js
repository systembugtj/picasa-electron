import EmberRouter from '@ember/routing/router';
import config from 'dummy/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('vertical');
  this.route('horizontal');
  this.route('verticalcomposite');
  this.route('horizontalcomposite');
  this.route('composite');
  this.route('collapsible');
});
