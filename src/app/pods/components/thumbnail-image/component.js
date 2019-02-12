import Component from '@ember/component';
import { action } from '@ember-decorators/object';

export default class ThumbnailImageComponent extends Component {

  doubleClick() {
    this.imageClicked(this.get("source"));
  }
  imageClicked = () => {};

  @action
  handleImageClick() {
    this.imageClicked(this.get("source"));
  }
}
