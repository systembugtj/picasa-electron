import Component from '@ember/component';
import InViewportMixin from 'ember-in-viewport';
import { action } from '@ember/object';
import { observes } from '@ember-decorators/object';
import scrollIntoView from "scroll-into-view";

export default class FolderCardComponent extends Component.extend(InViewportMixin) {
  imageClicked = () => {};
  isSlideshow = false;

  onRefreshThumbnail = () => {};

  // eslint-disable-next-line ember/no-observers
  @observes("inViewportName")
  moveToViewport() {
    const name = this.inViewportName;
    if (name == this.root) {
      //this.element.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
      scrollIntoView(this.element, {
        validTarget: function(target) {
          // Don't scroll window.
          return target != window;
        }
      });
    }
  }

  @action
  saveToDisk() {
    this.set("showToast", true);
  }
  @action
  closeToast() {
    this.set("showToast", false);
  }
  @action
  buttonAction() {

  }
  @action
  handleImageClicked(src) {
    this.set("lightboxSrc", `file://${src}`);
    this.set("showDialog", true);
  }
  @action
  changeSlideShow() {
    this.set("isSlideshow", !this.isSlideshow);
  }
  @action
  onInitialZoomInEnd() {

  }
  @action
  closeDialog() {
    this.set("showDialog", false);
  }

  @action
  refreshThumbnail() {
    this.onRefreshThumbnail(this.root);
  }
}
