import Controller from "@ember/controller"
import I18nMixin from 'ember-i18next/mixins/i18n';


export default class IndexController extends Controller.extend(I18nMixin) {
  leftSideBarOpen = false;
}
