import Component from '@ember/component';
import InViewportMixin from 'ember-in-viewport';
import { action } from '@ember-decorators/object';

export default class FolderCardComponent extends Component.extend(InViewportMixin) {
  imageClicked = () => {};
  isSlideshow = false;

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
}
