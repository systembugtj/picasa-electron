import Controller from "@ember/controller"
import { computed } from "@ember/object";
import TreeNode from 'ember-tree-view/node';

export default Controller.extend({
  folders: computed("model", {
    get() {
      const model = this.get("model");


      const root = TreeNode.create({
        title: model.cwd
      });

      model.images.forEach(element => {
        root.createChild({
          title: element
        });
      });
      return root;
    }
  })
})
