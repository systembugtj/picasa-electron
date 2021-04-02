import Mixin from '@ember/object/mixin';
import { debug } from '@ember/debug';
/**
 * A mixin to enhance an `Component` with hotkey support.
 *
 * To use, inherit this mixin in your view:
 *
 * ```javascript
 * MyComponent = Component.extend(HotkeysMixin, {
 *   hotkeysBindings: ['ctrl-a']
 *
 *   actions: {
 *       'ctrl-a': function() {
 *           console.log("Ctrl-a was pressed!");
 *       }
 *   }
 * });
 * ```
 *
 * @class HotkeysMixin
 * @public
 */
export default Mixin.create({
  /**
   * Add `hotkeysBindings` property as a `concatenatedProperties`.
   * @property concatenatedProperties
   * @type array
   */
  concatenatedProperties: ['hotkeysBindings'],
  keyMap: {
    8: "backspace",
    9: "tab",
    13: "return",
    16: "shift",
    17: "ctrl",
    18: "alt",
    224: "meta",
    112: "f1",
    113: "f2",
    114: "f3",
    115: "f4",
    116: "f5",
    117: "f6",
    118: "f7",
    119: "f8",
    120: "f9",
    121: "f10",
    122: "f11",
    123: "f12"
  },
  keyPressHandler(e) {
    let command = "";
    if (e.ctrlKey) {
      command += "ctrl+";
    }
    if (e.altKey) {
      command += "alt+";
    }
    if (e.shiftKey) {
      command += "shift+";
    }
    if (e.metaKey) {
      command += "meta+";
    }
    if (this.keyMap[e.which]) {
      command += this.keyMap[e.which];
    } else {
      command += String.fromCharCode(e.which).toLowerCase();
    }
    debug("hotkey command: " + command);
    return this.send(command);
  },
  keyDown(e) {
    return this.keyPressHandler(e);
  },
  keyUp(e) {
    return this.keyPressHandler(e);
  },
  keyPress(e) {
    return this.keyPressHandler(e);
  }
});
