import Component from '@ember/component';
import { classNames } from '@ember-decorators/component';
import I18nMixin from 'ember-i18next/mixins/i18n';
import { action } from '@ember-decorators/object';

@classNames("folder-header")
class FolderHeaderComponent  extends Component.extend(I18nMixin) {

  onSlideshow = () => {};

  @action
  handleSlideshow() {
    this.onSlideshow();
  }
}

export default FolderHeaderComponent;
