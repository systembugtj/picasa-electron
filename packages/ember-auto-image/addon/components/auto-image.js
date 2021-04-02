import Component from '@ember/component';
import { htmlSafe } from '@ember/template';
import { observer } from '@ember/object';
import { computed } from "@ember/object";
import { inject as service } from "@ember/service";
import { task } from "ember-concurrency";

import layout from '../templates/components/auto-image';
import InViewportMixin from 'ember-in-viewport';


export default Component.extend(InViewportMixin, {
  layout,
  autoScaleImage: service(),
  width: null,
  height: null,
  title: "",
  src: "",
  size: undefined,
  loaded: false,

  imageStyle: computed('size', function() {
    const size = this.size;
    return size ? htmlSafe(`width: ${size.width}px; height: ${size.height}px`) : htmlSafe("");
  }),

  containerStyle: computed('width', 'height', function() {
    const width = parseInt(this.width);
    const height = parseInt(this.height);

    return htmlSafe(`width: ${width}px;height: ${height}px`);
  }),

  srcChanged: observer("src", function() {
    this.set("loaded", false);
    if (this.viewportEntered) {
      this.loadImage();
    }
  }),

  didExitViewport() {
  },

  didEnterViewport() {
    // If not loaded, fetch image and show it.
    if (!this.loaded) {
      this.loadImage.perform();
    }
  },

  loadImage: task(function * () {
    let width = parseInt(this.width);
    let height = parseInt(this.height);
    const src = this.src;
    const fallbackSrc = this.fallbackSrc;

    const result = yield this.autoScaleImage.get("scaleImage").perform(src, width, height, fallbackSrc);

    this.set("imageSrc", result.imageSrc);
    this.set("size", result.size);
    this.set('loaded', true);
  }),
});
