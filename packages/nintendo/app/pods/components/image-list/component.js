import Component from '@ember/component';
import { classNames } from '@ember-decorators/component';
import { action } from '@ember/object';

@classNames("image-list")
class ImageListComponent extends Component {
  imageClicked = () => {};

  @action
  handleImageClicked(src) {
    this.imageClicked(src);
  }
}

export default ImageListComponent;
