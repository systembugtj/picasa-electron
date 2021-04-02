import Component from '@ember/component';
// eslint-disable-next-line ember/no-observers
import { computed, observer } from '@ember/object';
import { schedule, next, scheduleOnce } from '@ember/runloop'
import splitChildLayout from '@systembug/ember-split-view/templates/components/split-child';

export default Component.extend({
  layout: splitChildLayout,
  classNames: ['split-view-child'],
  classNameBindings: [
    'parent.isDragging:dragging',
    'parent.isVertical:vertical:horizontal',
    'childSplitView:nested',
  ],

  childSplitView: null,
  anchorSide: null,

  init() {
    this._super();

    schedule('afterRender', this, () => {
      this.set('register-as', this); // register-as is a new property
    });
  },

  didInsertElement() {
    const parent = this.parent;

    // run next to avoid changing the component during a render iteration
    next(this, () => {
      if (parent && parent.addSplit) {
        parent.addSplit(this);
      }
      this._setStyle();
    });
  },

  willDestroyElement() {
    const parent = this.parent;

    if (parent && parent.removeSplit) {
      parent.removeSplit(this);
    }
  },

  _setStyle() {
    const anchorSide = this.anchorSide;
    let l = null;
    let r = null;
    let t = null;
    let b = null;
    if (anchorSide === 'left') {
      l = `${this.anchorOffset}px`;
    } else if (anchorSide === 'right') {
      r = `${this.anchorOffset}px`;
    } else if (anchorSide === 'top') {
      t = `${this.anchorOffset}px`;
    } else if (anchorSide === 'bottom') {
      b = `${this.anchorOffset}px`;
    }
    const style = this.element.style;
    style.left = l;
    style.right = r;
    style.top = t;
    style.bottom = b;
  },

  // eslint-disable-next-line ember/no-observers
  styleChanged: observer('anchorSide', 'anchorOffset',
    function () {
      this._setStyle();
    }
  ),

  parentSize: computed('anchorSide', 'parent.{width,height}',
    function () {
      const anchorSide = this.anchorSide;
      if (!anchorSide) {
        return 0;
      }

      if (anchorSide === 'left' || anchorSide === 'right') {
        return this.get('parent.width');
      }

      return this.get('parent.height');
    }
  ),

  anchorOffset: computed('parent.{sash.width,splitPosition}', 'anchorSide', 'parentSize',
    function () {
      const anchorSide = this.anchorSide;

      if (!anchorSide) {
        return undefined;
      }

      const sashWidth = this.get('parent.sash.width');
      const splitPosition = this.get('parent.splitPosition');

      if (anchorSide === 'left' || anchorSide === 'top') {
        return splitPosition + sashWidth / 2;
      }

      const parentSize = this.parentSize;
      if (!parentSize) {
        return 0;
      }
      return parentSize - splitPosition + sashWidth / 2;
    }
  ),

  // eslint-disable-next-line ember/no-observers
  updateChildSplitView: observer('childSplitView', 'anchorOffset', 'parent.width', 'parent.height',
    function () {
      // must run afterRender so that the size has updated
      scheduleOnce('afterRender', this, this.updateSize);
    }
  ),

  updateSize() {
    const childSplitView = this.childSplitView;

    const element = this.element;
    if (childSplitView) {
      childSplitView.set('width', element.width);
      childSplitView.set('height', element.height);
    }
  },

  collapse() {
    if (this.anchorSide === 'left' || this.anchorSide === 'top') {
      this.set('parent.splitPosition', this.parentSize);
    } else {
      this.set('parent.splitPosition', 0);
    }
    this.parent.constrainSplit();
  },

  cssInt(name) {
    return parseInt(this.element.style[name], 10) || 0;
  },

  minSizeVertical() {
    return this.cssInt('min-width') +
          this.cssInt('padding-left') +
          this.cssInt('padding-right') +
          this.cssInt('border-left') +
          this.cssInt('border-right') +
          this.cssInt('margin-left') +
          this.cssInt('margin-right') +
          this.get('parent.sash.width') / 2;
  },

  minSizeHorizontal() {
    return this.cssInt('min-height') +
          this.cssInt('padding-top') +
          this.cssInt('padding-bottom') +
          this.cssInt('border-top') +
          this.cssInt('border-bottom') +
          this.cssInt('margin-top') +
          this.cssInt('margin-bottom') +
          this.get('parent.sash.width') / 2;
  },


  // eslint-disable-next-line ember/no-observers
  minSize: computed('parent.isVertical', 'childSplitView.minSize',
    function () {
      const childSplitView = this.childSplitView;
      if (childSplitView) {
        return childSplitView.get('minSize');
      }


      if (this.get('parent.isVertical')) {
        return this.minSizeVertical();
      }

      return this.minSizeHorizontal();
    }
  ),

});
