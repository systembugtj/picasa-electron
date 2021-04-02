/* eslint max-len: 0 */
/* eslint new-cap: ["error", { "capIsNew": false }]*/
import Component from '@ember/component';
import { computed, action } from '@ember/object';
import { A } from '@ember/array';
import { next, scheduleOnce } from '@ember/runloop'
import SplitChild from './split-child';
import splitViewLayout from '@systembug/ember-split-view/templates/components/split-view';
import { layout, classNames, className } from "@ember-decorators/component"
import { observes } from "@ember-decorators/object"

/**
 * This class represents a view that is split either vertically or horizontally.
 * The split view is composed of three child views: a left or top view, a sash
 * view, and a right or bottom view.  The sash may be dragged to change the
 * relative width or height of the child views.
 *
 * Vertical SplitView example:
 *
 * ```handlebars
 * {{#split-view isVertical=true}}
 *   {{#split-child}}
 *     Content of the left view here.
 *   {{/split-child}}
 *   {{split-sash"}}
 *   {{#split-child}}
 *     Content of the right view here.
 *   {{/split-child}}
 * {{/split-view}}
 * ```
 *
 * Horizontal SplitView example:
 *
 * ```handlebars
 * {{#split-view isVertical=false}}
 *   {{#split-child}}
 *     Content of the top view here.
 *   {{/split-child}}
 *   {{split-sash"}}
 *   {{#split-child}}
 *     Content of the bottom view here.
 *   {{/split-child}}
 * {{/split-view}}
 * ```
 *
 * @cLass SplitViewComponent
 * @extends Ember.Component
 */

@layout(splitViewLayout)
@classNames('split-view')
export default class SplitViewerComponent extends Component {

  /**
   * @property {boolean} isVertical - the orientation of the split: true = vertical, false = horizontal
   * @default true
   */
  @className('vertical', 'horizontal')
  isVertical = true;

  /**
   * @property {Number} splitPosition - the position of the split in pixels
   * @default 50
   */
  splitPosition = 250;

  splits = null;

  @className("dragging")
  isDragging = false;

  isRoot = false;

  @computed('splits.@each.minSize', 'sash.width')
  get minSize() {
    let result = 0;
    const children = this.splits;
    for (let i = 0; i < children.length; i += 1) {
      result += children[i].get('minSize');
    }
    result += (children.length - 1) * this.get('sash.width');
    return result;
  }

  // eslint-disable-next-line ember/no-observers
  @observes('isVertical', 'minSize', 'isRoot')
  styleChanged () {
      this._setStyle();
  }

  // eslint-disable-next-line ember/no-observers
  @observes('isVertical')
  updateOrientation() {
    const splits = this.splits;
    const leftOrTop = splits.objectAt(0);
    const rightOrBottom = splits.objectAt(1);

    if (this.isVertical) {
      leftOrTop.set('anchorSide', 'right');
      rightOrBottom.set('anchorSide', 'left');
    } else {
      leftOrTop.set('anchorSide', 'bottom');
      rightOrBottom.set('anchorSide', 'top');
    }
  }

  // eslint-disable-next-line ember/no-observers
  @observes('sash.width', 'width', 'height', 'isVertical')
  constrainSplit() {
    const splits = this.splits;
    const leftOrTop = splits.objectAt(0);
    const rightOrBottom = splits.objectAt(1);

    if (leftOrTop) {
      const minLeftOrTopPosition = leftOrTop.get('minSize');

      if (this.splitPosition < minLeftOrTopPosition) {
        this.set('splitPosition', minLeftOrTopPosition);
      }
    }

    const size = this.isVertical ? this.width : this.height;
    if (rightOrBottom) {
      const minRightOrBottomPosition = size - rightOrBottom.get('minSize');

      if (this.splitPosition > minRightOrBottomPosition) {
        this.set('splitPosition', minRightOrBottomPosition);
      }
    }
  }


  init() {
    super.init();
    this.set('splits', A());
  }

  @action
  handleMouseUp() {
    this.set('isDragging', false);
  }

  @action
  handleMouseLeave() {
    this.set('isDragging', false);
  }

  @action
  handleMouseMove(event) {
    if (!this.isDragging) {
      return;
    }

    let position = 0;

    const offset = this.offset();
    if (this.isVertical) {
      position = event.pageX - offset.left;
    } else {
      position = event.pageY - offset.top;
    }

    this.set('splitPosition', position);
    this.constrainSplit();
  }

  didInsertElement(...args) {
    super.didInsertElement(...args);

    this.element.addEventListener('mousemove', this.handleMouseMove);
    this.element.addEventListener('mouseleave', this.handleMouseLeave);
    this.element.addEventListener('mouseup', this.handleMouseUp);

    const parentView = this.parentView;
    const isRoot = !(parentView instanceof SplitChild);

    // run next to avoid changing the component during a render iteration
    next(this, () => {
      this.set('isRoot', isRoot);
      const resizeService = this.resizeService;

      if (!isRoot) {
        parentView.set('childSplitView', this);
        if (resizeService) {
          resizeService.off('didResize', this, this.didResize);
        }
      } else {
        // only need width and height on root split-view
        // split-child passes it down the tree for nested ones
        if (resizeService) {
          resizeService.on('didResize', this, this.didResize);
        }
      }
      next(this, () => {
        this._setStyle();
      });

      scheduleOnce('afterRender', this,
        this.updateSize);
    });
  }

  updateSize() {
    // must do this in afterRender so that the parent has calculated its width and height
    const clientRect = this.element.getBoundingClientRect();
    this.set('width', clientRect.width);
    this.set('height', clientRect.height);
  }

  willDestroyElement() {
    super.willDestroyElement();

    this.element.removeEventListener('mousemove', this.handleMouseMove);
    this.element.removeEventListener('mouseleave', this.handleMouseLeave);
    this.element.removeEventListener('mouseup', this.handleMouseUp);

    const resizeService = this.resizeService;
    if (resizeService) {
      resizeService.off('didResize', this, this.didResize);
    }
  }

  didResize() {
    const clientRect = this.element.getBoundingClientRect();
    this.set('width', clientRect.width);
    this.set('height', clientRect.height);
    this.constrainSplit();
  }

  _setStyle() {
    const style = this.element.style;
    if (this.isRoot) {
      // let the DOM know our minimum size
      const isVertical = this.isVertical;
      const size = `${this.minSize}px`;
      if (isVertical) {
        style.minWidth = size;
        style.minHeight = null;
      } else {
        style.minWidth = null;
        style.minHeight = size;
      }
    } else {
      style.minWidth = null;
      style.minHeight = null;
    }
  }

  addSplit(split) {
    const splits = this.splits;
    splits.addObject(split);

    if (splits.length === 2) {
      this.updateOrientation();
    }
  }

  removeSplit(split) {
    this.splits.removeObject(split);
  }

  offset() {
    const rect = this.element.getBoundingClientRect();
		const win = this.element.ownerDocument.defaultView;
		return {
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		};
  }
}
