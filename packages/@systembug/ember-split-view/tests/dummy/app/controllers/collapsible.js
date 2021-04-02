import Controller from '@ember/controller';
import { action } from "@ember/object";

export default class CollapsibleController extends Controller {
  @action
  collapseLeft() {
    this.leftChild.collapse();
  }

  @action
  collapseRight() {
    this.rightChild.collapse();
  }
}
