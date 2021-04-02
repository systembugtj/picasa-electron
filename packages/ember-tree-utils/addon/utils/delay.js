import { Promise } from 'rsvp';
import { later } from "@ember/runloop";

var delay = function(ms) {
  ms = ms || 1500;
  return new Promise(function(resolve) {
    later(this, resolve, ms);
  });
};

export default delay;
