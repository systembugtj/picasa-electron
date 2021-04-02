'use strict';



;define("picasa/actions/folders", ["exports", "picasa/actions/types"], function (_exports, _types) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.addFiles = _exports.addFolders = _exports.addFolderList = void 0;

  const addFolderList = folders => dispatch => dispatch({
    type: _types.default.ADD_FOLDER_LIST,
    payload: {
      folders
    }
  });

  _exports.addFolderList = addFolderList;

  const addFolders = folders => dispatch => dispatch({
    type: _types.default.ADD_FOLDERS,
    payload: {
      folders
    }
  });

  _exports.addFolders = addFolders;

  const addFiles = files => dispatch => dispatch({
    type: _types.default.ADD_FILES,
    payload: {
      files
    }
  });

  _exports.addFiles = addFiles;
});
;define("picasa/actions/types", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const ActionTypes = {
    LIST_FILES: 'LIST_FILES',
    ADD_FOLDER_LIST: "ADD_FOLDER_LIST",
    GET_FOLDERS: 'GET_FOLDERS',
    REFRESH_FOLDER: 'REFRESH_FOLDER',
    ADD_FOLDERS: "ADD_FOLDERS",
    ADD_FILES: "ADD_FILES",
    REMOVE_FILES: "REMOVE_FILES"
  };
  var _default = ActionTypes;
  _exports.default = _default;
});
;define("picasa/adapters/-json-api", ["exports", "@ember-data/adapter/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _jsonApi.default;
    }
  });
});
;define("picasa/app", ["exports", "@babel/runtime/helpers/esm/defineProperty", "ember-resolver", "ember-load-initializers", "picasa/config/environment"], function (_exports, _defineProperty2, _emberResolver, _emberLoadInitializers, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class App extends Ember.Application {
    constructor(...args) {
      super(...args);
      (0, _defineProperty2.default)(this, "modulePrefix", _environment.default.modulePrefix);
      (0, _defineProperty2.default)(this, "podModulePrefix", _environment.default.podModulePrefix);
      (0, _defineProperty2.default)(this, "Resolver", _emberResolver.default);
    }

  }

  _exports.default = App;
  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);
});
;define("picasa/component-managers/glimmer", ["exports", "@glimmer/component/-private/ember-component-manager"], function (_exports, _emberComponentManager) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberComponentManager.default;
    }
  });
});
;define("picasa/components/-dynamic-element-alt", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  // avoiding reexport directly here because in some circumstances (ember-engines
  // for example) a simple reexport is transformed to `define.alias`,
  // unfortunately at the moment (ember-source@3.13) there is no _actual_
  // `@ember/component` module to alias so this causes issues
  //
  // tldr; we can replace this with a simple reexport when we can rely on Ember
  // actually providing a `@ember/component` module
  var _default = Ember.Component.extend();

  _exports.default = _default;
});
;define("picasa/components/-dynamic-element", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  // avoiding reexport directly here because in some circumstances (ember-engines
  // for example) a simple reexport is transformed to `define.alias`,
  // unfortunately at the moment (ember-source@3.13) there is no _actual_
  // `@ember/component` module to alias so this causes issues
  //
  // tldr; we can replace this with a simple reexport when we can rely on Ember
  // actually providing a `@ember/component` module
  var _default = Ember.Component.extend();

  _exports.default = _default;
});
;define("picasa/components/auto-image", ["exports", "ember-auto-image/components/auto-image"], function (_exports, _autoImage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _autoImage.default;
  _exports.default = _default;
});
;define("picasa/components/basic-dropdown-content", ["exports", "ember-basic-dropdown/components/basic-dropdown-content"], function (_exports, _basicDropdownContent) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _basicDropdownContent.default;
    }
  });
});
;define("picasa/components/basic-dropdown-trigger", ["exports", "ember-basic-dropdown/components/basic-dropdown-trigger"], function (_exports, _basicDropdownTrigger) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _basicDropdownTrigger.default;
    }
  });
});
;define("picasa/components/basic-dropdown", ["exports", "ember-basic-dropdown/components/basic-dropdown"], function (_exports, _basicDropdown) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _basicDropdown.default;
    }
  });
});
;define("picasa/components/em-tree-branch", ["exports", "ember-tree-view/tree-branch"], function (_exports, _treeBranch) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _treeBranch.default;
  _exports.default = _default;
});
;define("picasa/components/em-tree-node-icon-action", ["exports", "ember-tree-view/tree-node-icon-action"], function (_exports, _treeNodeIconAction) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _treeNodeIconAction.default;
  _exports.default = _default;
});
;define("picasa/components/em-tree-node", ["exports", "ember-tree-view/tree-node"], function (_exports, _treeNode) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _treeNode.default;
  _exports.default = _default;
});
;define("picasa/components/em-tree", ["exports", "ember-tree-view/tree"], function (_exports, _tree) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _tree.default;
  _exports.default = _default;
});
;define("picasa/components/floating-mobile-buttons", ["exports", "@systembug/ember-fab/components/floating-mobile-buttons"], function (_exports, _floatingMobileButtons) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _floatingMobileButtons.default;
    }
  });
});
;define("picasa/components/floating-mobile-child-buttons", ["exports", "@systembug/ember-fab/components/floating-mobile-child-buttons"], function (_exports, _floatingMobileChildButtons) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _floatingMobileChildButtons.default;
    }
  });
});
;define("picasa/components/floating-mobile-children-wrapper", ["exports", "@systembug/ember-fab/components/floating-mobile-children-wrapper"], function (_exports, _floatingMobileChildrenWrapper) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _floatingMobileChildrenWrapper.default;
    }
  });
});
;define("picasa/components/focusing-inner", ["exports", "ember-a11y/components/focusing-inner"], function (_exports, _focusingInner) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _focusingInner.default;
    }
  });
});
;define("picasa/components/focusing-outlet", ["exports", "ember-a11y/components/focusing-outlet"], function (_exports, _focusingOutlet) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _focusingOutlet.default;
    }
  });
});
;define("picasa/components/head-content", ["exports", "picasa/templates/head"], function (_exports, _head) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    tagName: '',
    model: Ember.inject.service('head-data'),
    layout: _head.default
  });

  _exports.default = _default;
});
;define("picasa/components/head-layout", ["exports", "ember-cli-head/components/head-layout"], function (_exports, _headLayout) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _headLayout.default;
    }
  });
});
;define("picasa/components/paper-autocomplete-highlight", ["exports", "ember-paper/components/paper-autocomplete/highlight/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
;define("picasa/components/paper-autocomplete", ["exports", "ember-paper/components/paper-autocomplete/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
;define("picasa/components/paper-autocomplete/ebd-content", ["exports", "ember-paper/components/paper-autocomplete/ebd-content/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
;define("picasa/components/paper-autocomplete/ebd-trigger", ["exports", "ember-paper/components/paper-autocomplete/ebd-trigger/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
;define("picasa/components/paper-autocomplete/eps-trigger", ["exports", "ember-paper/components/paper-autocomplete/eps-trigger/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
;define("picasa/components/paper-autocomplete/highlight", ["exports", "ember-paper/components/paper-autocomplete/highlight/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
;define("picasa/components/paper-autocomplete/no-matches-message", ["exports", "ember-paper/components/paper-autocomplete/no-matches-message/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
;define("picasa/components/paper-autocomplete/options", ["exports", "ember-paper/components/paper-autocomplete/options/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
;define("picasa/components/paper-autocomplete/reset-button", ["exports", "ember-paper/components/paper-autocomplete/reset-button/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
;define("picasa/components/paper-backdrop", ["exports", "ember-paper/components/paper-backdrop"], function (_exports, _paperBackdrop) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _paperBackdrop.default;
  _exports.default = _default;
});
;define("picasa/components/paper-button", ["exports", "ember-paper/components/paper-button"], function (_exports, _paperButton) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _paperButton.default;
    }
  });
});
;define("picasa/components/paper-card-actions", ["exports", "ember-paper/components/paper-card-actions"], function (_exports, _paperCardActions) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _paperCardActions.default;
  _exports.default = _default;
});
;define("picasa/components/paper-card-avatar", ["exports", "ember-paper/components/paper-card-avatar"], function (_exports, _paperCardAvatar) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _paperCardAvatar.default;
  _exports.default = _default;
});
;define("picasa/components/paper-card-content", ["exports", "ember-paper/components/paper-card-content"], function (_exports, _paperCardContent) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _paperCardContent.default;
  _exports.default = _default;
});
;define("picasa/components/paper-card-header-headline", ["exports", "ember-paper/components/paper-card-header-headline"], function (_exports, _paperCardHeaderHeadline) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _paperCardHeaderHeadline.default;
  _exports.default = _default;
});
;define("picasa/components/paper-card-header-subhead", ["exports", "ember-paper/components/paper-card-header-subhead"], function (_exports, _paperCardHeaderSubhead) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _paperCardHeaderSubhead.default;
  _exports.default = _default;
});
;define("picasa/components/paper-card-header-text", ["exports", "ember-paper/components/paper-card-header-text"], function (_exports, _paperCardHeaderText) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _paperCardHeaderText.default;
  _exports.default = _default;
});
;define("picasa/components/paper-card-header-title", ["exports", "ember-paper/components/paper-card-header-title"], function (_exports, _paperCardHeaderTitle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _paperCardHeaderTitle.default;
  _exports.default = _default;
});
;define("picasa/components/paper-card-header", ["exports", "ember-paper/components/paper-card-header"], function (_exports, _paperCardHeader) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _paperCardHeader.default;
  _exports.default = _default;
});
;define("picasa/components/paper-card-icon-actions", ["exports", "ember-paper/components/paper-card-icon-actions"], function (_exports, _paperCardIconActions) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _paperCardIconActions.default;
  _exports.default = _default;
});
;define("picasa/components/paper-card-image", ["exports", "ember-paper/components/paper-card-image"], function (_exports, _paperCardImage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _paperCardImage.default;
  _exports.default = _default;
});
;define("picasa/components/paper-card-media", ["exports", "ember-paper/components/paper-card-media"], function (_exports, _paperCardMedia) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _paperCardMedia.default;
  _exports.default = _default;
});
;define("picasa/components/paper-card-title-media", ["exports", "ember-paper/components/paper-card-title-media"], function (_exports, _paperCardTitleMedia) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _paperCardTitleMedia.default;
  _exports.default = _default;
});
;define("picasa/components/paper-card-title-text", ["exports", "ember-paper/components/paper-card-title-text"], function (_exports, _paperCardTitleText) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _paperCardTitleText.default;
  _exports.default = _default;
});
;define("picasa/components/paper-card-title", ["exports", "ember-paper/components/paper-card-title"], function (_exports, _paperCardTitle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _paperCardTitle.default;
  _exports.default = _default;
});
;define("picasa/components/paper-card", ["exports", "ember-paper/components/paper-card"], function (_exports, _paperCard) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _paperCard.default;
  _exports.default = _default;
});
;define("picasa/components/paper-checkbox", ["exports", "ember-paper/components/paper-checkbox"], function (_exports, _paperCheckbox) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _paperCheckbox.default;
  _exports.default = _default;
});
;define("picasa/components/paper-chips", ["exports", "ember-paper/components/paper-chips/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
;define("picasa/components/paper-contact-chips", ["exports", "ember-paper/components/paper-contact-chips/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
;define("picasa/components/paper-content", ["exports", "ember-paper/components/paper-content/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
;define("picasa/components/paper-dialog-actions", ["exports", "ember-paper/components/paper-dialog-actions"], function (_exports, _paperDialogActions) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _paperDialogActions.default;
    }
  });
});
;define("picasa/components/paper-dialog-container", ["exports", "ember-paper/components/paper-dialog-container"], function (_exports, _paperDialogContainer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _paperDialogContainer.default;
    }
  });
});
;define("picasa/components/paper-dialog-content", ["exports", "ember-paper/components/paper-dialog-content"], function (_exports, _paperDialogContent) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _paperDialogContent.default;
    }
  });
});
;define("picasa/components/paper-dialog-inner", ["exports", "ember-paper/components/paper-dialog-inner"], function (_exports, _paperDialogInner) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _paperDialogInner.default;
    }
  });
});
;define("picasa/components/paper-dialog", ["exports", "ember-paper/components/paper-dialog"], function (_exports, _paperDialog) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _paperDialog.default;
    }
  });
});
;define("picasa/components/paper-divider", ["exports", "ember-paper/components/paper-divider/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
;define("picasa/components/paper-form", ["exports", "ember-paper/components/paper-form"], function (_exports, _paperForm) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _paperForm.default;
  _exports.default = _default;
});
;define("picasa/components/paper-grid-list", ["exports", "ember-paper/components/paper-grid-list"], function (_exports, _paperGridList) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _paperGridList.default;
    }
  });
});
;define("picasa/components/paper-grid-tile-footer", ["exports", "ember-paper/components/paper-grid-tile-footer"], function (_exports, _paperGridTileFooter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _paperGridTileFooter.default;
    }
  });
});
;define("picasa/components/paper-grid-tile", ["exports", "ember-paper/components/paper-grid-tile"], function (_exports, _paperGridTile) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _paperGridTile.default;
    }
  });
});
;define("picasa/components/paper-icon", ["exports", "ember-paper/components/paper-icon"], function (_exports, _paperIcon) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _paperIcon.default;
  _exports.default = _default;
});
;define("picasa/components/paper-ink-bar", ["exports", "ember-paper/components/paper-ink-bar"], function (_exports, _paperInkBar) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _paperInkBar.default;
    }
  });
});
;define("picasa/components/paper-input", ["exports", "ember-paper/components/paper-input"], function (_exports, _paperInput) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _paperInput.default;
  _exports.default = _default;
});
;define("picasa/components/paper-item", ["exports", "ember-paper/components/paper-item"], function (_exports, _paperItem) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _paperItem.default;
  _exports.default = _default;
});
;define("picasa/components/paper-list", ["exports", "ember-paper/components/paper-list"], function (_exports, _paperList) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _paperList.default;
  _exports.default = _default;
});
;define("picasa/components/paper-menu", ["exports", "ember-paper/components/paper-menu/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
;define("picasa/components/paper-menu/content", ["exports", "ember-paper/components/paper-menu/content/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
;define("picasa/components/paper-menu/item", ["exports", "ember-paper/components/paper-menu/item/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
;define("picasa/components/paper-menu/trigger", ["exports", "ember-paper/components/paper-menu/trigger/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
;define("picasa/components/paper-progress-circular", ["exports", "ember-paper/components/paper-progress-circular"], function (_exports, _paperProgressCircular) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _paperProgressCircular.default;
    }
  });
});
;define("picasa/components/paper-progress-linear", ["exports", "ember-paper/components/paper-progress-linear"], function (_exports, _paperProgressLinear) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _paperProgressLinear.default;
    }
  });
});
;define("picasa/components/paper-radio-group-label", ["exports", "ember-paper/components/paper-radio-group-label"], function (_exports, _paperRadioGroupLabel) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _paperRadioGroupLabel.default;
    }
  });
});
;define("picasa/components/paper-radio-group", ["exports", "ember-paper/components/paper-radio-group"], function (_exports, _paperRadioGroup) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _paperRadioGroup.default;
    }
  });
});
;define("picasa/components/paper-radio-proxiable", ["exports", "ember-paper/components/paper-radio-proxiable"], function (_exports, _paperRadioProxiable) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _paperRadioProxiable.default;
    }
  });
});
;define("picasa/components/paper-radio", ["exports", "ember-paper/components/paper-radio"], function (_exports, _paperRadio) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _paperRadio.default;
    }
  });
});
;define("picasa/components/paper-reset-button", ["exports", "ember-paper/components/paper-reset-button"], function (_exports, _paperResetButton) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _paperResetButton.default;
    }
  });
});
;define("picasa/components/paper-ripple", ["exports", "ember-paper/components/paper-ripple/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
;define("picasa/components/paper-select", ["exports", "ember-paper/components/paper-select/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
;define("picasa/components/paper-select/ebd-content", ["exports", "ember-paper/components/paper-select/ebd-content/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
;define("picasa/components/paper-select/ebd-trigger", ["exports", "ember-paper/components/paper-select/ebd-trigger/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
;define("picasa/components/paper-select/eps-trigger", ["exports", "ember-paper/components/paper-select/eps-trigger/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
;define("picasa/components/paper-select/no-matches-message", ["exports", "ember-paper/components/paper-select/no-matches-message/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
;define("picasa/components/paper-select/option", ["exports", "ember-paper/components/paper-select/option/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
;define("picasa/components/paper-select/options", ["exports", "ember-paper/components/paper-select/options/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
;define("picasa/components/paper-select/search-message", ["exports", "ember-paper/components/paper-select/search-message/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
;define("picasa/components/paper-select/search", ["exports", "ember-paper/components/paper-select/search/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
;define("picasa/components/paper-sidenav-container", ["exports", "ember-paper/components/paper-sidenav-container"], function (_exports, _paperSidenavContainer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _paperSidenavContainer.default;
    }
  });
});
;define("picasa/components/paper-sidenav-inner", ["exports", "ember-paper/components/paper-sidenav-inner"], function (_exports, _paperSidenavInner) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _paperSidenavInner.default;
  _exports.default = _default;
});
;define("picasa/components/paper-sidenav-toggle", ["exports", "ember-paper/components/paper-sidenav-toggle"], function (_exports, _paperSidenavToggle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _paperSidenavToggle.default;
  _exports.default = _default;
});
;define("picasa/components/paper-sidenav", ["exports", "ember-paper/components/paper-sidenav"], function (_exports, _paperSidenav) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _paperSidenav.default;
  _exports.default = _default;
});
;define("picasa/components/paper-slider", ["exports", "ember-paper/components/paper-slider/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
;define("picasa/components/paper-speed-dial-actions-action", ["exports", "ember-paper/components/paper-speed-dial-actions-action"], function (_exports, _paperSpeedDialActionsAction) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _paperSpeedDialActionsAction.default;
    }
  });
});
;define("picasa/components/paper-speed-dial-actions", ["exports", "ember-paper/components/paper-speed-dial-actions"], function (_exports, _paperSpeedDialActions) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _paperSpeedDialActions.default;
    }
  });
});
;define("picasa/components/paper-speed-dial-trigger", ["exports", "ember-paper/components/paper-speed-dial-trigger"], function (_exports, _paperSpeedDialTrigger) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _paperSpeedDialTrigger.default;
    }
  });
});
;define("picasa/components/paper-speed-dial", ["exports", "ember-paper/components/paper-speed-dial"], function (_exports, _paperSpeedDial) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _paperSpeedDial.default;
    }
  });
});
;define("picasa/components/paper-subheader", ["exports", "ember-paper/components/paper-subheader"], function (_exports, _paperSubheader) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _paperSubheader.default;
  _exports.default = _default;
});
;define("picasa/components/paper-switch", ["exports", "ember-paper/components/paper-switch"], function (_exports, _paperSwitch) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _paperSwitch.default;
  _exports.default = _default;
});
;define("picasa/components/paper-tab", ["exports", "ember-paper/components/paper-tab"], function (_exports, _paperTab) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _paperTab.default;
    }
  });
});
;define("picasa/components/paper-tabs", ["exports", "ember-paper/components/paper-tabs"], function (_exports, _paperTabs) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _paperTabs.default;
    }
  });
});
;define("picasa/components/paper-toast-inner", ["exports", "ember-paper/components/paper-toast-inner"], function (_exports, _paperToastInner) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _paperToastInner.default;
    }
  });
});
;define("picasa/components/paper-toast-text", ["exports", "ember-paper/components/paper-toast-text"], function (_exports, _paperToastText) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _paperToastText.default;
    }
  });
});
;define("picasa/components/paper-toast", ["exports", "ember-paper/components/paper-toast"], function (_exports, _paperToast) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _paperToast.default;
    }
  });
});
;define("picasa/components/paper-toaster", ["exports", "ember-paper/components/paper-toaster"], function (_exports, _paperToaster) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _paperToaster.default;
    }
  });
});
;define("picasa/components/paper-toolbar-tools", ["exports", "ember-paper/components/paper-toolbar-tools"], function (_exports, _paperToolbarTools) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _paperToolbarTools.default;
  _exports.default = _default;
});
;define("picasa/components/paper-toolbar", ["exports", "ember-paper/components/paper-toolbar"], function (_exports, _paperToolbar) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _paperToolbar.default;
  _exports.default = _default;
});
;define("picasa/components/paper-tooltip-inner", ["exports", "ember-paper/components/paper-tooltip-inner"], function (_exports, _paperTooltipInner) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _paperTooltipInner.default;
    }
  });
});
;define("picasa/components/paper-tooltip", ["exports", "ember-paper/components/paper-tooltip"], function (_exports, _paperTooltip) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _paperTooltip.default;
    }
  });
});
;define("picasa/components/photo-swipe", ["exports", "ember-photoswipe/components/photo-swipe"], function (_exports, _photoSwipe) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _photoSwipe.default;
    }
  });
});
;define("picasa/components/power-select-multiple", ["exports", "ember-power-select/components/power-select-multiple"], function (_exports, _powerSelectMultiple) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _powerSelectMultiple.default;
    }
  });
});
;define("picasa/components/power-select-multiple/trigger", ["exports", "ember-power-select/components/power-select-multiple/trigger"], function (_exports, _trigger) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _trigger.default;
    }
  });
});
;define("picasa/components/power-select", ["exports", "ember-power-select/components/power-select"], function (_exports, _powerSelect) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _powerSelect.default;
    }
  });
});
;define("picasa/components/power-select/before-options", ["exports", "ember-power-select/components/power-select/before-options"], function (_exports, _beforeOptions) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _beforeOptions.default;
    }
  });
});
;define("picasa/components/power-select/no-matches-message", ["exports", "ember-power-select/components/power-select/no-matches-message"], function (_exports, _noMatchesMessage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _noMatchesMessage.default;
    }
  });
});
;define("picasa/components/power-select/options", ["exports", "ember-power-select/components/power-select/options"], function (_exports, _options) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _options.default;
    }
  });
});
;define("picasa/components/power-select/placeholder", ["exports", "ember-power-select/components/power-select/placeholder"], function (_exports, _placeholder) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _placeholder.default;
    }
  });
});
;define("picasa/components/power-select/power-select-group", ["exports", "ember-power-select/components/power-select/power-select-group"], function (_exports, _powerSelectGroup) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _powerSelectGroup.default;
    }
  });
});
;define("picasa/components/power-select/search-message", ["exports", "ember-power-select/components/power-select/search-message"], function (_exports, _searchMessage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _searchMessage.default;
    }
  });
});
;define("picasa/components/power-select/trigger", ["exports", "ember-power-select/components/power-select/trigger"], function (_exports, _trigger) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _trigger.default;
    }
  });
});
;define("picasa/components/split-child", ["exports", "@systembug/ember-split-view/components/split-child"], function (_exports, _splitChild) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _splitChild.default;
  _exports.default = _default;
});
;define("picasa/components/split-sash", ["exports", "@systembug/ember-split-view/components/split-sash"], function (_exports, _splitSash) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _splitSash.default;
  _exports.default = _default;
});
;define("picasa/components/split-view", ["exports", "@systembug/ember-split-view/components/split-view"], function (_exports, _splitView) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _splitView.default;
  _exports.default = _default;
});
;define("picasa/components/transition-group", ["exports", "ember-css-transitions/components/transition-group"], function (_exports, _transitionGroup) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _transitionGroup.default;
    }
  });
});
;define("picasa/components/vertical-collection", ["exports", "@html-next/vertical-collection/components/vertical-collection/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
;define("picasa/config", ["exports", "ember-tree-utils/config"], function (_exports, _config) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _config.default;
  _exports.default = _default;
});
;define("picasa/constants/error-code", ["exports", "ember-precondition/constants/error-code"], function (_exports, _errorCode) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _errorCode.default;
    }
  });
});
;define("picasa/constants/event-name", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const EventNames = {
    OpenFolderSelection: "openFolderSelection",
    ImportFromFolder: "importFromFolder",
    OpenSettingsGeneral: "openSettingsGeneral",
    OpenPreferences: "openPreferences",
    OpenPreview: "openPreview",
    FolderUpdated: "folderUpdated",
    AccessTokenReady: "accessTokeReady"
  };
  var _default = EventNames;
  _exports.default = _default;
});
;define("picasa/constants/preference-entry", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const Preferences = {
    "WATCH_PATHS": "WATCH_PATHS",
    "INIT": "INIT",
    "CACHED_PATH": "CACHED_PATH",
    "DEFAULT_IMPORT_FOLDER": "DEFAULT_IMPORT_FOLDER"
  };
  var _default = Preferences;
  _exports.default = _default;
});
;define("picasa/controllers/application", ["exports", "@babel/runtime/helpers/esm/defineProperty", "ember-i18next/mixins/i18n"], function (_exports, _defineProperty2, _i18n) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class IndexController extends Ember.Controller.extend(_i18n.default) {
    constructor(...args) {
      super(...args);
      (0, _defineProperty2.default)(this, "leftSideBarOpen", false);
    }

  }

  _exports.default = IndexController;
});
;define("picasa/data-adapter", ["exports", "@ember-data/debug"], function (_exports, _debug) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _debug.default;
    }
  });
});
;define("picasa/enhancers/index", ["exports", "ember-redux/enhancers/index"], function (_exports, _index) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _index.default;
    }
  });
});
;define("picasa/helpers/-clear-element", ["exports", "ember-in-element-polyfill/helpers/-clear-element"], function (_exports, _clearElement) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _clearElement.default;
    }
  });
  Object.defineProperty(_exports, "clearElement", {
    enumerable: true,
    get: function () {
      return _clearElement.clearElement;
    }
  });
});
;define("picasa/helpers/-element", ["exports", "ember-element-helper/helpers/-element"], function (_exports, _element) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _element.default;
    }
  });
});
;define("picasa/helpers/-paper-underscore", ["exports", "ember-paper/helpers/underscore"], function (_exports, _underscore) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _underscore.default;
    }
  });
  Object.defineProperty(_exports, "underscore", {
    enumerable: true,
    get: function () {
      return _underscore.underscore;
    }
  });
});
;define("picasa/helpers/and", ["exports", "ember-truth-helpers/helpers/and"], function (_exports, _and) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _and.default;
    }
  });
  Object.defineProperty(_exports, "and", {
    enumerable: true,
    get: function () {
      return _and.and;
    }
  });
});
;define("picasa/helpers/app-version", ["exports", "picasa/config/environment", "ember-cli-app-version/utils/regexp"], function (_exports, _environment, _regexp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.appVersion = appVersion;
  _exports.default = void 0;

  function appVersion(_, hash = {}) {
    const version = _environment.default.APP.version; // e.g. 1.0.0-alpha.1+4jds75hf
    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility

    let versionOnly = hash.versionOnly || hash.hideSha;
    let shaOnly = hash.shaOnly || hash.hideVersion;
    let match = null;

    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      } // Fallback to just version


      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }

  var _default = Ember.Helper.helper(appVersion);

  _exports.default = _default;
});
;define("picasa/helpers/cancel-all", ["exports", "ember-concurrency/helpers/cancel-all"], function (_exports, _cancelAll) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _cancelAll.default;
    }
  });
});
;define("picasa/helpers/ember-power-select-is-group", ["exports", "ember-power-select/helpers/ember-power-select-is-group"], function (_exports, _emberPowerSelectIsGroup) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberPowerSelectIsGroup.default;
    }
  });
  Object.defineProperty(_exports, "emberPowerSelectIsGroup", {
    enumerable: true,
    get: function () {
      return _emberPowerSelectIsGroup.emberPowerSelectIsGroup;
    }
  });
});
;define("picasa/helpers/ember-power-select-is-selected", ["exports", "ember-power-select/helpers/ember-power-select-is-selected"], function (_exports, _emberPowerSelectIsSelected) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberPowerSelectIsSelected.default;
    }
  });
  Object.defineProperty(_exports, "emberPowerSelectIsSelected", {
    enumerable: true,
    get: function () {
      return _emberPowerSelectIsSelected.emberPowerSelectIsSelected;
    }
  });
});
;define("picasa/helpers/eq", ["exports", "ember-truth-helpers/helpers/equal"], function (_exports, _equal) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _equal.default;
    }
  });
  Object.defineProperty(_exports, "equal", {
    enumerable: true,
    get: function () {
      return _equal.equal;
    }
  });
});
;define("picasa/helpers/gt", ["exports", "ember-truth-helpers/helpers/gt"], function (_exports, _gt) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _gt.default;
    }
  });
  Object.defineProperty(_exports, "gt", {
    enumerable: true,
    get: function () {
      return _gt.gt;
    }
  });
});
;define("picasa/helpers/gte", ["exports", "ember-truth-helpers/helpers/gte"], function (_exports, _gte) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _gte.default;
    }
  });
  Object.defineProperty(_exports, "gte", {
    enumerable: true,
    get: function () {
      return _gte.gte;
    }
  });
});
;define("picasa/helpers/is-array", ["exports", "ember-truth-helpers/helpers/is-array"], function (_exports, _isArray) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _isArray.default;
    }
  });
  Object.defineProperty(_exports, "isArray", {
    enumerable: true,
    get: function () {
      return _isArray.isArray;
    }
  });
});
;define("picasa/helpers/is-empty", ["exports", "ember-truth-helpers/helpers/is-empty"], function (_exports, _isEmpty) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _isEmpty.default;
    }
  });
});
;define("picasa/helpers/is-equal", ["exports", "ember-truth-helpers/helpers/is-equal"], function (_exports, _isEqual) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _isEqual.default;
    }
  });
  Object.defineProperty(_exports, "isEqual", {
    enumerable: true,
    get: function () {
      return _isEqual.isEqual;
    }
  });
});
;define("picasa/helpers/lt", ["exports", "ember-truth-helpers/helpers/lt"], function (_exports, _lt) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _lt.default;
    }
  });
  Object.defineProperty(_exports, "lt", {
    enumerable: true,
    get: function () {
      return _lt.lt;
    }
  });
});
;define("picasa/helpers/lte", ["exports", "ember-truth-helpers/helpers/lte"], function (_exports, _lte) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _lte.default;
    }
  });
  Object.defineProperty(_exports, "lte", {
    enumerable: true,
    get: function () {
      return _lte.lte;
    }
  });
});
;define("picasa/helpers/not-eq", ["exports", "ember-truth-helpers/helpers/not-equal"], function (_exports, _notEqual) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _notEqual.default;
    }
  });
  Object.defineProperty(_exports, "notEq", {
    enumerable: true,
    get: function () {
      return _notEqual.notEq;
    }
  });
});
;define("picasa/helpers/not", ["exports", "ember-truth-helpers/helpers/not"], function (_exports, _not) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _not.default;
    }
  });
  Object.defineProperty(_exports, "not", {
    enumerable: true,
    get: function () {
      return _not.not;
    }
  });
});
;define("picasa/helpers/or", ["exports", "ember-truth-helpers/helpers/or"], function (_exports, _or) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _or.default;
    }
  });
  Object.defineProperty(_exports, "or", {
    enumerable: true,
    get: function () {
      return _or.or;
    }
  });
});
;define("picasa/helpers/perform", ["exports", "ember-concurrency/helpers/perform"], function (_exports, _perform) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _perform.default;
    }
  });
});
;define("picasa/helpers/pluralize", ["exports", "ember-inflector/lib/helpers/pluralize"], function (_exports, _pluralize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _pluralize.default;
  _exports.default = _default;
});
;define("picasa/helpers/singularize", ["exports", "ember-inflector/lib/helpers/singularize"], function (_exports, _singularize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _singularize.default;
  _exports.default = _default;
});
;define("picasa/helpers/svg-jar", ["exports", "ember-svg-jar/utils/make-helper", "ember-svg-jar/utils/make-svg"], function (_exports, _makeHelper, _makeSvg) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.svgJar = svgJar;
  _exports.default = void 0;

  function getInlineAsset(assetId) {
    try {
      /* eslint-disable global-require */
      return require(`ember-svg-jar/inlined/${assetId}`).default;
    } catch (err) {
      return null;
    }
  }

  function svgJar(assetId, svgAttrs) {
    return (0, _makeSvg.default)(assetId, svgAttrs, getInlineAsset);
  }

  var _default = (0, _makeHelper.default)(svgJar);

  _exports.default = _default;
});
;define("picasa/helpers/t", ["exports", "ember-i18next/helpers/t"], function (_exports, _t) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _t.default;
  _exports.default = _default;
});
;define("picasa/helpers/task", ["exports", "ember-concurrency/helpers/task"], function (_exports, _task) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _task.default;
    }
  });
});
;define("picasa/helpers/xor", ["exports", "ember-truth-helpers/helpers/xor"], function (_exports, _xor) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _xor.default;
    }
  });
  Object.defineProperty(_exports, "xor", {
    enumerable: true,
    get: function () {
      return _xor.xor;
    }
  });
});
;define("picasa/initializers/app-version", ["exports", "ember-cli-app-version/initializer-factory", "picasa/config/environment"], function (_exports, _initializerFactory, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  let name, version;

  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  var _default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
  _exports.default = _default;
});
;define("picasa/initializers/asset-map", ["exports", "jquery", "picasa/services/asset-map", "picasa/config/environment"], function (_exports, _jquery, _assetMap, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.initialize = initialize;
  _exports.default = void 0;

  function initialize(app) {
    // if we're in an engine return early as engines
    // don't need to defer their readiness.
    if (!app.deferReadiness) {
      return;
    }

    app.deferReadiness();
    const useAssetMap = Ember.isNone(_environment.default.theme.useAssetMap) ? _environment.default.environment === 'production' : _environment.default.theme.useAssetMap;

    if (!useAssetMap) {
      app.register('service:asset-map', _assetMap.default);
      app.advanceReadiness();
      return;
    }

    const promise = new Ember.RSVP.Promise((resolve, reject) => {
      _jquery.default.getJSON('/assets/assetMap.json', resolve).fail(reject);
    });
    promise.then((map = {}) => {
      const prepend = _environment.default.theme.assetPrepend || map.prepend;

      _assetMap.default.reopen({
        assetMapHash: map.assets,
        prepend,
        enabled: true
      });
    }, () =>
    /* reason */
    {
      (true && Ember.warn('Error loading assetMap.json. Did you forget to set:\nfingerprint: {\n fingerprintAssetMap=true\n}\nin your ember-cli-build file?', {
        id: 'ember-theme-changerr.asset-map'
      }));
    }).then(() => {
      app.register('service:asset-map', _assetMap.default);
      app.advanceReadiness();
    });
  }

  var _default = {
    name: 'asset-map',
    initialize
  };
  _exports.default = _default;
});
;define("picasa/initializers/config", ["exports", "ember-tree-utils/config"], function (_exports, _config) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'ember-tree-view',
    _config: _config.default.create(),

    initialize() {
      let config = this._config;

      if (!Ember.Engine.Config) {
        Ember.Engine.Config = config;
      }

      let defaultConfig = config.getConfig('default');

      if (!defaultConfig) {
        config.addConfig('default');
        defaultConfig = config.getConfig('default');
      }

      defaultConfig['tree'] = {
        classes: ['em-tree-branch', 'em-tree', 'fa-ul'],
        branchClasses: ['em-tree-branch', 'fa-ul'],
        nodeClasses: ['em-tree-node'],
        nodeOpenClasses: [],
        nodeCloseClasses: [],
        nodeOpenIconClasses: ['fa-li', 'fa', 'fa-minus-square-o'],
        nodeCloseIconClasses: ['fa-li', 'fa', 'fa-plus-square-o'],
        nodeLeafClasses: ['leaf'],
        nodeLeafIconClasses: ['fa-li', 'fa', 'fa-square-o'],
        nodeLoadingIconClasses: ['fa-li', 'fa', 'fa-spinner', 'fa-spin'],
        nodeSelectedClasses: ['em-tree-node-active']
      };
    }

  };
  _exports.default = _default;
});
;define("picasa/initializers/container-debug-adapter", ["exports", "ember-resolver/resolvers/classic/container-debug-adapter"], function (_exports, _containerDebugAdapter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'container-debug-adapter',

    initialize() {
      let app = arguments[1] || arguments[0];
      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }

  };
  _exports.default = _default;
});
;define("picasa/initializers/debug", ["exports", "@html-next/vertical-collection/-debug"], function (_exports, _debug) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'vertical-collection-debug',

    initialize() {}

  };
  _exports.default = _default;
});
;define("picasa/initializers/ember-concurrency", ["exports", "ember-concurrency/initializers/ember-concurrency"], function (_exports, _emberConcurrency) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberConcurrency.default;
    }
  });
});
;define("picasa/initializers/ember-data-data-adapter", ["exports", "@ember-data/debug/setup"], function (_exports, _setup) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _setup.default;
    }
  });
});
;define("picasa/initializers/ember-data", ["exports", "ember-data", "ember-data/setup-container"], function (_exports, _emberData, _setupContainer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*
    This code initializes EmberData in an Ember application.
  
    It ensures that the `store` service is automatically injected
    as the `store` property on all routes and controllers.
  */
  var _default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
  _exports.default = _default;
});
;define("picasa/initializers/ember-i18next", ["exports", "picasa/config/environment", "ember-i18next/configuration"], function (_exports, _environment, _configuration) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.initialize = initialize;
  _exports.default = void 0;

  function initialize()
  /* application */
  {
    if (!_environment.default.i18nextOptions) {
      // eslint-disable-next-line no-console
      console.warn('No configuration found for ember-i18next. Did you set up i18nextOptions in your environment.js?');
    }

    _configuration.default.load(_environment.default.i18nextOptions);
  }

  var _default = {
    name: 'ember-i18next',
    initialize
  };
  _exports.default = _default;
});
;define("picasa/initializers/export-application-global", ["exports", "picasa/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.initialize = initialize;
  _exports.default = void 0;

  function initialize() {
    var application = arguments[1] || arguments[0];

    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;

      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;
        application.reopen({
          willDestroy: function () {
            this._super.apply(this, arguments);

            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  var _default = {
    name: 'export-application-global',
    initialize: initialize
  };
  _exports.default = _default;
});
;define("picasa/initializers/localization", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.initialize = initialize;
  _exports.default = void 0;

  function initialize()
  /* application */
  {// application.inject('route', 'foo', 'service:foo');
  }

  var _default = {
    initialize
  };
  _exports.default = _default;
});
;define("picasa/initializers/resize", ["exports", "ember-resize/services/resize", "picasa/config/environment"], function (_exports, _resize, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.initialize = initialize;
  _exports.default = void 0;

  function initialize(application) {
    const resizeServiceDefaults = Ember.getWithDefault(_environment.default, 'resizeServiceDefaults', {
      debounceTimeout: 200,
      heightSensitive: true,
      widthSensitive: true
    });
    const injectionFactories = Ember.getWithDefault(resizeServiceDefaults, 'injectionFactories', ['view', 'component']) || [];
    application.unregister('config:resize-service');
    application.register('config:resize-service', resizeServiceDefaults, {
      instantiate: false
    });
    application.register('service:resize', _resize.default);
    const resizeService = application.resolveRegistration('service:resize');
    resizeService.prototype.resizeServiceDefaults = resizeServiceDefaults;
    injectionFactories.forEach(factory => {
      application.inject(factory, 'resizeService', 'service:resize');
    });
  }

  var _default = {
    initialize,
    name: 'resize'
  };
  _exports.default = _default;
});
;define("picasa/instance-initializers/ember-a11y", ["exports", "ember-a11y/instance-initializers/ember-a11y"], function (_exports, _emberA11y) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberA11y.default;
    }
  });
  Object.defineProperty(_exports, "initialize", {
    enumerable: true,
    get: function () {
      return _emberA11y.initialize;
    }
  });
});
;define("picasa/instance-initializers/ember-data", ["exports", "ember-data/initialize-store-service"], function (_exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'ember-data',
    initialize: _initializeStoreService.default
  };
  _exports.default = _default;
});
;define("picasa/instance-initializers/head-browser", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'head-browser',

    initialize() {// do nothing!
      // this functionality has been moved into addon/components/head-layout.js
      // This is only here in order to not break existing addons relying on this, e.g. ember-page-title.
    }

  };
  _exports.default = _default;
});
;define("picasa/instance-initializers/theme-init", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.initialize = initialize;
  _exports.default = void 0;

  function initialize(applicationInstance) {
    applicationInstance.lookup('service:theme-changer')._generateStyleTag();
  }

  var _default = {
    name: 'ember-theme-changerr-init',
    initialize
  };
  _exports.default = _default;
});
;define("picasa/middleware/index", ["exports", "ember-redux/middleware/index"], function (_exports, _index) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _index.default;
    }
  });
});
;define("picasa/mixins/hotkeys-bindings", ["exports", "ember-tree-utils/mixins/hotkeys-binding"], function (_exports, _hotkeysBinding) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _hotkeysBinding.default;
    }
  });
});
;define("picasa/mixins/i18n", ["exports", "ember-i18next/mixins/i18n"], function (_exports, _i18n) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _i18n.default;
  _exports.default = _default;
});
;define("picasa/mixins/persistence", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Mixin.create({
    persistence: Ember.inject.service(),

    getPersistenceService() {
      return this.persistence;
    }

  });

  _exports.default = _default;
});
;define("picasa/mixins/preference", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Mixin.create({
    preferenceManager: Ember.inject.service(),

    getPreferenceService() {
      return this.preferenceManager;
    }

  });

  _exports.default = _default;
});
;define("picasa/mixins/resize-aware", ["exports", "ember-resize/mixins/resize-aware"], function (_exports, _resizeAware) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _resizeAware.default;
    }
  });
});
;define("picasa/mixins/style-bindings", ["exports", "ember-tree-utils/mixins/style-binding"], function (_exports, _styleBinding) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _styleBinding.default;
    }
  });
});
;define("picasa/mixins/transition-mixin", ["exports", "ember-css-transitions/mixins/transition-mixin"], function (_exports, _transitionMixin) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _transitionMixin.default;
    }
  });
});
;define("picasa/mixins/with-config", ["exports", "ember-tree-utils/mixins/with-config"], function (_exports, _withConfig) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _withConfig.default;
    }
  });
});
;define("picasa/modifiers/did-insert", ["exports", "@ember/render-modifiers/modifiers/did-insert"], function (_exports, _didInsert) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _didInsert.default;
    }
  });
});
;define("picasa/modifiers/did-update", ["exports", "@ember/render-modifiers/modifiers/did-update"], function (_exports, _didUpdate) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _didUpdate.default;
    }
  });
});
;define("picasa/modifiers/will-destroy", ["exports", "@ember/render-modifiers/modifiers/will-destroy"], function (_exports, _willDestroy) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _willDestroy.default;
    }
  });
});
;define("picasa/pods/components/folder-card/component", ["exports", "@babel/runtime/helpers/esm/defineProperty", "@babel/runtime/helpers/esm/applyDecoratedDescriptor", "ember-in-viewport", "@ember-decorators/object", "scroll-into-view"], function (_exports, _defineProperty2, _applyDecoratedDescriptor2, _emberInViewport, _object, _scrollIntoView) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _temp;

  let FolderCardComponent = (_dec = (0, _object.observes)("inViewportName"), _dec2 = Ember._action, _dec3 = Ember._action, _dec4 = Ember._action, _dec5 = Ember._action, _dec6 = Ember._action, _dec7 = Ember._action, _dec8 = Ember._action, _dec9 = Ember._action, (_class = (_temp = class FolderCardComponent extends Ember.Component.extend(_emberInViewport.default) {
    constructor(...args) {
      super(...args);
      (0, _defineProperty2.default)(this, "imageClicked", () => {});
      (0, _defineProperty2.default)(this, "isSlideshow", false);
      (0, _defineProperty2.default)(this, "onRefreshThumbnail", () => {});
    }

    // eslint-disable-next-line ember/no-observers
    moveToViewport() {
      const name = this.inViewportName;

      if (name == this.root) {
        //this.element.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
        (0, _scrollIntoView.default)(this.element, {
          validTarget: function (target) {
            // Don't scroll window.
            return target != window;
          }
        });
      }
    }

    saveToDisk() {
      this.set("showToast", true);
    }

    closeToast() {
      this.set("showToast", false);
    }

    buttonAction() {}

    handleImageClicked(src) {
      this.set("lightboxSrc", `file://${src}`);
      this.set("showDialog", true);
    }

    changeSlideShow() {
      this.set("isSlideshow", !this.isSlideshow);
    }

    onInitialZoomInEnd() {}

    closeDialog() {
      this.set("showDialog", false);
    }

    refreshThumbnail() {
      this.onRefreshThumbnail(this.root);
    }

  }, _temp), ((0, _applyDecoratedDescriptor2.default)(_class.prototype, "moveToViewport", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "moveToViewport"), _class.prototype), (0, _applyDecoratedDescriptor2.default)(_class.prototype, "saveToDisk", [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, "saveToDisk"), _class.prototype), (0, _applyDecoratedDescriptor2.default)(_class.prototype, "closeToast", [_dec3], Object.getOwnPropertyDescriptor(_class.prototype, "closeToast"), _class.prototype), (0, _applyDecoratedDescriptor2.default)(_class.prototype, "buttonAction", [_dec4], Object.getOwnPropertyDescriptor(_class.prototype, "buttonAction"), _class.prototype), (0, _applyDecoratedDescriptor2.default)(_class.prototype, "handleImageClicked", [_dec5], Object.getOwnPropertyDescriptor(_class.prototype, "handleImageClicked"), _class.prototype), (0, _applyDecoratedDescriptor2.default)(_class.prototype, "changeSlideShow", [_dec6], Object.getOwnPropertyDescriptor(_class.prototype, "changeSlideShow"), _class.prototype), (0, _applyDecoratedDescriptor2.default)(_class.prototype, "onInitialZoomInEnd", [_dec7], Object.getOwnPropertyDescriptor(_class.prototype, "onInitialZoomInEnd"), _class.prototype), (0, _applyDecoratedDescriptor2.default)(_class.prototype, "closeDialog", [_dec8], Object.getOwnPropertyDescriptor(_class.prototype, "closeDialog"), _class.prototype), (0, _applyDecoratedDescriptor2.default)(_class.prototype, "refreshThumbnail", [_dec9], Object.getOwnPropertyDescriptor(_class.prototype, "refreshThumbnail"), _class.prototype)), _class));
  _exports.default = FolderCardComponent;
});
;define("picasa/pods/components/folder-card/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "HBEeULMX",
    "block": "{\"symbols\":[\"toast\",\"card\"],\"statements\":[[6,[37,15],null,null,[[\"default\"],[{\"statements\":[[2,\"  \"],[1,[30,[36,14],null,[[\"header\",\"save\",\"hasChange\",\"onRefresh\",\"onSlideshow\"],[[35,13],[30,[36,2],[[32,0],\"saveToDisk\"],null],[35,12],[30,[36,2],[[32,0],\"refreshThumbnail\"],null],[30,[36,2],[[32,0],\"changeSlideShow\"],null]]]]],[2,\"\\n\"],[6,[37,1],[[30,[36,0],[[32,2,[\"content\"]],\"expected `card.content` to be a contextual component but found a string. Did you mean `(component card.content)`? ('picasa/pods/components/folder-card/template.hbs' @ L5:C5) \"],null]],[[\"class\"],[\"layout-row layout-align-space-between\"]],[[\"default\"],[{\"statements\":[[2,\"    \"],[1,[30,[36,11],null,[[\"images\",\"imageClicked\"],[[35,10],[30,[36,2],[[32,0],\"handleImageClicked\"],null]]]]],[2,\"\\n\"]],\"parameters\":[]}]]]],\"parameters\":[2]}]]],[2,\"\\n\"],[6,[37,17],[[35,16]],null,[[\"default\"],[{\"statements\":[[6,[37,9],null,[[\"class\",\"onClose\"],[\"flex-77\",[30,[36,2],[[32,0],\"closeDialog\",\"cancel\"],null]]],[[\"default\"],[{\"statements\":[[6,[37,7],null,null,[[\"default\"],[{\"statements\":[[2,\"      \"],[1,[30,[36,6],null,[[\"width\",\"height\",\"src\"],[700,500,[35,5]]]]],[2,\"\\n\"]],\"parameters\":[]}]]],[6,[37,8],null,[[\"class\"],[\"layout-row\"]],[[\"default\"],[{\"statements\":[[2,\"      \"],[6,[37,3],null,[[\"onClick\"],[[30,[36,2],[[32,0],\"closeDialog\",\"ok\"],null]]],[[\"default\"],[{\"statements\":[[2,\"OK\"]],\"parameters\":[]}]]],[2,\"\\n\"]],\"parameters\":[]}]]]],\"parameters\":[]}]]]],\"parameters\":[]}]]],[2,\"\\n\"],[6,[37,17],[[35,18]],null,[[\"default\"],[{\"statements\":[[6,[37,4],null,[[\"duration\",\"position\",\"swipeToClose\",\"onClose\"],[5000,\"bottom right\",true,[30,[36,2],[[32,0],\"closeToast\"],null]]],[[\"default\"],[{\"statements\":[[2,\"    \"],[6,[37,1],[[30,[36,0],[[32,1,[\"text\"]],\"expected `toast.text` to be a contextual component but found a string. Did you mean `(component toast.text)`? ('picasa/pods/components/folder-card/template.hbs' @ L23:C7) \"],null]],null,[[\"default\"],[{\"statements\":[[2,\"Hello\"]],\"parameters\":[]}]]],[2,\"\\n    \"],[6,[37,3],null,[[\"accent\",\"onClick\"],[true,[30,[36,2],[[32,0],\"buttonAction\"],null]]],[[\"default\"],[{\"statements\":[[2,\"Undo\"]],\"parameters\":[]}]]],[2,\"\\n\"]],\"parameters\":[1]}]]]],\"parameters\":[]}]]]],\"hasEval\":false,\"upvars\":[\"-assert-implicit-component-helper-argument\",\"component\",\"action\",\"paper-button\",\"paper-toast\",\"lightboxSrc\",\"auto-image\",\"paper-dialog-content\",\"paper-dialog-actions\",\"paper-dialog\",\"images\",\"image-list\",\"imageChanged\",\"root\",\"folder-header\",\"paper-card\",\"showDialog\",\"if\",\"showToast\"]}",
    "meta": {
      "moduleName": "picasa/pods/components/folder-card/template.hbs"
    }
  });

  _exports.default = _default;
});
;define("picasa/pods/components/folder-header/component", ["exports", "@babel/runtime/helpers/esm/defineProperty", "@babel/runtime/helpers/esm/applyDecoratedDescriptor", "@ember-decorators/component", "ember-i18next/mixins/i18n"], function (_exports, _defineProperty2, _applyDecoratedDescriptor2, _component, _i18n) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _dec3, _class, _class2, _temp;

  let FolderHeaderComponent = (_dec = (0, _component.classNames)("folder-header"), _dec2 = Ember._action, _dec3 = Ember._action, _dec(_class = (_class2 = (_temp = class FolderHeaderComponent extends Ember.Component.extend(_i18n.default) {
    constructor(...args) {
      super(...args);
      (0, _defineProperty2.default)(this, "onSlideshow", () => {});
      (0, _defineProperty2.default)(this, "onRefresh", () => {});
    }

    handleSlideshow() {
      this.onSlideshow();
    }

    handleRefresh() {
      this.onRefresh();
    }

  }, _temp), ((0, _applyDecoratedDescriptor2.default)(_class2.prototype, "handleSlideshow", [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, "handleSlideshow"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "handleRefresh", [_dec3], Object.getOwnPropertyDescriptor(_class2.prototype, "handleRefresh"), _class2.prototype)), _class2)) || _class);
  var _default = FolderHeaderComponent;
  _exports.default = _default;
});
;define("picasa/pods/components/folder-header/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "xU/qRWqh",
    "block": "{\"symbols\":[\"toolbar\"],\"statements\":[[6,[37,7],null,[[\"class\"],[\"\"]],[[\"default\"],[{\"statements\":[[6,[37,6],[[30,[36,5],[[32,1,[\"tools\"]],\"expected `toolbar.tools` to be a contextual component but found a string. Did you mean `(component toolbar.tools)`? ('picasa/pods/components/folder-header/template.hbs' @ L2:C5) \"],null]],null,[[\"default\"],[{\"statements\":[[2,\"    \"],[10,\"h2\"],[12],[1,[34,1]],[13],[2,\"\\n    \"],[10,\"span\"],[14,0,\"flex\"],[12],[13],[2,\"\\n\"],[6,[37,4],null,[[\"mini\",\"aria-label\",\"onClick\"],[true,[30,[36,3],[\"folder.header.toolbar.refresh\"],null],[30,[36,2],[[32,0],\"handleRefresh\"],null]]],[[\"default\"],[{\"statements\":[[2,\"      \"],[1,[30,[36,0],[\"refresh\"],null]],[2,\"\\n\"]],\"parameters\":[]}]]],[6,[37,4],null,[[\"mini\",\"aria-label\",\"onClick\"],[true,[30,[36,3],[\"folder.header.toolbar.favorite\"],null],[30,[36,2],[[32,0],\"handleSlideshow\"],null]]],[[\"default\"],[{\"statements\":[[2,\"      \"],[1,[30,[36,0],[\"slideshow\"],null]],[2,\"\\n\"]],\"parameters\":[]}]]]],\"parameters\":[]}]]]],\"parameters\":[1]}]]]],\"hasEval\":false,\"upvars\":[\"paper-icon\",\"header\",\"action\",\"t\",\"paper-button\",\"-assert-implicit-component-helper-argument\",\"component\",\"paper-toolbar\"]}",
    "meta": {
      "moduleName": "picasa/pods/components/folder-header/template.hbs"
    }
  });

  _exports.default = _default;
});
;define("picasa/pods/components/folder-list/component", ["exports", "@babel/runtime/helpers/esm/defineProperty", "@babel/runtime/helpers/esm/applyDecoratedDescriptor", "ember-redux", "picasa/actions/folders"], function (_exports, _defineProperty2, _applyDecoratedDescriptor2, _emberRedux, _folders) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _class, _temp;

  const stateToComputed = (state
  /*, attrs*/
  ) => {
    return {
      folders: state.watched.folderList
    };
  };

  const dispatchToActions = {
    listFiles: _folders.default
  };
  let FolderListComponent = (_dec = Ember.computed("showProperty"), (_class = (_temp = class FolderListComponent extends Ember.Component {
    constructor(...args) {
      super(...args);
      (0, _defineProperty2.default)(this, "showProperty", false);
    }

    get folderListClass() {
      return this.showProperty ? "flex-70" : "flex";
    }

  }, _temp), ((0, _applyDecoratedDescriptor2.default)(_class.prototype, "folderListClass", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "folderListClass"), _class.prototype)), _class));

  var _default = (0, _emberRedux.connect)(stateToComputed, dispatchToActions)(FolderListComponent);

  _exports.default = _default;
});
;define("picasa/pods/components/folder-list/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "SW4tgq8A",
    "block": "{\"symbols\":[\"&default\"],\"statements\":[[2,\"\\n\\n\"],[10,\"div\"],[14,0,\"layout-row flex\"],[12],[2,\"\\n  \"],[10,\"div\"],[15,0,[34,1]],[12],[2,\"\\n    \"],[18,1,[[35,2]]],[2,\"\\n  \"],[13],[2,\"\\n\"],[6,[37,4],[[35,3]],null,[[\"default\"],[{\"statements\":[[2,\"    \"],[10,\"div\"],[14,0,\"flex\"],[12],[2,\"\\n      \"],[1,[34,0]],[2,\"\\n    \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[13]],\"hasEval\":false,\"upvars\":[\"image-property\",\"folderListClass\",\"folders\",\"showProperty\",\"if\"]}",
    "meta": {
      "moduleName": "picasa/pods/components/folder-list/template.hbs"
    }
  });

  _exports.default = _default;
});
;define("picasa/pods/components/folder-photos/component", ["exports", "@babel/runtime/helpers/esm/initializerDefineProperty", "@babel/runtime/helpers/esm/defineProperty", "@babel/runtime/helpers/esm/applyDecoratedDescriptor", "@babel/runtime/helpers/esm/initializerWarningHelper", "@ember-decorators/object", "rxjs", "rxjs/operators", "picasa/utils/logger", "picasa/mixins/preference"], function (_exports, _initializerDefineProperty2, _defineProperty2, _applyDecoratedDescriptor2, _initializerWarningHelper2, _object, _rxjs, _operators, _logger, _preference) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _dec3, _dec4, _class, _descriptor, _descriptor2, _temp;

  const PROPERTY_NAME = {
    FOLDERS: "folders",
    THUMBNAILS: "foldersWithThumbnail",
    MOVETO: "moveTo"
  };
  let FolderPhotosComponent = (_dec = Ember.inject.service, _dec2 = Ember.computed.notEmpty(PROPERTY_NAME.THUMBNAILS), _dec3 = (0, _object.observes)(PROPERTY_NAME.FOLDERS), _dec4 = Ember._action, (_class = (_temp = class FolderPhotosComponent extends Ember.Component.extend(_preference.default) {
    constructor(...args) {
      super(...args);
      (0, _initializerDefineProperty2.default)(this, "fetchCache", _descriptor, this);
      (0, _defineProperty2.default)(this, "skipExictCheck", true);
      (0, _initializerDefineProperty2.default)(this, "hasFolders", _descriptor2, this);
      (0, _defineProperty2.default)(this, "folders", []);
      (0, _defineProperty2.default)(this, "foldersWithThumbnail", []);
      (0, _defineProperty2.default)(this, "imageClicked", () => {});
    }

    folderChanged() {
      this.scanThumbnail();
    }

    init() {
      super.init(...arguments);
      this.scanThumbnail(this.skipExictCheck);
    }

    handleRefreshThumbnail(root) {
      this.scanThumbnail(false);
    }

    isCached(image, checkExist) {
      return (0, _rxjs.from)(this.fetchCache.checkCache(image, checkExist));
    }

    checkImages(folder, checkExist) {
      const mergeImage = (images, image) => {
        images.push(image);
        return images;
      };

      return (0, _rxjs.from)(folder.images).pipe((0, _operators.mergeMap)(image => this.isCached(image, checkExist)), (0, _operators.reduce)(mergeImage, []), (0, _operators.map)(images => {
        folder.images = images;
        return folder;
      }));
    }

    notifyReady(e) {
      if (e) (0, _logger.error)(e);
      const {
        ipcRenderer
      } = requireNode('electron');
      ipcRenderer.send('picasa-is-ready');
    }

    scanThumbnail(checkExist) {
      (0, _rxjs.from)(this.folders).pipe((0, _operators.concatMap)(folder => {
        return this.checkImages({ ...folder
        }, checkExist);
      }), (0, _operators.reduce)((acc, folder) => {
        acc.push(folder);
        return acc;
      }, [])).subscribe(folders => {
        Ember.run(() => {
          this.set("foldersWithThumbnail", folders);
        });
      }, this.notifyReady, this.notifyReady);
    }

  }, _temp), (_descriptor = (0, _applyDecoratedDescriptor2.default)(_class.prototype, "fetchCache", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = (0, _applyDecoratedDescriptor2.default)(_class.prototype, "hasFolders", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), (0, _applyDecoratedDescriptor2.default)(_class.prototype, "folderChanged", [_dec3], Object.getOwnPropertyDescriptor(_class.prototype, "folderChanged"), _class.prototype), (0, _applyDecoratedDescriptor2.default)(_class.prototype, "handleRefreshThumbnail", [_dec4], Object.getOwnPropertyDescriptor(_class.prototype, "handleRefreshThumbnail"), _class.prototype)), _class));
  _exports.default = FolderPhotosComponent;
});
;define("picasa/pods/components/folder-photos/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "xLyAiW0L",
    "block": "{\"symbols\":[\"folder\"],\"statements\":[[2,\"\\n\"],[6,[37,7],[[35,6]],null,[[\"default\"],[{\"statements\":[[6,[37,5],[[30,[36,4],[[30,[36,4],[[35,3]],null]],null]],null,[[\"default\"],[{\"statements\":[[2,\"    \"],[1,[30,[36,2],null,[[\"root\",\"images\",\"inViewportName\",\"onRefreshThumbnail\"],[[32,1,[\"cwd\"]],[32,1,[\"images\"]],[35,1],[30,[36,0],[[32,0],\"handleRefreshThumbnail\"],null]]]]],[2,\"\\n\"]],\"parameters\":[1]}]]]],\"parameters\":[]}]]]],\"hasEval\":false,\"upvars\":[\"action\",\"moveTo\",\"folder-card\",\"foldersWithThumbnail\",\"-track-array\",\"each\",\"hasFolders\",\"if\"]}",
    "meta": {
      "moduleName": "picasa/pods/components/folder-photos/template.hbs"
    }
  });

  _exports.default = _default;
});
;define("picasa/pods/components/image-list/component", ["exports", "@babel/runtime/helpers/esm/defineProperty", "@babel/runtime/helpers/esm/applyDecoratedDescriptor", "@ember-decorators/component"], function (_exports, _defineProperty2, _applyDecoratedDescriptor2, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _class, _class2, _temp;

  let ImageListComponent = (_dec = (0, _component.classNames)("image-list"), _dec2 = Ember._action, _dec(_class = (_class2 = (_temp = class ImageListComponent extends Ember.Component {
    constructor(...args) {
      super(...args);
      (0, _defineProperty2.default)(this, "imageClicked", () => {});
    }

    handleImageClicked(src) {
      this.imageClicked(src);
    }

  }, _temp), ((0, _applyDecoratedDescriptor2.default)(_class2.prototype, "handleImageClicked", [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, "handleImageClicked"), _class2.prototype)), _class2)) || _class);
  var _default = ImageListComponent;
  _exports.default = _default;
});
;define("picasa/pods/components/image-list/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "Hbg1pmAJ",
    "block": "{\"symbols\":[\"image\"],\"statements\":[[10,\"ul\"],[12],[2,\"\\n\"],[6,[37,4],[[30,[36,3],[[30,[36,3],[[35,2]],null]],null]],null,[[\"default\"],[{\"statements\":[[2,\"    \"],[10,\"li\"],[12],[2,\"\\n      \"],[1,[30,[36,1],null,[[\"source\",\"src\",\"imageClicked\"],[[32,1,[\"fullPath\"]],[32,1,[\"thumbnail\"]],[30,[36,0],[[32,0],\"handleImageClicked\"],null]]]]],[2,\"\\n    \"],[13],[2,\"\\n\"]],\"parameters\":[1]}]]],[13],[2,\"\\n\"]],\"hasEval\":false,\"upvars\":[\"action\",\"thumbnail-image\",\"images\",\"-track-array\",\"each\"]}",
    "meta": {
      "moduleName": "picasa/pods/components/image-list/template.hbs"
    }
  });

  _exports.default = _default;
});
;define("picasa/pods/components/image-property/component", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class ImagePropertyComponent extends Ember.Component {}

  _exports.default = ImagePropertyComponent;
});
;define("picasa/pods/components/image-property/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "Hue7BIfy",
    "block": "{\"symbols\":[\"&default\"],\"statements\":[[18,1,null]],\"hasEval\":false,\"upvars\":[]}",
    "meta": {
      "moduleName": "picasa/pods/components/image-property/template.hbs"
    }
  });

  _exports.default = _default;
});
;define("picasa/pods/components/import-photos-dialog/component", ["exports", "@babel/runtime/helpers/esm/initializerDefineProperty", "@babel/runtime/helpers/esm/defineProperty", "@babel/runtime/helpers/esm/applyDecoratedDescriptor", "@babel/runtime/helpers/esm/initializerWarningHelper", "ember-i18next/mixins/i18n"], function (_exports, _initializerDefineProperty2, _defineProperty2, _applyDecoratedDescriptor2, _initializerWarningHelper2, _i18n) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _descriptor, _temp;

  let ImportPhotosDialog = (_dec = Ember.inject.service, _dec2 = Ember.computed, _dec3 = Ember.computed("folders"), _dec4 = Ember._action, _dec5 = Ember._action, _dec6 = Ember._action, (_class = (_temp = class ImportPhotosDialog extends Ember.Component.extend(_i18n.default) {
    constructor(...args) {
      super(...args);
      (0, _initializerDefineProperty2.default)(this, "photoImport", _descriptor, this);
      (0, _defineProperty2.default)(this, "importing", false);
      (0, _defineProperty2.default)(this, "importStarted", () => {});
      (0, _defineProperty2.default)(this, "importFinished", () => {});
      (0, _defineProperty2.default)(this, "folders", undefined);
    }

    get folderSelectLabel() {
      return this.t("import.select.label");
    }

    get selectedFolder() {
      return this.folders ? this.folders.objectAt(0) : "";
    }

    // folders to save imported folders.
    importFolder(path) {
      this.set("importing", true);
      this.importStarted();
      this.photoImport.import(path).subscribe(photo => {
        this.set("fileInProgress", photo.file);
      }, error => {
        this.importFinished(error);
        this.set("importing", false);
      }, () => {
        this.importFinished();
        this.set("importing", false);
      });
    }

    startImport() {
      this.importFolder(this.source);
    }

    stopImport() {// should allow stop?
    }

    cancelImport() {
      this.importFinished();
    }

  }, _temp), (_descriptor = (0, _applyDecoratedDescriptor2.default)(_class.prototype, "photoImport", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), (0, _applyDecoratedDescriptor2.default)(_class.prototype, "folderSelectLabel", [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, "folderSelectLabel"), _class.prototype), (0, _applyDecoratedDescriptor2.default)(_class.prototype, "selectedFolder", [_dec3], Object.getOwnPropertyDescriptor(_class.prototype, "selectedFolder"), _class.prototype), (0, _applyDecoratedDescriptor2.default)(_class.prototype, "startImport", [_dec4], Object.getOwnPropertyDescriptor(_class.prototype, "startImport"), _class.prototype), (0, _applyDecoratedDescriptor2.default)(_class.prototype, "stopImport", [_dec5], Object.getOwnPropertyDescriptor(_class.prototype, "stopImport"), _class.prototype), (0, _applyDecoratedDescriptor2.default)(_class.prototype, "cancelImport", [_dec6], Object.getOwnPropertyDescriptor(_class.prototype, "cancelImport"), _class.prototype)), _class));
  _exports.default = ImportPhotosDialog;
});
;define("picasa/pods/components/import-photos-dialog/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "mkCupfQa",
    "block": "{\"symbols\":[\"folder\"],\"statements\":[[6,[37,17],null,[[\"class\"],[\"folder-selection\"]],[[\"default\"],[{\"statements\":[[6,[37,14],null,null,[[\"default\"],[{\"statements\":[[6,[37,13],null,null,[[\"default\"],[{\"statements\":[[2,\"      \"],[10,\"h2\"],[12],[1,[30,[36,0],[\"import.photos.label\"],null]],[13],[2,\"\\n\"]],\"parameters\":[]}]]]],\"parameters\":[]}]]],[6,[37,15],null,null,[[\"default\"],[{\"statements\":[[2,\"    \"],[10,\"div\"],[14,0,\"layout-column layout-align-start-start\"],[12],[2,\"\\n\"],[6,[37,5],[[35,3]],null,[[\"default\"],[{\"statements\":[[2,\"        \"],[10,\"div\"],[14,0,\"layout-row\"],[12],[2,\"\\n          \"],[10,\"div\"],[14,0,\"flex-shrink\"],[12],[2,\"\\n            \"],[1,[30,[36,0],[\"import.photos.source\"],null]],[2,\"\\n          \"],[13],[2,\"\\n          \"],[10,\"div\"],[14,0,\"flex-gt-sm-77 flex-77\"],[12],[2,\"\\n            \"],[1,[34,8]],[2,\"\\n          \"],[13],[2,\"\\n        \"],[13],[2,\"\\n        \"],[10,\"div\"],[14,0,\"layout-row\"],[12],[2,\"\\n          \"],[10,\"div\"],[14,0,\"flex-shrink\"],[12],[2,\"\\n            \"],[1,[30,[36,0],[\"import.photos.destination\"],null]],[2,\"\\n          \"],[13],[2,\"\\n          \"],[10,\"div\"],[14,0,\"flex-gt-sm-77 flex-77\"],[12],[2,\"\\n\"],[6,[37,12],null,[[\"label\",\"selected\",\"options\",\"onChange\"],[[30,[36,0],[\"import.select.label\"],null],[35,9],[35,11],[30,[36,1],[[32,0],[30,[36,10],[[35,9]],null]],null]]],[[\"default\"],[{\"statements\":[[2,\"              \"],[1,[32,1]],[2,\"\\n\"]],\"parameters\":[1]}]]],[2,\"          \"],[13],[2,\"\\n        \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[6,[37,4],[[35,3]],null,[[\"default\"],[{\"statements\":[[2,\"        \"],[10,\"div\"],[14,0,\"layout-row\"],[12],[2,\"\\n          \"],[1,[30,[36,0],[\"import.photos.progress\"],null]],[2,\"\\n        \"],[13],[2,\"\\n        \"],[10,\"div\"],[14,0,\"layout-row layout-align-center-start\"],[12],[2,\"\\n          \"],[1,[34,6]],[2,\"\\n        \"],[13],[2,\"\\n        \"],[10,\"div\"],[14,0,\"layout-row layout-align-center-start\"],[12],[2,\"\\n          \"],[1,[34,7]],[2,\"\\n        \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"    \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[6,[37,16],null,[[\"class\"],[\"layout-row\"]],[[\"default\"],[{\"statements\":[[6,[37,4],[[35,3]],null,[[\"default\"],[{\"statements\":[[2,\"      \"],[6,[37,2],null,[[\"onClick\",\"disable\"],[[30,[36,1],[[32,0],\"stopImport\"],null],[35,3]]],[[\"default\"],[{\"statements\":[[1,[30,[36,0],[\"button.stop\"],null]]],\"parameters\":[]}]]],[2,\"\\n\"]],\"parameters\":[]}]]],[6,[37,5],[[35,3]],null,[[\"default\"],[{\"statements\":[[2,\"      \"],[6,[37,2],null,[[\"onClick\"],[[30,[36,1],[[32,0],\"startImport\"],null]]],[[\"default\"],[{\"statements\":[[1,[30,[36,0],[\"button.start\"],null]]],\"parameters\":[]}]]],[2,\"\\n      \"],[6,[37,2],null,[[\"onClick\"],[[30,[36,1],[[32,0],\"cancelImport\"],null]]],[[\"default\"],[{\"statements\":[[1,[30,[36,0],[\"button.cancel\"],null]]],\"parameters\":[]}]]],[2,\"\\n\"]],\"parameters\":[]}]]]],\"parameters\":[]}]]]],\"parameters\":[]}]]],[2,\"\\n\"]],\"hasEval\":false,\"upvars\":[\"t\",\"action\",\"paper-button\",\"importing\",\"if\",\"unless\",\"paper-progress-linear\",\"fileInProgress\",\"source\",\"selectedFolder\",\"mut\",\"folders\",\"paper-select\",\"paper-toolbar-tools\",\"paper-toolbar\",\"paper-dialog-content\",\"paper-dialog-actions\",\"paper-dialog\"]}",
    "meta": {
      "moduleName": "picasa/pods/components/import-photos-dialog/template.hbs"
    }
  });

  _exports.default = _default;
});
;define("picasa/pods/components/path-tree/component", ["exports", "@babel/runtime/helpers/esm/initializerDefineProperty", "@babel/runtime/helpers/esm/defineProperty", "@babel/runtime/helpers/esm/applyDecoratedDescriptor", "@babel/runtime/helpers/esm/initializerWarningHelper", "@ember-decorators/component", "ember-tree-view/node", "picasa/utils/folder-reader", "picasa/mixins/preference", "ember-i18next/mixins/i18n", "ember-redux", "picasa/actions/folders", "picasa/utils/logger", "rxjs/operators", "picasa/constants/event-name", "@ember-decorators/object"], function (_exports, _initializerDefineProperty2, _defineProperty2, _applyDecoratedDescriptor2, _initializerWarningHelper2, _component, _node, _folderReader, _preference, _i18n, _emberRedux, _folders, _logger, _operators, _eventName, _object) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _temp;

  const stateToComputed = (state
  /*, attrs*/
  ) => {
    return {
      folders: state.watched.folders
    };
  };

  const dispatchToActions = {
    addFolderList: _folders.addFolderList,
    addFolders: _folders.addFolders
  };
  let PathTreeComponent = (_dec = (0, _component.classNames)("path-tree"), _dec2 = Ember.inject.service, _dec3 = Ember.inject.service, _dec4 = (0, _object.observes)("selected"), _dec5 = Ember.computed("folders"), _dec6 = Ember._action, _dec(_class = (_class2 = (_temp = class PathTreeComponent extends Ember.Component.extend(_preference.default, _i18n.default) {
    constructor() {
      super(...arguments);
      (0, _initializerDefineProperty2.default)(this, "photoImport", _descriptor, this);
      (0, _initializerDefineProperty2.default)(this, "preferenceManager", _descriptor2, this);
      (0, _defineProperty2.default)(this, "expandDepth", 1);
      (0, _defineProperty2.default)(this, "pathSelected", () => {});
      this.preferenceManager.on(_eventName.default.FolderUpdated, folders => {
        this.actions.addFolderList(folders);
      });
    }

    selectedPath() {
      if (this.selected && this.selected.path) {
        this.pathSelected(this.selected.path);
      }
    }

    get treeNodes() {
      const folders = this.folders;

      const root = _node.default.create({
        title: (0, _folderReader.hostname)(),
        nodeIcon: "filing_cabinet",
        nodeExpandedIcon: "opened_folder"
      });

      folders.forEach(element => {
        root.createChild({
          title: element,
          path: element,
          nodeIcon: "folder"
        });
      });
      return root;
    }

    getChildren(node) {
      return new Promise(resolve => {
        if (node.isLevel1) {
          resolve();
          return;
        }

        this.photoImport.scanCurrentFolder(node.path).pipe((0, _operators.map)(directory => {
          return node.createChild({
            title: directory.name,
            path: directory.file,
            nodeIcon: "folder",
            nodeExpandedIcon: "opened_folder"
          });
        })).subscribe(() => {}, _logger.error, () => resolve());
      });
    }

  }, _temp), (_descriptor = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "photoImport", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "preferenceManager", [_dec3], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "selectedPath", [_dec4], Object.getOwnPropertyDescriptor(_class2.prototype, "selectedPath"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "treeNodes", [_dec5], Object.getOwnPropertyDescriptor(_class2.prototype, "treeNodes"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "getChildren", [_dec6], Object.getOwnPropertyDescriptor(_class2.prototype, "getChildren"), _class2.prototype)), _class2)) || _class);

  var _default = (0, _emberRedux.connect)(stateToComputed, dispatchToActions)(PathTreeComponent);

  _exports.default = _default;
});
;define("picasa/pods/components/path-tree/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "H8wlSkQ2",
    "block": "{\"symbols\":[],\"statements\":[[1,[30,[36,4],null,[[\"model\",\"async\",\"selected\",\"expand-depth\",\"children\"],[[35,3],true,[35,2],[35,1],[30,[36,0],[[32,0],\"getChildren\"],null]]]]]],\"hasEval\":false,\"upvars\":[\"action\",\"expandDepth\",\"selected\",\"treeNodes\",\"em-tree\"]}",
    "meta": {
      "moduleName": "picasa/pods/components/path-tree/template.hbs"
    }
  });

  _exports.default = _default;
});
;define("picasa/pods/components/progress-bar/component", ["exports", "@glimmer/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class ProgressBarComponent extends _component.default {}

  _exports.default = ProgressBarComponent;
});
;define("picasa/pods/components/progress-bar/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "/babkQQ7",
    "block": "{\"symbols\":[\"&default\"],\"statements\":[[18,1,null]],\"hasEval\":false,\"upvars\":[]}",
    "meta": {
      "moduleName": "picasa/pods/components/progress-bar/template.hbs"
    }
  });

  _exports.default = _default;
});
;define("picasa/pods/components/settings/component", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class SettingsComponent extends Ember.Component {}

  _exports.default = SettingsComponent;
});
;define("picasa/pods/components/settings/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "WIBU1Ay/",
    "block": "{\"symbols\":[\"tabs\"],\"statements\":[[6,[37,8],null,[[\"center\",\"stretch\",\"borderBottom\",\"selected\",\"onChange\"],[[35,7],[35,6],[35,5],[35,2],[30,[36,4],[[32,0],[30,[36,3],[[35,2]],null]],null]]],[[\"default\"],[{\"statements\":[[6,[37,1],[[30,[36,0],[[32,1,[\"tab\"]],\"expected `tabs.tab` to be a contextual component but found a string. Did you mean `(component tabs.tab)`? ('picasa/pods/components/settings/template.hbs' @ L7:C5) \"],null]],null,[[\"default\"],[{\"statements\":[[2,\"    Page One\\n\"]],\"parameters\":[]}]]],[6,[37,1],[[30,[36,0],[[32,1,[\"tab\"]],\"expected `tabs.tab` to be a contextual component but found a string. Did you mean `(component tabs.tab)`? ('picasa/pods/components/settings/template.hbs' @ L10:C5) \"],null]],[[\"disabled\"],[true]],[[\"default\"],[{\"statements\":[[2,\"    Page Two (disabled)\\n\"]],\"parameters\":[]}]]],[6,[37,1],[[30,[36,0],[[32,1,[\"tab\"]],\"expected `tabs.tab` to be a contextual component but found a string. Did you mean `(component tabs.tab)`? ('picasa/pods/components/settings/template.hbs' @ L13:C5) \"],null]],null,[[\"default\"],[{\"statements\":[[2,\"    Page Three\\n\"]],\"parameters\":[]}]]],[6,[37,1],[[30,[36,0],[[32,1,[\"tab\"]],\"expected `tabs.tab` to be a contextual component but found a string. Did you mean `(component tabs.tab)`? ('picasa/pods/components/settings/template.hbs' @ L16:C5) \"],null]],null,[[\"default\"],[{\"statements\":[[2,\"    Page Four\\n\"]],\"parameters\":[]}]]],[6,[37,1],[[30,[36,0],[[32,1,[\"tab\"]],\"expected `tabs.tab` to be a contextual component but found a string. Did you mean `(component tabs.tab)`? ('picasa/pods/components/settings/template.hbs' @ L19:C5) \"],null]],null,[[\"default\"],[{\"statements\":[[2,\"    Page Five\\n\"]],\"parameters\":[]}]]]],\"parameters\":[1]}]]]],\"hasEval\":false,\"upvars\":[\"-assert-implicit-component-helper-argument\",\"component\",\"selectedBasicTab\",\"mut\",\"action\",\"borderBottom\",\"stretch\",\"center\",\"paper-tabs\"]}",
    "meta": {
      "moduleName": "picasa/pods/components/settings/template.hbs"
    }
  });

  _exports.default = _default;
});
;define("picasa/pods/components/thumbnail-image/component", ["exports", "@babel/runtime/helpers/esm/defineProperty", "@babel/runtime/helpers/esm/applyDecoratedDescriptor"], function (_exports, _defineProperty2, _applyDecoratedDescriptor2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _class, _temp;

  let ThumbnailImageComponent = (_dec = Ember._action, (_class = (_temp = class ThumbnailImageComponent extends Ember.Component {
    constructor(...args) {
      super(...args);
      (0, _defineProperty2.default)(this, "imageClicked", () => {});
    }

    doubleClick() {
      this.imageClicked(this.source);
    }

    handleImageClick() {
      this.imageClicked(this.source);
    }

  }, _temp), ((0, _applyDecoratedDescriptor2.default)(_class.prototype, "handleImageClick", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "handleImageClick"), _class.prototype)), _class));
  _exports.default = ThumbnailImageComponent;
});
;define("picasa/pods/components/thumbnail-image/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "twZZNdTs",
    "block": "{\"symbols\":[],\"statements\":[[2,\"\\n\"],[10,\"div\"],[14,0,\"thumbnail-frame\"],[12],[2,\"\\n  \"],[1,[30,[36,3],null,[[\"width\",\"height\",\"src\"],[\"100\",\"100\",[30,[36,2],[\"file://\",[35,1]],null]]]]],[2,\"\\n\"],[6,[37,4],null,[[\"position\"],[\"bottom\"]],[[\"default\"],[{\"statements\":[[2,\"    \"],[1,[34,0]],[2,\"\\n\"]],\"parameters\":[]}]]],[13],[2,\"\\n\"]],\"hasEval\":false,\"upvars\":[\"source\",\"src\",\"concat\",\"auto-image\",\"paper-tooltip\"]}",
    "meta": {
      "moduleName": "picasa/pods/components/thumbnail-image/template.hbs"
    }
  });

  _exports.default = _default;
});
;define("picasa/pods/components/title-bar/component", ["exports", "@babel/runtime/helpers/esm/initializerDefineProperty", "@babel/runtime/helpers/esm/defineProperty", "@babel/runtime/helpers/esm/applyDecoratedDescriptor", "@babel/runtime/helpers/esm/initializerWarningHelper", "@ember-decorators/component", "picasa/utils/platform"], function (_exports, _initializerDefineProperty2, _defineProperty2, _applyDecoratedDescriptor2, _initializerWarningHelper2, _component, _platform) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _temp;

  let TitleBarComponent = (_dec = (0, _component.classNames)("title-bar"), _dec2 = Ember.inject.service, _dec3 = Ember.computed, _dec4 = Ember._action, _dec(_class = (_class2 = (_temp = class TitleBarComponent extends Ember.Component {
    constructor(...args) {
      super(...args);
      (0, _initializerDefineProperty2.default)(this, "electronApi", _descriptor, this);
      (0, _defineProperty2.default)(this, "title", "");
    }

    get isVisible() {
      // Visible on macosx.
      // frame false will remove all titlebar and menu on windows and linux, but not on mac.
      // On mac, set titleBarStyle hidden/hiddenInset. will still have the menu and min/max/close.
      return (0, _platform.isMacOSX)();
    }

    addWatchedFolder() {
      const {
        dialog
      } = requireNode('electron').remote;
      dialog.showOpenDialog({
        properties: ['openDirectory']
      }, path => {
        if (path) {
          this.getPreferenceService().addFolders(path);
        } else {
          console.log("No path selected");
        }
      });
    }

    doubleClick() {
      this.electronApi.send("picasa-toggle-window-max");
    }

  }, _temp), (_descriptor = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "electronApi", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "isVisible", [_dec3], Object.getOwnPropertyDescriptor(_class2.prototype, "isVisible"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "addWatchedFolder", [_dec4], Object.getOwnPropertyDescriptor(_class2.prototype, "addWatchedFolder"), _class2.prototype)), _class2)) || _class);
  var _default = TitleBarComponent;
  _exports.default = _default;
});
;define("picasa/pods/components/title-bar/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "jat/whCh",
    "block": "{\"symbols\":[],\"statements\":[[6,[37,5],[[35,4]],null,[[\"default\"],[{\"statements\":[[6,[37,3],null,null,[[\"default\"],[{\"statements\":[[6,[37,2],null,null,[[\"default\"],[{\"statements\":[[6,[37,1],null,null,[[\"default\"],[{\"statements\":[[2,\"        \"],[10,\"span\"],[14,0,\"flex\"],[12],[13],[2,\"\\n        \"],[10,\"h6\"],[12],[2,\"\\n          \"],[1,[34,0]],[2,\"\\n        \"],[13],[2,\"\\n        \"],[10,\"span\"],[14,0,\"flex\"],[12],[13],[2,\"\\n\"]],\"parameters\":[]}]]]],\"parameters\":[]}]]]],\"parameters\":[]}]]]],\"parameters\":[]}]]]],\"hasEval\":false,\"upvars\":[\"title\",\"paper-toolbar-tools\",\"paper-toolbar\",\"paper-card\",\"isVisible\",\"if\"]}",
    "meta": {
      "moduleName": "picasa/pods/components/title-bar/template.hbs"
    }
  });

  _exports.default = _default;
});
;define("picasa/pods/electron-api/service", ["exports", "picasa/utils/electron-api"], function (_exports, _electronApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class ElectronApiService extends Ember.Service {
    get app() {
      return (0, _electronApi.getElectronApp)();
    }

    get dialog() {
      return (0, _electronApi.getElectronDialog)();
    }

    get ipc() {
      return (0, _electronApi.getElectronIpc)();
    }

    send(message, arg) {
      this.ipc.send(message, arg);
    }

  }

  _exports.default = ElectronApiService;
});
;define("picasa/pods/folder-scan/service", ["exports", "ember-concurrency"], function (_exports, _emberConcurrency) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Service.extend(Ember.Evented, {
    fetchCache: Ember.inject.service(),

    init() {
      this._super(...arguments);

      this.set("queue", []);
    },

    scanImageForCache: (0, _emberConcurrency.task)(function* (target) {
      yield this.fetchCache.checkCache(target, false);
      this.trigger("imageScanned", target);
    }).maxConcurrency(2).enqueue(),

    requestScanFile(action) {
      this.scanImageForCache.perform(action);
    }

  });

  _exports.default = _default;
});
;define("picasa/pods/index/controller", ["exports", "@babel/runtime/helpers/esm/initializerDefineProperty", "@babel/runtime/helpers/esm/defineProperty", "@babel/runtime/helpers/esm/applyDecoratedDescriptor", "@babel/runtime/helpers/esm/initializerWarningHelper", "ember-i18next/mixins/i18n", "picasa/utils/logger", "picasa/utils/data-normalizer", "picasa/utils/platform", "ember-redux", "picasa/actions/folders"], function (_exports, _initializerDefineProperty2, _defineProperty2, _applyDecoratedDescriptor2, _initializerWarningHelper2, _i18n, _logger, _dataNormalizer, _platform, _emberRedux, _folders) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _temp;

  const stateToComputed = state => ({
    folders: state.watched.folders,
    folderList: state.watched.folderList
  });

  const dispatchToActions = {
    addFiles: _folders.addFiles
  };
  let IndexController = (_dec = Ember.inject.service, _dec2 = Ember.inject.service, _dec3 = Ember.inject.service, _dec4 = Ember.inject.service, _dec5 = Ember.inject.service, _dec6 = Ember.inject.service, _dec7 = Ember._action, _dec8 = Ember._action, _dec9 = Ember._action, _dec10 = Ember._action, _dec11 = Ember._action, _dec12 = Ember._action, _dec13 = Ember._action, _dec14 = Ember._action, (_class = (_temp = class IndexController extends Ember.Controller.extend(_i18n.default) {
    constructor(...args) {
      super(...args);
      (0, _initializerDefineProperty2.default)(this, "windowMenu", _descriptor, this);
      (0, _initializerDefineProperty2.default)(this, "fileWatcher", _descriptor2, this);
      (0, _initializerDefineProperty2.default)(this, "fetchCache", _descriptor3, this);
      (0, _initializerDefineProperty2.default)(this, "folderScan", _descriptor4, this);
      (0, _initializerDefineProperty2.default)(this, "electronApi", _descriptor5, this);
      (0, _initializerDefineProperty2.default)(this, "preferenceManager", _descriptor6, this);
    }

    get macosxStyle() {
      return (0, _platform.isMacOSX)() ? "macosx" : "";
    }

    get dialog() {
      return this.electronApi.dialog;
    } // Use init instead of constructor
    // refer to https://blog.emberjs.com/2019/01/26/emberjs-native-class-update-2019-edition.html#toc_code-constructor-code-vs-code-init-code


    init() {
      super.init(...arguments);
      this.windowMenu.on("openFolderSelection", () => {
        this.openDirectoryDialog();
      });
      this.windowMenu.on("openPreferences", () => {
        this.set("showPreferenceDialog", true);
      });
      this.windowMenu.on("importFromFolder", () => {
        this.importPhotosFromFolder();
      });
      this.fileWatcher.startWatcher();
      this.fileWatcher.on("added", target => {
        if (target.isFile) {
          this.folderScan.requestScanFile((0, _dataNormalizer.normalizeImage)(target.path));
        } else {// Scan folder.
        }
      });
      this.folderScan.on("imageScanned", target => {
        this.currentProcessing = target.path;
        this.showNotification = true;
        this.send('addFiles', [target]);
      });
    }

    importPhotosFromFolder(item, focusedWindow) {
      if (this.showImportDialog) {
        // Importing photos.
        return;
      }

      this.dialog.showOpenDialog(focusedWindow, {
        properties: ['openDirectory']
      }, paths => {
        if (paths) {
          this.set("showImportDialog", true);
          this.set("importSource", paths[0]);
        } else {
          (0, _logger.info)("No path selected");
        }
      });
    }

    openDirectoryDialog(item, focusedWindow) {
      this.dialog.showOpenDialog(focusedWindow, {
        properties: ['openDirectory']
      }, paths => {
        if (paths) {
          this.preferenceManager.addFolders(paths);
        } else {
          (0, _logger.info)("No path selected");
        }
      });
    }

    handlePathSelected(path) {
      this.set("selectedPath", path);
    }

    handleImportStarted() {
      this.set("disableCancel", true);
    }

    handleImportFinished(error) {
      this.set("showImportDialog", false);
      this.set("globalMessage", error ? error.message : "Import successfully!");
      this.set("showSystemNotification", true);
    }

    closeImportDialog() {
      this.set("showImportDialog", false);
    }

    closeDialog() {
      this.set("showPreferenceDialog", false);
    }

    closeToast() {
      this.set("showNotification", false);
    }

    showImage() {}

    closeSystemToast() {
      this.set("showSystemNotification", false);
    }

  }, _temp), (_descriptor = (0, _applyDecoratedDescriptor2.default)(_class.prototype, "windowMenu", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = (0, _applyDecoratedDescriptor2.default)(_class.prototype, "fileWatcher", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = (0, _applyDecoratedDescriptor2.default)(_class.prototype, "fetchCache", [_dec3], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor4 = (0, _applyDecoratedDescriptor2.default)(_class.prototype, "folderScan", [_dec4], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor5 = (0, _applyDecoratedDescriptor2.default)(_class.prototype, "electronApi", [_dec5], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor6 = (0, _applyDecoratedDescriptor2.default)(_class.prototype, "preferenceManager", [_dec6], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), (0, _applyDecoratedDescriptor2.default)(_class.prototype, "handlePathSelected", [_dec7], Object.getOwnPropertyDescriptor(_class.prototype, "handlePathSelected"), _class.prototype), (0, _applyDecoratedDescriptor2.default)(_class.prototype, "handleImportStarted", [_dec8], Object.getOwnPropertyDescriptor(_class.prototype, "handleImportStarted"), _class.prototype), (0, _applyDecoratedDescriptor2.default)(_class.prototype, "handleImportFinished", [_dec9], Object.getOwnPropertyDescriptor(_class.prototype, "handleImportFinished"), _class.prototype), (0, _applyDecoratedDescriptor2.default)(_class.prototype, "closeImportDialog", [_dec10], Object.getOwnPropertyDescriptor(_class.prototype, "closeImportDialog"), _class.prototype), (0, _applyDecoratedDescriptor2.default)(_class.prototype, "closeDialog", [_dec11], Object.getOwnPropertyDescriptor(_class.prototype, "closeDialog"), _class.prototype), (0, _applyDecoratedDescriptor2.default)(_class.prototype, "closeToast", [_dec12], Object.getOwnPropertyDescriptor(_class.prototype, "closeToast"), _class.prototype), (0, _applyDecoratedDescriptor2.default)(_class.prototype, "showImage", [_dec13], Object.getOwnPropertyDescriptor(_class.prototype, "showImage"), _class.prototype), (0, _applyDecoratedDescriptor2.default)(_class.prototype, "closeSystemToast", [_dec14], Object.getOwnPropertyDescriptor(_class.prototype, "closeSystemToast"), _class.prototype)), _class));

  var _default = (0, _emberRedux.connect)(stateToComputed, dispatchToActions)(IndexController);

  _exports.default = _default;
});
;define("picasa/pods/index/route", ["exports", "@babel/runtime/helpers/esm/initializerDefineProperty", "@babel/runtime/helpers/esm/defineProperty", "@babel/runtime/helpers/esm/applyDecoratedDescriptor", "@babel/runtime/helpers/esm/initializerWarningHelper", "ember-redux", "picasa/mixins/preference", "picasa/utils/data-normalizer", "picasa/actions/folders"], function (_exports, _initializerDefineProperty2, _defineProperty2, _applyDecoratedDescriptor2, _initializerWarningHelper2, _emberRedux, _preference, _dataNormalizer, _folders) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _class, _descriptor, _temp;

  const model = function (dispatch) {
    // Need a very specific path reading from preferences.
    return this.fileWatcher.getWatchedFolders().then(paths => {
      (0, _folders.addFolders)(paths)(dispatch);
      return (0, _dataNormalizer.listFiles)(paths);
    }).then(paths => (0, _dataNormalizer.breakdownWithPath)(paths)).then(folders => (0, _dataNormalizer.toModel)(folders)).then(folders => {
      (0, _folders.addFolderList)(folders)(dispatch);
    });
  };

  let IndexRoute = (_dec = Ember.inject.service, (_class = (_temp = class IndexRoute extends Ember.Route.extend(_preference.default) {
    constructor(...args) {
      super(...args);
      (0, _initializerDefineProperty2.default)(this, "fileWatcher", _descriptor, this);
    }

  }, _temp), (_descriptor = (0, _applyDecoratedDescriptor2.default)(_class.prototype, "fileWatcher", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));

  var _default = (0, _emberRedux.route)({
    model
  })(IndexRoute);

  _exports.default = _default;
});
;define("picasa/pods/index/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "yleukTt1",
    "block": "{\"symbols\":[\"toast\",\"split\",\"folders\"],\"statements\":[[10,\"div\"],[14,0,\"layout-column flex\"],[12],[2,\"\\n  \"],[10,\"div\"],[14,0,\"flex\"],[12],[2,\"\\n    \"],[1,[30,[36,23],null,[[\"title\"],[[30,[36,0],[\"title\"],null]]]]],[2,\"\\n  \"],[13],[2,\"\\n  \"],[10,\"div\"],[15,0,[31,[\"flex split-view-container \",[34,24]]]],[12],[2,\"\\n\"],[6,[37,25],null,[[\"isVertical\"],[true]],[[\"default\"],[{\"statements\":[[6,[37,17],[[30,[36,16],[[32,2,[\"child\"]],\"expected `split.child` to be a contextual component but found a string. Did you mean `(component split.child)`? ('picasa/pods/index/template.hbs' @ L7:C9) \"],null]],[[\"class\"],[\"left-pane\"]],[[\"default\"],[{\"statements\":[[2,\"        \"],[10,\"div\"],[14,0,\"tree-area\"],[12],[2,\"\\n          \"],[1,[30,[36,22],null,[[\"pathSelected\"],[[30,[36,1],[[32,0],\"handlePathSelected\"],null]]]]],[2,\"\\n        \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"      \"],[1,[32,2,[\"sash\"]]],[2,\"\\n\"],[6,[37,17],[[30,[36,16],[[32,2,[\"child\"]],\"expected `split.child` to be a contextual component but found a string. Did you mean `(component split.child)`? ('picasa/pods/index/template.hbs' @ L13:C9) \"],null]],[[\"class\"],[\"right-pane\"]],[[\"default\"],[{\"statements\":[[2,\"        \"],[10,\"div\"],[14,0,\"images-area\"],[12],[2,\"\\n\"],[6,[37,21],null,null,[[\"default\"],[{\"statements\":[[2,\"            \"],[1,[30,[36,20],null,[[\"folders\",\"moveTo\"],[[32,3],[35,19]]]]],[2,\"\\n\"]],\"parameters\":[3]}]]],[2,\"        \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]]],\"parameters\":[2]}]]],[2,\"  \"],[13],[2,\"\\n\"],[13],[2,\"\\n\\n\"],[6,[37,27],[[35,26]],null,[[\"default\"],[{\"statements\":[[6,[37,18],null,[[\"duration\",\"position\",\"swipeToClose\",\"onClose\"],[5000,\"top right\",true,[30,[36,1],[[32,0],\"closeToast\"],null]]],[[\"default\"],[{\"statements\":[[6,[37,17],[[30,[36,16],[[32,1,[\"text\"]],\"expected `toast.text` to be a contextual component but found a string. Did you mean `(component toast.text)`? ('picasa/pods/index/template.hbs' @ L26:C7) \"],null]],null,[[\"default\"],[{\"statements\":[[2,\"      \"],[10,\"p\"],[12],[1,[30,[36,15],null,[[\"width\",\"height\",\"src\",\"class\"],[32,32,[30,[36,14],[\"file://\",[35,13]],null],\"inline-image\"]]]],[1,[34,13]],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"    \"],[6,[37,2],null,[[\"accent\",\"onClick\"],[true,[30,[36,1],[[32,0],\"showImage\"],null]]],[[\"default\"],[{\"statements\":[[1,[30,[36,0],[\"button.ok\"],null]]],\"parameters\":[]}]]],[2,\"\\n\"]],\"parameters\":[1]}]]]],\"parameters\":[]}]]],[2,\"\\n\"],[6,[37,27],[[35,28]],null,[[\"default\"],[{\"statements\":[[2,\"  \"],[1,[30,[36,12],null,[[\"source\",\"folders\",\"importStarted\",\"importFinished\"],[[35,11],[35,10],[30,[36,1],[[32,0],\"handleImportStarted\"],null],[30,[36,1],[[32,0],\"handleImportFinished\"],null]]]]],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"\\n\"],[6,[37,27],[[35,29]],null,[[\"default\"],[{\"statements\":[[6,[37,9],null,[[\"class\",\"onClose\"],[\"flex-77\",[30,[36,1],[[32,0],\"closeDialog\",\"cancel\"],null]]],[[\"default\"],[{\"statements\":[[6,[37,6],null,null,[[\"default\"],[{\"statements\":[[6,[37,5],null,null,[[\"default\"],[{\"statements\":[[2,\"        \"],[10,\"h2\"],[12],[2,\"Mango (Fruit)\"],[13],[2,\"\\n        \"],[10,\"span\"],[14,0,\"flex\"],[12],[13],[2,\"\\n        \"],[6,[37,2],null,[[\"iconButton\",\"onClick\"],[true,[30,[36,1],[[32,0],\"closeDialog\",\"cancel\"],null]]],[[\"default\"],[{\"statements\":[[1,[30,[36,4],null,[[\"icon\"],[\"close\"]]]]],\"parameters\":[]}]]],[2,\"\\n\"]],\"parameters\":[]}]]]],\"parameters\":[]}]]],[6,[37,7],null,null,[[\"default\"],[{\"statements\":[[2,\"      \"],[1,[34,3]],[2,\"\\n\"]],\"parameters\":[]}]]],[6,[37,8],null,[[\"class\"],[\"layout-row\"]],[[\"default\"],[{\"statements\":[[2,\"      \"],[6,[37,2],null,[[\"onClick\"],[[30,[36,1],[[32,0],\"closeDialog\",\"ok\"],null]]],[[\"default\"],[{\"statements\":[[1,[30,[36,0],[\"button.ok\"],null]]],\"parameters\":[]}]]],[2,\"\\n\"]],\"parameters\":[]}]]]],\"parameters\":[]}]]]],\"parameters\":[]}]]],[2,\"\\n\"]],\"hasEval\":false,\"upvars\":[\"t\",\"action\",\"paper-button\",\"setting\",\"paper-icon\",\"paper-toolbar-tools\",\"paper-toolbar\",\"paper-dialog-content\",\"paper-dialog-actions\",\"paper-dialog\",\"folders\",\"importSource\",\"import-photos-dialog\",\"currentProcessing\",\"concat\",\"auto-image\",\"-assert-implicit-component-helper-argument\",\"component\",\"paper-toast\",\"selectedPath\",\"folder-photos\",\"folder-list\",\"path-tree\",\"title-bar\",\"macosxStyle\",\"split-view\",\"showNotification\",\"if\",\"showImportDialog\",\"showPreferenceDialog\"]}",
    "meta": {
      "moduleName": "picasa/pods/index/template.hbs"
    }
  });

  _exports.default = _default;
});
;define("picasa/pods/splash/route", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class SplashRoute extends Ember.Route {}

  _exports.default = SplashRoute;
});
;define("picasa/pods/splash/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "iNjFkuem",
    "block": "{\"symbols\":[],\"statements\":[[1,[30,[36,1],[[30,[36,0],null,null]],null]]],\"hasEval\":false,\"upvars\":[\"-outlet\",\"component\"]}",
    "meta": {
      "moduleName": "picasa/pods/splash/template.hbs"
    }
  });

  _exports.default = _default;
});
;define("picasa/pods/trip/controller", ["exports", "@babel/runtime/helpers/esm/initializerDefineProperty", "@babel/runtime/helpers/esm/defineProperty", "@babel/runtime/helpers/esm/applyDecoratedDescriptor", "@babel/runtime/helpers/esm/initializerWarningHelper", "ember-i18next/mixins/i18n", "picasa/utils/platform", "picasa/constants/event-name"], function (_exports, _initializerDefineProperty2, _defineProperty2, _applyDecoratedDescriptor2, _initializerWarningHelper2, _i18n, _platform, _eventName) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _dec3, _dec4, _class, _descriptor, _descriptor2, _temp;

  const _domain = "https://gotripasa.azurewebsites.net";
  const _clientId = "tripasa-app";
  const _clientSecret = "388D45FA-B36B-4988-BA59-B187D329C207";
  const _redirectUri = "https://tripasa/callback";
  const TokenUri = `${_domain}/connect/token`;
  const AuthorizeUri = `${_domain}/connect/authorize`;
  const config = {
    clientId: _clientId,
    clientSecret: _clientSecret,
    authorizationUrl: AuthorizeUri,
    tokenUrl: TokenUri,
    useBasicAuthorizationHeader: false,
    redirectUri: _redirectUri //'http://localhost'

  };
  const options = {};
  let TripController = (_dec = Ember.inject.service, _dec2 = Ember.inject.service, _dec3 = Ember.computed, _dec4 = Ember._action, (_class = (_temp = class TripController extends Ember.Controller.extend(_i18n.default) {
    constructor(...args) {
      super(...args);
      (0, _initializerDefineProperty2.default)(this, "electronApi", _descriptor, this);
      (0, _initializerDefineProperty2.default)(this, "persistence", _descriptor2, this);
      (0, _defineProperty2.default)(this, "isLogin", false);
    }

    get macosxStyle() {
      return (0, _platform.isMacOSX)() ? "macosx" : "";
    }

    get dialog() {
      return this.electronApi.dialog;
    }

    init() {
      super.init(...arguments);
      this.persistence.on(_eventName.default.AccessTokenReady, () => {
        this.set("isLogin", true);
      });
    }

    handleLogin() {
      this.electronApi.send("tripasa-login-request", {
        config,
        options
      });
    }

  }, _temp), (_descriptor = (0, _applyDecoratedDescriptor2.default)(_class.prototype, "electronApi", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = (0, _applyDecoratedDescriptor2.default)(_class.prototype, "persistence", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), (0, _applyDecoratedDescriptor2.default)(_class.prototype, "macosxStyle", [_dec3], Object.getOwnPropertyDescriptor(_class.prototype, "macosxStyle"), _class.prototype), (0, _applyDecoratedDescriptor2.default)(_class.prototype, "handleLogin", [_dec4], Object.getOwnPropertyDescriptor(_class.prototype, "handleLogin"), _class.prototype)), _class));
  _exports.default = TripController;
});
;define("picasa/pods/trip/route", ["exports", "@babel/runtime/helpers/esm/initializerDefineProperty", "@babel/runtime/helpers/esm/defineProperty", "@babel/runtime/helpers/esm/applyDecoratedDescriptor", "@babel/runtime/helpers/esm/initializerWarningHelper", "ember-redux"], function (_exports, _initializerDefineProperty2, _defineProperty2, _applyDecoratedDescriptor2, _initializerWarningHelper2, _emberRedux) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _class, _descriptor, _descriptor2, _temp;

  const model = function ()
  /*dispatch*/
  {
    // Need a very specific path reading from preferences.
    return this.fileWatcher.getWatchedFolders();
  };

  let TripRoute = (_dec = Ember.inject.service, _dec2 = Ember.inject.service, (_class = (_temp = class TripRoute extends Ember.Route {
    constructor(...args) {
      super(...args);
      (0, _initializerDefineProperty2.default)(this, "fileWatcher", _descriptor, this);
      (0, _initializerDefineProperty2.default)(this, "persistence", _descriptor2, this);
    }

    model() {
      return this.persistence.get("accessToken");
    }

  }, _temp), (_descriptor = (0, _applyDecoratedDescriptor2.default)(_class.prototype, "fileWatcher", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = (0, _applyDecoratedDescriptor2.default)(_class.prototype, "persistence", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));

  var _default = (0, _emberRedux.route)({
    model
  })(TripRoute);

  _exports.default = _default;
});
;define("picasa/pods/trip/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "u5LwLDAj",
    "block": "{\"symbols\":[\"split\"],\"statements\":[[10,\"div\"],[14,0,\"layout-column flex\"],[12],[2,\"\\n  \"],[10,\"div\"],[14,0,\"flex\"],[12],[2,\"\\n    \"],[1,[30,[36,4],null,[[\"title\"],[[30,[36,3],[\"title\"],null]]]]],[2,\"\\n  \"],[13],[2,\"\\n  \"],[10,\"div\"],[15,0,[31,[\"flex split-view-container \",[34,5]]]],[12],[2,\"\\n\"],[6,[37,6],null,[[\"isVertical\"],[true]],[[\"default\"],[{\"statements\":[[6,[37,2],[[30,[36,1],[[32,1,[\"child\"]],\"expected `split.child` to be a contextual component but found a string. Did you mean `(component split.child)`? ('picasa/pods/trip/template.hbs' @ L7:C9) \"],null]],[[\"class\"],[\"left-pane\"]],[[\"default\"],[{\"statements\":[[2,\"        \"],[10,\"div\"],[14,0,\"tree-area\"],[12],[2,\"\\n        \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"      \"],[1,[32,1,[\"sash\"]]],[2,\"\\n\"],[6,[37,2],[[30,[36,1],[[32,1,[\"child\"]],\"expected `split.child` to be a contextual component but found a string. Did you mean `(component split.child)`? ('picasa/pods/trip/template.hbs' @ L12:C9) \"],null]],[[\"class\"],[\"right-pane\"]],[[\"default\"],[{\"statements\":[[2,\"        \"],[11,\"button\"],[4,[38,0],[[32,0],\"handleLogin\"],null],[12],[2,\" Login \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]]],\"parameters\":[1]}]]],[2,\"  \"],[13],[2,\"\\n\"],[13],[2,\"\\n\\n\"]],\"hasEval\":false,\"upvars\":[\"action\",\"-assert-implicit-component-helper-argument\",\"component\",\"t\",\"title-bar\",\"macosxStyle\",\"split-view\"]}",
    "meta": {
      "moduleName": "picasa/pods/trip/template.hbs"
    }
  });

  _exports.default = _default;
});
;define("picasa/reducers/index", ["exports", "redux", "picasa/reducers/watched"], function (_exports, _redux, _watched) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const rootReducer = (0, _redux.combineReducers)({
    watched: _watched.default
  });
  var _default = rootReducer;
  _exports.default = _default;
});
;define("picasa/reducers/watched", ["exports", "picasa/actions/types"], function (_exports, _types) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = watched;
  //const { createSelector } = reselect;
  const initialState = {
    filter: undefined,
    folders: undefined,
    // used in tree view
    folderList: [] // used in folder photo list view.

  };

  function watched(state, action) {
    switch (action.type) {
      case _types.default.ADD_FOLDER_LIST:
        {
          return Object.assign({}, state, {
            folderList: action.payload.folders
          });
        }

      case _types.default.ADD_FOLDERS:
        {
          return Object.assign({}, state, {
            folders: action.payload.folders
          });
        }

      case _types.default.REMOVE_FILES:
        {
          const folderList = state.folderList.slice(0);
          action.payload.files.forEach(file => {
            const index = folderList.findIndex(item => item.cwd == file.root);

            if (index >= 0) {//folder.images.splice(index, 1);
            }
          });
          return Object.assign({}, state, {
            folderList
          });
        }

      case _types.default.ADD_FILES:
        {
          const folderList = state.folderList.slice(0);
          action.payload.files.forEach(file => {
            const folder = folderList.find(item => item.cwd == file.root);

            if (folder) {
              folder.images.push(file);
            } else {
              folderList.push({
                cwd: file.root,
                images: [file]
              });
            }
          });
          return Object.assign({}, state, {
            folderList
          });
        }

      /*
       case types.SHOW_ALL: {
        return Object.assign({}, state, { filter: undefined });
      }
       case types.DELETE_TODO: {
        let todos = omit(state.folders, [action.id]);
        return Object.assign({}, state, { all: todos });
      }
       case types.EDIT_TODO: {
        let todos = mapValues(state.folders, todo => {
          return todo.id === action.id ? defaults({
            text: action.text
          }, todo) : todo;
        });
        return Object.assign({}, state, { all: todos });
      }
       case types.COMPLETE_TODO: {
        let todos = mapValues(state.folders, todo => {
          return todo.id === action.id ? defaults({
            completed: !todo.completed
          }, todo) : todo;
        });
        return Object.assign({}, state, { all: todos });
      }
       case types.ADD_TODO: {
        const id = Object.values(state.folders).reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1;
        let todo = {
          [id]: {
            id: id,
            completed: false,
            text: action.text
          }
        }
        let todos = merge({}, state.folders, todo);
        return Object.assign({}, state, { all: todos });
      }
      */

      default:
        {
          return state || initialState;
        }
    }
  }
  /*
  const all = state => state.todos.folders;
  const filter = state => state.todos.filter;
  
  export const getTodos = createSelector(
    all,
    filter,
    (all, filter) => {
      return omitBy(all, todo => {
        return filter === undefined ? false : filter !== todo.completed;
      });
    }
  );
  
  export const getAllTodosCount = createSelector(all, (all) => Object.values(all).length);
  export const getFilter = createSelector(filter, filter => filter);
  export const getTodosCount = createSelector(getTodos, (todos) => Object.values(todos).length);
  export const getCompletedCount = createSelector(all, (all) => Object.values(all).filter(t => t.completed).length);
  */

});
;define("picasa/router", ["exports", "@babel/runtime/helpers/esm/defineProperty", "picasa/config/environment"], function (_exports, _defineProperty2, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class Router extends Ember.Router {
    constructor(...args) {
      super(...args);
      (0, _defineProperty2.default)(this, "location", _environment.default.locationType);
      (0, _defineProperty2.default)(this, "rootURL", _environment.default.rootURL);
    }

  }

  _exports.default = Router;
  Router.map(function () {
    this.route('splash');
    this.route('trip');
  });
});
;define("picasa/routes/application", ["exports", "picasa/utils/context-menu", "ember-i18next/mixins/i18n"], function (_exports, _contextMenu, _i18n) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend(_i18n.default, {
    windowMenu: Ember.inject.service(),

    beforeModel() {
      return this.i18n.initLibraryAsync().then(() => {
        this.windowMenu.setup();
        (0, _contextMenu.setup)();
      });
    },

    error(e) {
      //handle error
      if (e.code && e.message) {
        this.showErrorPrompt(e.code, e.message);
      }
    }

  });

  _exports.default = _default;
});
;define("picasa/serializers/-default", ["exports", "@ember-data/serializer/json"], function (_exports, _json) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _json.default;
    }
  });
});
;define("picasa/serializers/-json-api", ["exports", "@ember-data/serializer/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _jsonApi.default;
    }
  });
});
;define("picasa/serializers/-rest", ["exports", "@ember-data/serializer/rest"], function (_exports, _rest) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _rest.default;
    }
  });
});
;define("picasa/services/apollo", ["exports", "ember-apollo-client/services/apollo"], function (_exports, _apollo) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _apollo.default;
    }
  });
});
;define("picasa/services/asset-map", ["exports", "ember-theme-changerr/services/asset-map"], function (_exports, _assetMap) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _assetMap.default;
  _exports.default = _default;
});
;define("picasa/services/auto-scale-image", ["exports", "ember-auto-image/services/auto-scale-image"], function (_exports, _autoScaleImage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _autoScaleImage.default;
    }
  });
});
;define("picasa/services/constants", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Service.extend({
    sniffer: Ember.inject.service('sniffer'),
    webkit: Ember.computed(function () {
      return /webkit/i.test(this.get('sniffer.vendorPrefix'));
    }),

    vendorProperty(name) {
      return this.get('webkit') ? `-webkit-${name.charAt(0)}${name.substring(1)}` : name;
    },

    CSS: Ember.computed('webkit', function () {
      let webkit = this.get('webkit');
      return {
        /* Constants */
        TRANSITIONEND: `transitionend${webkit ? ' webkitTransitionEnd' : ''}`,
        ANIMATIONEND: `animationend${webkit ? ' webkitAnimationEnd' : ''}`,
        TRANSFORM: this.vendorProperty('transform'),
        TRANSFORM_ORIGIN: this.vendorProperty('transformOrigin'),
        TRANSITION: this.vendorProperty('transition'),
        TRANSITION_DURATION: this.vendorProperty('transitionDuration'),
        ANIMATION_PLAY_STATE: this.vendorProperty('animationPlayState'),
        ANIMATION_DURATION: this.vendorProperty('animationDuration'),
        ANIMATION_NAME: this.vendorProperty('animationName'),
        ANIMATION_TIMING: this.vendorProperty('animationTimingFunction'),
        ANIMATION_DIRECTION: this.vendorProperty('animationDirection')
      };
    }),
    KEYCODE: Ember.Object.create({
      ENTER: 13,
      ESCAPE: 27,
      SPACE: 32,
      LEFT_ARROW: 37,
      UP_ARROW: 38,
      RIGHT_ARROW: 39,
      DOWN_ARROW: 40,
      TAB: 9
    }),
    // eslint-disable-next-line ember/avoid-leaking-state-in-ember-objects
    MEDIA: {
      'xs': '(max-width: 599px)',
      'gt-xs': '(min-width: 600px)',
      'sm': '(min-width: 600px) and (max-width: 959px)',
      'gt-sm': '(min-width: 960px)',
      'md': '(min-width: 960px) and (max-width: 1279px)',
      'gt-md': '(min-width: 1280px)',
      'lg': '(min-width: 1280px) and (max-width: 1919px)',
      'gt-lg': '(min-width: 1920px)',
      'xl': '(min-width: 1920px)',
      'print': 'print'
    },
    // eslint-disable-next-line ember/avoid-leaking-state-in-ember-objects
    MEDIA_PRIORITY: ['xl', 'gt-lg', 'lg', 'gt-md', 'md', 'gt-sm', 'sm', 'gt-xs', 'xs', 'print']
  });

  _exports.default = _default;
});
;define("picasa/services/fetch-cache", ["exports", "lodash/lang", "picasa/utils/logger"], function (_exports, _lang, _logger) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Service.extend({
    imageScale: Ember.inject.service(),
    photoStorage: Ember.inject.service(),
    preferenceManager: Ember.inject.service(),

    checkCache(image, skipExistCheck) {
      if (!(0, _lang.isEmpty)(image.root) && !(0, _lang.isEmpty)(image.name)) {
        const {
          fullPath,
          uniqueName
        } = image;
        return this.preferenceManager.getCachedPath().then(cached => `${cached}/${uniqueName}`).then(thumbnail => {
          return this.photoStorage.checkPhotoCached(uniqueName).then(cached => {
            if (cached != null || skipExistCheck) {
              return thumbnail;
            } else {
              return this.cacheImage(uniqueName, thumbnail, fullPath);
            }
          });
        }).then(thumbnail => {
          return { ...image,
            thumbnail
          };
        });
      } else {
        return Ember.RSVP.resolve(image);
      }
    },

    thumbnailExist(thumbnail) {
      const resizer = this.imageScale;
      return resizer.fileExist(thumbnail);
    },

    cacheImage(uniqueName, thumbnail, path) {
      (0, _logger.info)(`caching => ${thumbnail} : ${path}`);
      return this.thumbnailExist(thumbnail).then(exist => {
        return this.updateCacheRecord(exist, uniqueName, thumbnail, path);
      }).then(() => thumbnail);
    },

    updateCacheRecord(exist, uniqueName, thumbnail, path) {
      return exist ? this.photoStorage.setPhotoCached(uniqueName, thumbnail) : this.createThumbnail(path, thumbnail).then(() => this.photoStorage.setPhotoCached(uniqueName, thumbnail));
    },

    createThumbnail(path, thumbnail) {
      return new Promise(resolve => {
        this.imageScale.get("createThumbnail").perform(path, thumbnail, resolve);
      });
    }

  });

  _exports.default = _default;
});
;define("picasa/services/file-watcher", ["exports", "picasa/utils/fs-watch", "lodash/array", "picasa/mixins/preference", "ember-precondition/utils/precondition", "picasa/utils/folder-reader", "picasa/utils/logger"], function (_exports, _fsWatch, _array, _preference, _precondition, _folderReader, _logger) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /**
   * Watch folders change
   */
  var _default = Ember.Service.extend(Ember.Evented, _preference.default, {
    init() {
      this._super(...arguments);

      this.getPreferenceService().on("folderUpdated", folders => this.adjustWatchedFolder(folders));
    },

    getThumbnailCachePath() {
      return this.getPreferenceService().getCachedPath();
    },

    getWatchedFolders() {
      return this.getThumbnailCachePath().then(() => this.getPreferenceService().getWatchedFolders()).then(paths => {
        _precondition.default.checkNotEmpty(paths);

        return paths;
      }).catch(() => {
        const path = (0, _folderReader.specialFolder)(_folderReader.FOLDERS.DESKTOP);
        return this.getPreferenceService().addFolder(path, true).then(() => {
          return [path];
        });
      });
    },

    adjustWatchedFolder(folders) {
      const watcher = this.watcher;

      if (watcher) {
        const current = watcher.getWatched();
        const removed = (0, _array.difference)(current, folders);
        const added = (0, _array.difference)(folders, current);
        watcher.unwatch(removed);
        watcher.addObserver(added);
      }
    },

    sendEvent(name, param, log) {
      if (name === "ready") {
        this.set("ready", true);
        return;
      }

      if (this.ready) {
        (0, _logger.info)(...log);
        this.trigger(name, param);
      }
    },

    startWatcher() {
      this.preferenceManager.getWatchedFolders().then(paths => {
        const watcher = (0, _fsWatch.default)(paths, {
          ignored: /[/\\]\./,
          persistent: true
        }); // Declare the listeners of the watcher

        watcher.on('add', path => {
          this.sendEvent("added", {
            isFile: true,
            path
          }, ["File", path, "has been added"]);
        }).on('addDir', path => {
          this.sendEvent("added", {
            isFile: false,
            path
          }, ["Directory", path, "has been added"]);
        }).on('change', path => {
          this.sendEvent("changed", {
            isFile: true,
            path
          }, ["File", path, "has been changed"]);
        }).on('unlink', path => {
          this.sendEvent("unlink", {
            isFile: true,
            path
          }, ["File", path, "has been removed"]);
        }).on('unlinkDir', path => {
          this.sendEvent("unlink", {
            isFile: false,
            path
          }, ["Directory", path, "has been removed"]);
        }).on('error', error => {
          this.sendEvent("error", {
            error
          }, ["Error", error, "has been happened"]);
        }).on('ready', () => {
          this.sendEvent("ready", {}, ["Ready", 'From here can you check for real changes, the initial scan has been completed.']);
        }).on('raw', (event, path, details) => {
          // This event should be triggered every time something happens.
          this.sendEvent("raw", {
            event,
            path,
            details
          }, ['Raw event info:', event, path, details]);
        });
      });
    }

  });

  _exports.default = _default;
});
;define("picasa/services/head-data", ["exports", "ember-cli-head/services/head-data"], function (_exports, _headData) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _headData.default;
    }
  });
});
;define("picasa/services/i18n", ["exports", "ember-i18next/services/i18n"], function (_exports, _i18n) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _i18n.default;
  _exports.default = _default;
});
;define("picasa/services/image-scale", ["exports", "picasa/utils/folder-reader", "picasa/utils/logger", "ember-concurrency"], function (_exports, _folderReader, _logger, _emberConcurrency) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const {
    ipcRenderer
  } = requireNode('electron');
  const EVENT_THUMBNAIL_CREATED = "thumbnailCreated";

  var _default = Ember.Service.extend(Ember.Evented, {
    init() {
      this._super(...arguments); // wait for event, ready.


      ipcRenderer.on('picasa-thumbnail-ready', (event, arg) => {
        (0, _logger.info)(event, arg);
        this.trigger(EVENT_THUMBNAIL_CREATED);
      });
    },

    uniqueName(path) {
      return (0, _folderReader.uniqueName)(path);
    },

    fileExist(file) {
      return new Promise(resolve => {
        const fs = requireNode('fs');
        fs.access(file, fs.constants.F_OK, err => {
          resolve(!err);
        });
      });
    },

    createThumbnail: (0, _emberConcurrency.task)(function* (path, thumbnail, resolve) {
      ipcRenderer.send("picasa-create-thumbnail", {
        path,
        thumbnail,
        width: 100,
        height: 100,
        withoutEnlargement: true
      });
      yield (0, _emberConcurrency.waitForEvent)(this, EVENT_THUMBNAIL_CREATED);
      resolve && resolve(thumbnail);
    }).maxConcurrency(1).enqueue()
  });

  _exports.default = _default;
});
;define("picasa/services/paper-sidenav", ["exports", "ember-paper/services/paper-sidenav"], function (_exports, _paperSidenav) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _paperSidenav.default;
    }
  });
});
;define("picasa/services/paper-theme", ["exports", "ember-paper/services/paper-theme"], function (_exports, _paperTheme) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _paperTheme.default;
    }
  });
});
;define("picasa/services/paper-toaster", ["exports", "ember-paper/services/paper-toaster"], function (_exports, _paperToaster) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _paperToaster.default;
    }
  });
});
;define("picasa/services/persistence", ["exports", "@babel/runtime/helpers/esm/initializerDefineProperty", "@babel/runtime/helpers/esm/defineProperty", "@babel/runtime/helpers/esm/applyDecoratedDescriptor", "@babel/runtime/helpers/esm/initializerWarningHelper", "picasa/constants/event-name"], function (_exports, _initializerDefineProperty2, _defineProperty2, _applyDecoratedDescriptor2, _initializerWarningHelper2, _eventName) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _class, _descriptor, _temp;

  let PersistenceService = (_dec = Ember.inject.service, (_class = (_temp = class PersistenceService extends Ember.Service.extend(Ember.Evented) {
    constructor(...args) {
      super(...args);
      (0, _initializerDefineProperty2.default)(this, "electronApi", _descriptor, this);
    }

    init() {
      super.init(...arguments);
      this.electronApi.ipc.on('tripasa-access-token', (event, arg) => {
        this.set("accessToken", arg).then(token => {
          this.trigger(_eventName.default.AccessTokenReady, token);
        });
      });
    }

    getService() {
      return requireNode('electron-json-storage');
    }

    get(key) {
      return new Ember.RSVP.Promise((resolve, reject) => {
        this.getService().get(key, function (error, data) {
          if (error) {
            reject(error);
          } else {
            resolve(data);
          }
        });
      });
    }

    set(key, value) {
      return new Ember.RSVP.Promise((resolve, reject) => {
        this.getService().set(key, value, error => {
          if (error) {
            reject(error);
          } else {
            resolve(value);
          }
        });
      });
    }

  }, _temp), (_descriptor = (0, _applyDecoratedDescriptor2.default)(_class.prototype, "electronApi", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = PersistenceService;
});
;define("picasa/services/photo-import", ["exports", "picasa/mixins/preference", "rxjs", "rxjs/operators", "moment"], function (_exports, _preference, _rxjs, _operators, _moment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const fs = requireNode("fs-extra");
  const ExifReader = requireNode('exifreader');
  const klaw = requireNode('klaw');
  const path = requireNode("path");

  function fullPath(filepath, options) {
    const _options = options || {};

    const root = _options.root;
    return root ? path.join(root, filepath) : filepath;
  }

  var _default = Ember.Service.extend(_preference.default, {
    import(source) {
      return (0, _rxjs.from)(this.getPreferenceService().getWatchedFolders()).pipe((0, _operators.map)(target => target[0]), (0, _operators.mergeMap)(folder => this.scanFolder(source, folder)), (0, _operators.filter)(action => !action.notImage), (0, _operators.mergeMap)(action => this.ensureDir(action)), (0, _operators.concatMap)(action => this.copyFile(action)) // copy file should be concatMap.
      );
    },

    fileExistsSync(filepath, options) {
      const _filepath = filepath || '';

      const _options = options || {};

      try {
        return fs.statSync(fullPath(_filepath, _options)).isFile();
      } catch (e) {
        // Check exception. If ENOENT - no such file or directory ok, file doesn't exist.
        // Otherwise something else went wrong, we don't have rights to access the file, ...
        if (e.code != 'ENOENT') {
          throw e;
        }

        return false;
      }
    },

    ensureDir(action) {
      action.targetDir = `${action.target}/${action.targetName}`;
      const promise = new Promise(resolve => {
        fs.ensureDir(action.targetDir, () => {
          resolve(action);
        });
      });
      return (0, _rxjs.from)(promise);
    },

    copyFile(action) {
      // copy file to target as 年/月/日
      action.targetFileName = path.basename(action.file);
      action.targetFullPath = `${action.targetDir}/${action.targetFileName}`;
      let count = 1;
      let exist = this.fileExistsSync(action.targetFullPath);

      while (exist) {
        const parts = path.parse(action.targetFullPath);
        action.targetFullPath = `${parts.dir}/${parts.name}_${count}${parts.ext}`;
        exist = this.fileExistsSync(action.targetFullPath);
        count++;
      } // fs.copyFile


      const promise = new Promise((resolve, reject) => {
        fs.copy(action.file, action.targetFullPath, err => {
          if (err) {
            reject(err);
            return;
          }

          resolve(action);
        }); // copies file
      });
      return (0, _rxjs.from)(promise);
    },

    scanCurrentFolder(source, depth) {
      return _rxjs.Observable.create(function (observer) {
        klaw(source, {
          depthLimit: depth || 1
        }).on('data', item => {
          if (item.stats.isDirectory() && item.path != source) {
            // eslint-disable-next-line ember/no-observers
            observer.next({
              file: item.path,
              name: path.basename(item.path),
              created: item.stats.birthtime
            });
          }
        }).on('end', () => {
          // eslint-disable-next-line ember/no-observers
          observer.complete();
        });
      });
    },

    scanFolder(source, target) {
      return _rxjs.Observable.create(function (observer) {
        klaw(source).on('data', item => {
          if (!item.stats.isDirectory()) {
            // eslint-disable-next-line ember/no-observers
            observer.next({
              file: item.path,
              name: path.basename(item.path),
              created: item.stats.birthtime,
              target
            });
          }
        }).on('end', () => {
          // eslint-disable-next-line ember/no-observers
          observer.complete();
        });
      }).pipe((0, _operators.mergeMap)(action => this.resolveExifDate(action)));
    },

    resolveExifDate(action) {
      const promise = this.checkExifDate(action.file).then(date => {
        if (date && date.value[0]) {
          const created = (0, _moment.default)(date.value[0], 'YYYY:MM:DD hh:mm:ss');
          action.created = created.toDate();
          action.targetName = created.format("YYYY/YYYYMMDD");
        } else {
          const created = (0, _moment.default)(action.created);
          action.created = created.toDate();
          action.targetName = created.format("YYYY/YYYYMMDD");
        }

        return action;
      });
      return (0, _rxjs.from)(promise).pipe((0, _operators.catchError)(() => {
        action.notImage = true;
        return (0, _rxjs.of)(action);
      }));
    },

    isImage(path) {
      const readChunk = requireNode('read-chunk');
      const imageType = requireNode('image-type');
      const buffer = readChunk.sync(path, 0, 12);
      imageType(buffer);
      return buffer;
    },

    checkExifDate(filePath) {
      return new Promise((resolve, reject) => {
        if (this.isImage(filePath)) {
          fs.readFile(filePath, function (error, data) {
            if (error) {
              reject(error);
            } else {
              try {
                const tags = ExifReader.load(data.buffer); // The MakerNote tag can be really large. Remove it to lower memory
                // usage if you're parsing a lot of files and saving the tags.

                delete tags['MakerNote'];
                resolve(tags["DateTimeDigitized"]);
              } catch (error) {
                // Most time. it's not a image file which have exif.
                resolve();
              }
            }
          });
        } else {
          reject(new Error("not supported image"));
        }
      });
    }

  });

  _exports.default = _default;
});
;define("picasa/services/photo-storage", ["exports", "picasa/utils/logger"], function (_exports, _logger) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  const Realm = require("realm"); // Define your models and their properties


  const PhotoCacheSchema = {
    name: 'PhotoCache',
    properties: {
      uniqueName: 'string',
      cached: 'bool',
      location: "string"
    }
  };
  const NAME = "PhotoCache";

  var _default = Ember.Service.extend({
    checkPhotoCached(uniqueName) {
      return Realm.open({
        schema: [PhotoCacheSchema]
      }).then(realm => {
        const items = realm.objects(NAME).filtered(`uniqueName = "${uniqueName}"`);

        if (items.length > 0) {
          return items;
        } else {
          return null;
        }
      }).catch(err => {
        (0, _logger.error)(err);
        return null;
      });
    },

    setPhotoCached(uniqueName, location) {
      return Realm.open({
        schema: [PhotoCacheSchema]
      }).then(realm => {
        realm.write(() => {
          realm.create(NAME, {
            uniqueName: uniqueName,
            cached: true,
            location: location
          });
        });
      }).catch(err => {
        console.log(err);
      });
    }

  });

  _exports.default = _default;
});
;define("picasa/services/preference-manager", ["exports", "picasa/mixins/persistence", "picasa/constants/preference-entry", "ember-precondition/utils/precondition", "lodash/array", "lodash/lang", "picasa/utils/folder-reader", "picasa/constants/event-name"], function (_exports, _persistence, _preferenceEntry, _precondition, _array, _lang, _folderReader, _eventName) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const APPDATA_CACHE_THUMBNAIL = "/ThePicasa/cache/thumbnail";

  var _default = Ember.Service.extend(_persistence.default, Ember.Evented, {
    createPath(path) {
      return new Promise((resolve, reject) => {
        const mkdirp = require("mkdirp");

        mkdirp(path, err => {
          if (err) {
            reject(err);
          } else {
            resolve(path);
          }
        });
      });
    },

    getCachedPath() {
      const cachedPath = this.get(_preferenceEntry.default.CACHED_PATH);
      return Ember.RSVP.resolve().then(() => {
        if ((0, _lang.isEmpty)(cachedPath)) {
          return this.getPersistenceService().get(_preferenceEntry.default.CACHED_PATH);
        } else {
          return cachedPath;
        }
      }).then(path => {
        if ((0, _lang.isEmpty)(path)) {
          const cachedPath = `${(0, _folderReader.specialFolder)(_folderReader.FOLDERS.APPDATA)}${APPDATA_CACHE_THUMBNAIL}`;
          this.set(_preferenceEntry.default.CACHED_PATH, cachedPath);
          return this.createPath(cachedPath);
        } else {
          this.set(_preferenceEntry.default.CACHED_PATH, path);
          return path;
        }
      });
    },

    /**
     * Set watched folder, overwrite exist.
     * @param {Array} folders
     */
    setWatchedFolder(folders) {
      _precondition.default.checkArray(folders);

      return Ember.RSVP.resolve().then(() => {
        this.getPersistenceService().set(_preferenceEntry.default.WATCH_PATHS, folders);
        this.trigger(_eventName.default.FolderUpdated, folders);
      });
    },

    /**
     * @return managed folder.
     */
    getWatchedFolders() {
      return this.getPersistenceService().get(_preferenceEntry.default.WATCH_PATHS).then(paths => {
        return _precondition.default.checkArray(paths);
      }).catch(() => {
        return []; // if error, return [];
      });
    },

    /**
     * Add folder to watched folders
     * @param {String} folder
     */
    addFolder(folder, clear) {
      _precondition.default.checkString(folder);

      return this.getWatchedFolders().then(paths => {
        paths = paths && !clear || Ember.A();

        if (!paths.includes(folder)) {
          paths.push(folder);
          this.setWatchedFolder(paths);
        }
      });
    },

    addFolders(folders) {
      _precondition.default.checkArray(folders);

      return this.getWatchedFolders().then(paths => {
        const added = (0, _array.difference)(folders, paths);
        return paths.concat(added);
      }).then(paths => {
        this.setWatchedFolder(paths);
      });
    }

  });

  _exports.default = _default;
});
;define("picasa/services/redux", ["exports", "ember-redux/services/redux", "picasa/reducers/index", "picasa/enhancers/index", "picasa/middleware/index"], function (_exports, _redux, _index, _index2, _index3) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = _redux.default.extend({
    reducers: _index.default,
    enhancers: _index2.default,
    middlewares: _index3.default
  });

  _exports.default = _default;
});
;define("picasa/services/resize", ["exports", "ember-resize/services/resize"], function (_exports, _resize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _resize.default;
    }
  });
});
;define("picasa/services/sniffer", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  let isString = function (value) {
    return typeof value === 'string';
  };

  let lowercase = function (string) {
    return isString(string) ? string.toLowerCase() : string;
  };

  let toInt = function (str) {
    return parseInt(str, 10);
  };

  var _default = Ember.Service.extend({
    vendorPrefix: '',
    transitions: false,
    animations: false,
    _document: null,
    _window: null,
    android: Ember.computed('', function () {
      return toInt((/android (\d+)/.exec(lowercase((this.get('_window').navigator || {}).userAgent)) || [])[1]);
    }),

    init() {
      this._super(...arguments);

      if (typeof FastBoot !== 'undefined') {
        return;
      }

      let _document = document;
      let _window = window;
      this.setProperties({
        _document,
        _window
      });
      let bodyStyle = _document.body && _document.body.style;
      let vendorPrefix, match;
      let vendorRegex = /^(Moz|webkit|ms)(?=[A-Z])/;
      let transitions = false;
      let animations = false;

      if (bodyStyle) {
        for (let prop in bodyStyle) {
          match = vendorRegex.exec(prop);

          if (match) {
            vendorPrefix = match[0];
            vendorPrefix = vendorPrefix.substr(0, 1).toUpperCase() + vendorPrefix.substr(1);
            break;
          }
        }

        if (!vendorPrefix) {
          vendorPrefix = 'WebkitOpacity' in bodyStyle && 'webkit';
        }

        transitions = !!('transition' in bodyStyle || `${vendorPrefix}Transition` in bodyStyle);
        animations = !!('animation' in bodyStyle || `${vendorPrefix}Animation` in bodyStyle);

        if (this.get('android') && (!transitions || !animations)) {
          transitions = isString(bodyStyle.webkitTransition);
          animations = isString(bodyStyle.webkitAnimation);
        }
      }

      this.set('transitions', transitions);
      this.set('animations', animations);
      this.set('vendorPrefix', vendorPrefix);
    }

  });

  _exports.default = _default;
});
;define("picasa/services/store", ["exports", "ember-data/store"], function (_exports, _store) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _store.default;
    }
  });
});
;define("picasa/services/text-measurer", ["exports", "ember-text-measurer/services/text-measurer"], function (_exports, _textMeasurer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _textMeasurer.default;
    }
  });
});
;define("picasa/services/theme-changer", ["exports", "ember-theme-changerr/services/theme-changer"], function (_exports, _themeChanger) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _themeChanger.default;
  _exports.default = _default;
});
;define("picasa/services/window-menu", ["exports", "picasa/utils/window-menu", "lodash/object", "ember-i18next/mixins/i18n", "picasa/constants/event-name", "picasa/utils/logger"], function (_exports, _windowMenu, _object, _i18n, _eventName, _logger) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Service.extend(Ember.Evented, _i18n.default, {
    preferencesCallback: undefined,
    blogs: undefined,

    /**
     * The menu can be easily extended by adding an injection to the
     * service's injections property:
     *
     * {
     *   name: {string}
     *   injection: function (template) { return template }
     * }
     */
    injections: undefined,

    /**
     * Schedules (debounced) the setup of the application menu
     */
    setup() {
      Ember.run.debounce(this, this._prepareMenu, 150);
    },

    /**
     * Adds an injection to the app's menu
     *
     * @param {any} params
     * @param {string} params.menuName - Name of the menu to add the item to
     * @param {string} params.label - Label of the menu item
     * @param {string} params.name - Name of the menu item
     * @param {function} params.click - Click callback for the menu item
     * @param {boolean} params.addSeperator - Should a seperator be added?
     * @param {number} params.position - Position of the item
     */
    injectMenuItem(params = {}) {
      const predefined = {
        menuName: 'Ghost',
        click: () => {},
        name: 'default-name',
        label: 'Default label',
        accelerator: undefined,
        addSeperator: false,
        position: undefined
      };
      const options = (0, _object.defaults)(params, predefined);
      const injections = this.injections;
      const hasInjection = injections.find(item => item.name === options.name);
      const injection = {
        name: options.name,
        injection: template => {
          const menu = template.find(item => item.label === options.menuName);
          const newItem = {
            label: options.label,
            accelerator: options.accelerator,
            click: options.click
          }; // Insert item into the menu

          if (menu && menu.submenu) {
            const sepPosition = options.position - 1 || menu.submenu.length;
            const insertPosition = options.position || menu.submenu.length || 0;

            if (options.addSeperator) {
              menu.submenu.insertAt(sepPosition, {
                type: 'separator'
              });
            }

            menu.submenu.insertAt(insertPosition, newItem);
          }

          return template;
        }
      };

      if (!hasInjection) {
        injections.pushObject(injection);
        this.set('injections', injections);
        this.setup();
      }
    },

    /**
     * Adds blogs to the app's window menu
     *
     * @param preferencesCallback - The preferences callback
     * @param blogs - An array of blogs to add to the menu.
     */
    addQuickSwitchItemsToMenu(preferencesCallback, blogs) {
      if (blogs && preferencesCallback) {
        this.set('preferencesCallback', preferencesCallback);
        this.set('blogs', blogs);
        Ember.run.later(this, 'setup');
      }
    },

    /**
     * Setups the window menu for the application
     */
    _prepareMenu() {
      const {
        remote
      } = requireNode('electron');
      const {
        Menu
      } = remote;
      const template = (0, _windowMenu.setup)(this.t.bind(this));

      this._injectBlogs(template);

      this._injectPreferences(template);

      this._injectShortcuts(template);

      this._processInjections(template);

      Menu.setApplicationMenu(Menu.buildFromTemplate(template));
    },

    dispatchEvent(name, item, focusedWindow) {
      (0, _logger.info)(`${name} event is fired.`);
      this.trigger(name, item, focusedWindow);
    },

    /**
     * Adds webview-specific shortcuts to the menu.
     *
     * @param template - Electron menu template
     * @returns template - Electron menu template
     */
    _injectShortcuts(template) {
      if (template && template.forEach) {
        template.forEach(item => {
          if (item && item.label && item.label === 'View') {
            item.submenu.insertAt(2, {
              type: 'separator'
            });
            item.submenu.insertAt(2, {
              label: 'Labs',
              accelerator: 'CmdOrCtrl+Alt+L',
              name: 'open-labs',
              click: (item, focusedWindow) => this.dispatchEvent("openSettingsLabs", item, focusedWindow)
            });
            item.submenu.insertAt(2, {
              label: 'Apps',
              accelerator: 'CmdOrCtrl+Alt+A',
              name: 'open-apps',
              click: (item, focusedWindow) => this.dispatchEvent("openSettingsApps", item, focusedWindow)
            });
            item.submenu.insertAt(2, {
              label: 'Code Injection',
              accelerator: 'CmdOrCtrl+Alt+C+I',
              name: 'open-code-injection',
              click: (item, focusedWindow) => this.dispatchEvent("openSettingsCodeInjection", item, focusedWindow)
            });
            item.submenu.insertAt(2, {
              label: 'Tags',
              accelerator: 'CmdOrCtrl+Alt+T',
              name: 'open-tags',
              click: (item, focusedWindow) => this.dispatchEvent("openSettingsTags", item, focusedWindow)
            });
            item.submenu.insertAt(2, {
              label: 'Navigation',
              accelerator: 'CmdOrCtrl+Alt+N',
              name: 'open-navigation',
              click: (item, focusedWindow) => this.dispatchEvent("openSettingsNavigation", item, focusedWindow)
            });
            item.submenu.insertAt(2, {
              label: 'General',
              accelerator: 'CmdOrCtrl+Alt+G',
              name: 'open-general',
              click: (item, focusedWindow) => this.dispatchEvent("openSettingsGeneral", item, focusedWindow)
            });
            item.submenu.insertAt(2, {
              type: 'separator'
            });
            item.submenu.insertAt(2, {
              label: 'Team',
              accelerator: 'CmdOrCtrl+Alt+T',
              name: 'open-team',
              click: (item, focusedWindow) => this.dispatchEvent("openTeam", item, focusedWindow)
            });
            item.submenu.insertAt(2, {
              label: 'Content',
              accelerator: 'CmdOrCtrl+Alt+L',
              name: 'open-content',
              click: (item, focusedWindow) => this.dispatchEvent("openContent", item, focusedWindow)
            });
            item.submenu.insertAt(2, {
              label: 'New Post',
              accelerator: 'CmdOrCtrl+Alt+C',
              name: 'open-new-post',
              click: (item, focusedWindow) => this.dispatchEvent("openNewPost", item, focusedWindow)
            });
            item.submenu.insertAt(2, {
              type: 'separator'
            });
          }

          if (item && item.label && item.label === 'Edit') {
            item.submenu.insertAt(2, {
              label: 'Open Preview',
              accelerator: 'CmdOrCtrl+P',
              name: 'open-preview',
              click: (item, focusedWindow) => this.dispatchEvent(_eventName.default.OpenPreview, item, focusedWindow)
            });
          }

          if (item && item.label && item.label === this.t('folder.management.label')) {
            item.submenu.insertAt(0, {
              label: this.t("folder.management.add"),
              accelerator: 'CmdOrCtrl+D',
              name: 'add-folder',
              click: (item, focusedWindow) => this.dispatchEvent(_eventName.default.OpenFolderSelection, item, focusedWindow)
            });
            item.submenu.insertAt(1, {
              label: this.t("folder.management.import"),
              accelerator: 'CmdOrCtrl+D',
              name: 'import-folder',
              click: (item, focusedWindow) => this.dispatchEvent(_eventName.default.ImportFromFolder, item, focusedWindow)
            });
          }
        });
      }

      return template;
    },

    /**
     * If blogs are present, they are injected into the menu.
     *
     * @param template - Electron menu template
     * @returns template - Electron menu template
     */
    _injectBlogs(template) {
      const blogs = this.blogs;

      if (template && template.forEach && blogs) {
        template.forEach(item => {
          if (item && item.label && item.label === 'View') {
            item.submenu = item.submenu.concat(blogs);
          }
        });
      }

      return template;
    },

    /**
     * The electron app context doesn't have access to the running ghost app,
     * so application-specific shortcuts must be injected.
     *
     * Here, we add a click handler to open the preferences pane within the app.
     *
     * @param template - Electron menu template
     * @returns template - Electron menu template.
     */
    _injectPreferences(template) {
      if (template && template.forEach) {
        template.forEach(menuItem => {
          if (menuItem && menuItem.label && menuItem.label === 'The Picasa' || menuItem.label === 'Electron' || menuItem.label === this.t("file.label")) {
            menuItem.submenu.forEach(subMenuItem => {
              if (subMenuItem && subMenuItem.label && subMenuItem.label === this.t("preferences.label")) {
                subMenuItem.click = (item, focusedWindow) => this.dispatchEvent(_eventName.default.OpenPreferences, item, focusedWindow);
              }
            });
          }
        });
      }

      return template;
    },

    /**
     * The menu can be easily extended by adding an injection to the
     * service's injections property:
     *
     * {
     *   name: {string}
     *   injection: function (template) { return template }
     * }
     *
     * @param {Object} template - Electron Menu template
     * @returns {Object} template - Electron Menu template
     */
    _processInjections(template) {
      const injections = this.injections;
      let processedTemplate = template;

      if (injections && injections.length > 0) {
        injections.forEach(item => {
          if (item.injection && typeof item.injection === 'function') {
            processedTemplate = item.injection(processedTemplate);
          }
        });
      }

      return processedTemplate;
    }

  });

  _exports.default = _default;
});
;define("picasa/template/head", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "UPMZv1dJ",
    "block": "{\"symbols\":[],\"statements\":[[10,\"link\"],[14,\"rel\",\"stylesheet\"],[15,6,[31,[[34,0,[\"themeHref\"]]]]],[12],[13],[2,\"\\n\"]],\"hasEval\":false,\"upvars\":[\"model\"]}",
    "meta": {
      "moduleName": "picasa/template/head.hbs"
    }
  });

  _exports.default = _default;
});
;define("picasa/templates/application", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "FRzDo7qv",
    "block": "{\"symbols\":[\"toggleChildren\"],\"statements\":[[8,\"head-layout\",[],[[],[]],null],[2,\"\\n\"],[8,\"paper-sidenav-container\",[],[[\"@class\"],[\"inner-sidenav\"]],[[\"default\"],[{\"statements\":[[2,\"\\n  \"],[8,\"paper-sidenav\",[],[[\"@class\",\"@name\",\"@position\",\"@open\",\"@lockedOpen\",\"@onToggle\"],[\"md-whiteframe-z2\",\"left\",\"left\",[34,0],false,[30,[36,2],[[32,0],[30,[36,1],[[35,0]],null]],null]]],[[\"default\"],[{\"statements\":[[2,\"\\n    \"],[8,\"paper-toolbar\",[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n      \"],[8,\"paper-toolbar-tools\",[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"Right Sidenav\"]],\"parameters\":[]}]]],[2,\"\\n    \"]],\"parameters\":[]}]]],[2,\"\\n    \"],[8,\"paper-content\",[],[[\"@padding\"],[true]],[[\"default\"],[{\"statements\":[[2,\"\\n      \"],[10,\"ul\"],[12],[2,\"\\n        \"],[10,\"li\"],[12],[8,\"link-to\",[],[[\"@route\"],[\"index\"]],[[\"default\"],[{\"statements\":[[2,\"My Picasa \"]],\"parameters\":[]}]]],[13],[2,\"\\n        \"],[10,\"li\"],[12],[8,\"link-to\",[],[[\"@route\"],[\"trip\"]],[[\"default\"],[{\"statements\":[[2,\"Go! Tripasa \"]],\"parameters\":[]}]]],[13],[2,\"\\n      \"],[13],[2,\"\\n    \"]],\"parameters\":[]}]]],[2,\"\\n  \"]],\"parameters\":[]}]]],[2,\"\\n  \"],[8,\"paper-card-content\",[],[[\"@class\"],[\"flex\"]],[[\"default\"],[{\"statements\":[[2,\"\\n    \"],[1,[30,[36,4],[[30,[36,3],null,null]],null]],[2,\"\\n    \"],[8,\"floating-mobile-buttons\",[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n      \"],[8,\"floating-mobile-child-buttons\",[],[[\"@label\"],[\"Add Item\"]],[[\"default\"],[{\"statements\":[[2,\"\\n        \"],[11,\"a\"],[24,6,\"\"],[4,[38,2],[[32,0],[32,1]],null],[12],[10,\"i\"],[14,0,\"fa fa-user\"],[14,\"aria-hidden\",\"true\"],[12],[13],[13],[2,\"\\n      \"]],\"parameters\":[]}]]],[2,\"\\n      \"],[8,\"floating-mobile-child-buttons\",[],[[\"@label\"],[\"Remove Item\"]],[[\"default\"],[{\"statements\":[[2,\"\\n        \"],[10,\"a\"],[14,6,\"\"],[12],[10,\"i\"],[14,0,\"fa fa-trash-o\"],[14,\"aria-hidden\",\"true\"],[12],[13],[13],[2,\"\\n      \"]],\"parameters\":[]}]]],[2,\"\\n      \"],[8,\"floating-mobile-child-buttons\",[],[[\"@label\"],[\"Edit Item\"]],[[\"default\"],[{\"statements\":[[2,\"\\n        \"],[10,\"a\"],[14,6,\"\"],[12],[10,\"i\"],[14,0,\"fa fa-pencil\"],[14,\"aria-hidden\",\"true\"],[12],[13],[13],[2,\"\\n      \"]],\"parameters\":[]}]]],[2,\"\\n    \"]],\"parameters\":[1]}]]],[2,\"\\n  \"]],\"parameters\":[]}]]],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"\\n\"]],\"hasEval\":false,\"upvars\":[\"leftSideBarOpen\",\"mut\",\"action\",\"-outlet\",\"component\"]}",
    "meta": {
      "moduleName": "picasa/templates/application.hbs"
    }
  });

  _exports.default = _default;
});
;define("picasa/templates/components/em-tree-branch", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "A/yEJ3N7",
    "block": "{\"symbols\":[\"child\"],\"statements\":[[6,[37,8],[[30,[36,7],[[30,[36,7],[[35,6]],null]],null]],null,[[\"default\"],[{\"statements\":[[2,\"  \"],[1,[30,[36,5],null,[[\"model\",\"requestReload\",\"tree\",\"async\",\"target\",\"children\"],[[32,1],[35,4],[35,3],[35,2],[35,1],[30,[36,0],[[32,0],\"requestChildren\"],null]]]]],[2,\"\\n\"]],\"parameters\":[1]}]]]],\"hasEval\":false,\"upvars\":[\"action\",\"target\",\"async\",\"tree\",\"requestReload\",\"em-tree-node\",\"items\",\"-track-array\",\"each\"]}",
    "meta": {
      "moduleName": "picasa/templates/components/em-tree-branch.hbs"
    }
  });

  _exports.default = _default;
});
;define("picasa/templates/components/em-tree-node", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "Ff2+v/WF",
    "block": "{\"symbols\":[],\"statements\":[[10,\"span\"],[12],[2,\"\\n\"],[6,[37,14],[[35,16]],null,[[\"default\",\"else\"],[{\"statements\":[[2,\"    \"],[11,\"i\"],[16,0,[31,[[34,15]]]],[4,[38,0],[[32,0],\"toggle\"],null],[12],[13],[2,\"\\n\"]],\"parameters\":[]},{\"statements\":[[2,\"    \"],[11,\"a\"],[24,0,\"text\"],[4,[38,0],[[32,0],\"toggle\"],null],[12],[2,\"*\"],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[13],[2,\"\\n\\n\"],[6,[37,14],[[35,3,[\"in-multi-selection\"]]],null,[[\"default\"],[{\"statements\":[[2,\"  \"],[10,\"span\"],[14,0,\"em-tree-node-multiselection\"],[12],[2,\"\\n\"],[6,[37,14],[[35,13]],null,[[\"default\",\"else\"],[{\"statements\":[[2,\"      \"],[11,\"i\"],[16,0,[31,[[34,3,[\"selected-icon\"]]]]],[4,[38,0],[[32,0],\"toggleSelection\"],null],[12],[13],[2,\"\\n\"]],\"parameters\":[]},{\"statements\":[[2,\"      \"],[11,\"i\"],[16,0,[31,[[34,3,[\"unselected-icon\"]]]]],[4,[38,0],[[32,0],\"toggleSelection\"],null],[12],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"  \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"\\n\"],[11,\"span\"],[16,0,[31,[[34,17],\" tree-node-title\"]]],[4,[38,0],[[32,0],\"select\"],null],[12],[2,\"\\n\"],[6,[37,14],[[35,11]],null,[[\"default\"],[{\"statements\":[[2,\"    \"],[1,[30,[36,12],[[35,11]],[[\"class\",\"width\"],[\"em-tree-icon\",\"24px\"]]]],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"  \"],[10,\"span\"],[12],[2,\"\\n    \"],[1,[35,4,[\"title\"]]],[2,\"\\n  \"],[13],[2,\"\\n\"],[6,[37,14],[[35,3,[\"hovered-actions\"]]],null,[[\"default\"],[{\"statements\":[[2,\"    \"],[10,\"span\"],[14,0,\"actions\"],[12],[2,\"\\n\"],[6,[37,10],[[30,[36,9],[[30,[36,9],[[35,8]],null]],null]],null,[[\"default\"],[{\"statements\":[[2,\"        \"],[1,[30,[36,7],null,[[\"meta\",\"model\"],[[32,0],[35,6,[\"model\"]]]]]],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"    \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[13],[2,\"\\n\\n\"],[6,[37,14],[[35,18]],null,[[\"default\"],[{\"statements\":[[2,\"  \"],[1,[30,[36,5],null,[[\"model\",\"tree\",\"async\",\"target\",\"children\"],[[35,4],[35,3],[35,2],[35,1],[30,[36,0],[[32,0],\"requestChildren\"],null]]]]],[2,\"\\n\"]],\"parameters\":[]}]]]],\"hasEval\":false,\"upvars\":[\"action\",\"target\",\"async\",\"tree\",\"model\",\"em-tree-branch\",\"controller\",\"em-tree-node-icon-action\",\"hoveredActions\",\"-track-array\",\"each\",\"nodeIcon\",\"svg-jar\",\"multi-selected\",\"if\",\"iconClass\",\"hasIcon\",\"nodeSelectedClasses\",\"expanded\"]}",
    "meta": {
      "moduleName": "picasa/templates/components/em-tree-node.hbs"
    }
  });

  _exports.default = _default;
});
;define("picasa/templates/components/em-tree", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "jJGYLlor",
    "block": "{\"symbols\":[],\"statements\":[[1,[30,[36,4],null,[[\"model\",\"tree\",\"async\",\"target\",\"children\"],[[35,3],[32,0],[35,2],[35,1],[30,[36,0],[[32,0],\"requestChildren\"],null]]]]]],\"hasEval\":false,\"upvars\":[\"action\",\"target\",\"async\",\"model\",\"em-tree-node\"]}",
    "meta": {
      "moduleName": "picasa/templates/components/em-tree.hbs"
    }
  });

  _exports.default = _default;
});
;define("picasa/templates/components/spinkit-cube-grid", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "NsQpkvv2",
    "block": "{\"symbols\":[],\"statements\":[[2,\"\\n \\n\\n      \"],[10,\"div\"],[14,0,\"sk-cube-grid\"],[12],[2,\"\\n        \"],[10,\"div\"],[14,0,\"sk-cube sk-cube1\"],[12],[13],[2,\"\\n        \"],[10,\"div\"],[14,0,\"sk-cube sk-cube2\"],[12],[13],[2,\"\\n        \"],[10,\"div\"],[14,0,\"sk-cube sk-cube3\"],[12],[13],[2,\"\\n        \"],[10,\"div\"],[14,0,\"sk-cube sk-cube4\"],[12],[13],[2,\"\\n        \"],[10,\"div\"],[14,0,\"sk-cube sk-cube5\"],[12],[13],[2,\"\\n        \"],[10,\"div\"],[14,0,\"sk-cube sk-cube6\"],[12],[13],[2,\"\\n        \"],[10,\"div\"],[14,0,\"sk-cube sk-cube7\"],[12],[13],[2,\"\\n        \"],[10,\"div\"],[14,0,\"sk-cube sk-cube8\"],[12],[13],[2,\"\\n        \"],[10,\"div\"],[14,0,\"sk-cube sk-cube9\"],[12],[13],[2,\"\\n      \"],[13],[2,\"\\n\"]],\"hasEval\":false,\"upvars\":[]}",
    "meta": {
      "moduleName": "picasa/templates/components/spinkit-cube-grid.hbs"
    }
  });

  _exports.default = _default;
});
;define("picasa/templates/components/spinkit-three-bounce", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "E+dMSlJ2",
    "block": "{\"symbols\":[],\"statements\":[[2,\"\\n\\n\\n\"],[10,\"div\"],[14,0,\"sk-three-bounce\"],[12],[2,\"\\n  \"],[10,\"div\"],[14,0,\"sk-child sk-bounce1\"],[12],[13],[2,\"\\n  \"],[10,\"div\"],[14,0,\"sk-child sk-bounce2\"],[12],[13],[2,\"\\n  \"],[10,\"div\"],[14,0,\"sk-child sk-bounce3\"],[12],[13],[2,\"\\n\"],[13],[2,\"\\n\"]],\"hasEval\":false,\"upvars\":[]}",
    "meta": {
      "moduleName": "picasa/templates/components/spinkit-three-bounce.hbs"
    }
  });

  _exports.default = _default;
});
;define("picasa/templates/head", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "LovXK0mB",
    "block": "{\"symbols\":[],\"statements\":[[10,\"link\"],[14,\"rel\",\"stylesheet\"],[15,6,[34,0,[\"themeHref\"]]],[12],[13]],\"hasEval\":false,\"upvars\":[\"model\"]}",
    "meta": {
      "moduleName": "picasa/templates/head.hbs"
    }
  });

  _exports.default = _default;
});
;define("picasa/templates/loading", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "MZhV8egt",
    "block": "{\"symbols\":[],\"statements\":[[10,\"div\"],[14,0,\"loading-container\"],[12],[2,\"\\n  \"],[10,\"div\"],[14,0,\"icon\"],[12],[2,\"\\n    \"],[8,\"spinkit-cube-grid\",[],[[],[]],null],[2,\"\\n  \"],[13],[2,\"\\n\"],[13]],\"hasEval\":false,\"upvars\":[]}",
    "meta": {
      "moduleName": "picasa/templates/loading.hbs"
    }
  });

  _exports.default = _default;
});
;define("picasa/transforms/boolean", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.BooleanTransform;
    }
  });
});
;define("picasa/transforms/date", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.DateTransform;
    }
  });
});
;define("picasa/transforms/number", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.NumberTransform;
    }
  });
});
;define("picasa/transforms/string", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.StringTransform;
    }
  });
});
;define("picasa/utils/aspect-ratio", ["exports", "ember-image-utils/utils/aspect-ratio"], function (_exports, _aspectRatio) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _aspectRatio.default;
    }
  });
});
;define("picasa/utils/calculate-position", ["exports", "ember-basic-dropdown/utils/calculate-position"], function (_exports, _calculatePosition) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _calculatePosition.default;
    }
  });
});
;define("picasa/utils/clamp", ["exports", "ember-paper/utils/clamp"], function (_exports, _clamp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _clamp.default;
    }
  });
});
;define("picasa/utils/context-menu", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.setup = setup;

  /**
   * Handles the contextmenu event for the whole window, checking if
   * an input element has been selected - if so, a cut/copy/paste
   * menu will be opened
   *
   * @param e - MouseEvent
   */
  function handleContextMenu(e) {
    let {
      remote
    } = requireNode('electron');
    let {
      BrowserWindow,
      Menu
    } = remote;
    let template = [{
      label: '回撤',
      role: 'undo'
    }, {
      label: 'Redo',
      role: 'redo'
    }, {
      type: 'separator'
    }, {
      label: 'Cut',
      role: 'cut'
    }, {
      label: 'Copy',
      role: 'copy'
    }, {
      label: 'Paste',
      role: 'paste'
    }, {
      label: 'Paste and Match Style',
      click: () => BrowserWindow.getFocusedWindow().webContents.pasteAndMatchStyle()
    }, {
      label: 'Select All',
      role: 'selectall'
    }];
    e.preventDefault();
    e.stopPropagation();
    let node = e.target;
    let editorMenu = Menu.buildFromTemplate(template);

    while (node) {
      if (node.nodeName.match(/^(input|textarea)$/i) || node.isContentEditable) {
        editorMenu.popup(remote.getCurrentWindow());
        break;
      }

      node = node.parentNode;
    }
    /**
     * We cannot, with pure JavaScript, confirm that this event handler works.
     * A little hack to ensure that this method becomes testable.
     */


    if (window && window.QUnit && editorMenu) {
      window.CONTEXTMENU_OPENED = true;
    }
  }
  /**
   * Creates the conextmenu event listener
   *
   * @export
   */


  function setup() {
    window.addEventListener('contextmenu', handleContextMenu);
  }
});
;define("picasa/utils/data-normalizer", ["exports", "picasa/utils/folder-reader", "rxjs", "rxjs/operators"], function (_exports, _folderReader, _rxjs, _operators) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.normalizeImages = normalizeImages;
  _exports.normalizeImage = normalizeImage;
  _exports.listFiles = listFiles;
  _exports.breakdownWithPath = breakdownWithPath;
  _exports.toModel = toModel;
  const path = requireNode("path");

  function normalizeImages(root, images, usePromise) {
    usePromise = usePromise || true;
    const ob = (0, _rxjs.from)(images).pipe((0, _operators.map)(image => normalizeImage(root, image)), (0, _operators.reduce)((images, image) => {
      images.push(image);
      return images;
    }, []));
    return usePromise ? ob.toPromise() : ob;
  }
  /**
   * Normalize root and relative path of image.
   * @return { Object }
   * root the root path of image
   * name the file name with extension
   * path relative path to root
   * uniqueName the hash-code generated from full path (root/path)
   */


  function normalizeImage(root, image) {
    const path = requireNode("path");

    if (!image) {
      image = path.basename(root);
      root = path.dirname(root);
    }

    const fullPath = path.join(root, image);
    return {
      root,
      name: path.basename(image),
      path: image,
      fullPath,
      uniqueName: (0, _folderReader.uniqueName)(fullPath)
    };
  }
  /**
   * list files from path.
   * @param {array} paths
   */


  function listFiles(paths) {
    const promises = [];
    paths.forEach(path => {
      // scanFolderForImages return { cwd, files }
      const promise = (0, _folderReader.default)(path);
      promises.push(promise);
    }); // TODO: request scan service.

    return Ember.RSVP.all(promises);
  }

  function breakdownWithPath(results) {
    const splitted = {}; // array of [ { cwd, images }]

    results.forEach(folder => {
      // folder is { cwd, images }.
      splitted[folder.cwd] = {
        cwd: folder.cwd,
        images: []
      };
      folder.images.forEach(image => {
        const fullPath = path.join(folder.cwd, image);
        const cwd = path.dirname(fullPath);
        const fileName = path.basename(fullPath);

        if (!splitted[cwd]) {
          splitted[cwd] = {
            cwd,
            images: []
          };
        }

        splitted[cwd].images.push(fileName);
      });
    });
    const folders = [];
    Object.keys(splitted).forEach(key => {
      folders.push(splitted[key]);
    });
    return folders;
  }

  function toModel(folders) {
    const promises = [];
    folders.forEach(folder => {
      const promise = normalizeImages(folder.cwd, folder.images).then(images => {
        folder.images = images;
        return folder;
      });
      promises.push(promise);
    });
    return Ember.RSVP.all(promises);
  }
});
;define("picasa/utils/delay", ["exports", "ember-tree-utils/utils/delay"], function (_exports, _delay) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _delay.default;
    }
  });
});
;define("picasa/utils/electron-api", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.getElectronApp = getElectronApp;
  _exports.getElectronDialog = getElectronDialog;
  _exports.getElectronIpc = getElectronIpc;
  const {
    ipcRenderer,
    remote
  } = requireNode('electron');

  function getElectronApp() {
    return remote.app;
  }

  function getElectronDialog() {
    return remote.dialog;
  }

  function getElectronIpc() {
    return ipcRenderer;
  }
});
;define("picasa/utils/exif-tag", ["exports", "ember-image-utils/utils/exif-tag"], function (_exports, _exifTag) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _exifTag.default;
    }
  });
});
;define("picasa/utils/fetch-image", ["exports", "ember-image-utils/utils/fetch-image"], function (_exports, _fetchImage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _fetchImage.default;
    }
  });
});
;define("picasa/utils/folder-reader", ["exports", "picasa/utils/electron-api", "lodash/lang", "lodash/array"], function (_exports, _electronApi, _lang, _array) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = scanFolderForImages;
  _exports.specialFolder = specialFolder;
  _exports.hostname = hostname;
  _exports.uniqueName = uniqueName;
  _exports.FOLDERS = void 0;
  const os = requireNode("os");
  const glob = requireNode("glob");
  const spark = requireNode("spark-md5");

  function scanFolderForImages(target, options, ext) {
    ext = ext || "png|jpg|jpeg|gif";

    if ((0, _lang.isArray)(ext)) {
      ext = (0, _array.join)(ext, "|");
    }

    options = options || {};
    options.cwd = target || '~/';
    return new Ember.RSVP.Promise((resolve, reject) => {
      // options is optional
      glob(`**/*.+(${ext})`, options, (error, files) => {
        // files is an array of filenames.
        // If the `nonull` option is set, and nothing
        // was found, then files is ["**/*.js"]
        // error is an error object or null.
        if (error != null) {
          reject(error);
        } else {
          resolve({
            "cwd": options.cwd,
            "images": files
          });
        }
      });
    });
  }

  const FOLDERS = {
    DESKTOP: "desktop",
    DOCUMENT: "document",
    APPDATA: "appData",
    HOME: "home"
  };
  _exports.FOLDERS = FOLDERS;

  function specialFolder(name) {
    return (0, _electronApi.getElectronApp)().getPath(name);
  }

  function hostname() {
    return os.hostname();
  }

  function uniqueName(path) {
    return spark.hash(path);
  }
});
;define("picasa/utils/fs-watch", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = createWatcher;
  const chokidar = requireNode("chokidar");

  function createWatcher() {
    return chokidar.watch(...arguments);
  }
});
;define("picasa/utils/logger", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.debug = debug;
  _exports.warn = warn;
  _exports.info = info;
  _exports.trace = trace;
  _exports.fatal = fatal;
  _exports.error = error;
  const log4js = requireNode('log4js');
  const logger = log4js.getLogger("render");
  logger.level = 'debug'; //logger.debug("Some debug messages");

  function debug() {
    logger.debug(...arguments);
  }

  function warn() {
    logger.warn(...arguments);
  }

  function info() {
    logger.info(...arguments);
  }

  function trace() {
    logger.trace(...arguments);
  }

  function fatal() {
    logger.fatal(...arguments);
  }

  function error() {
    logger.error(...arguments);
  }
});
;define("picasa/utils/pivot-route-identifier", ["exports", "ember-a11y/utils/pivot-route-identifier"], function (_exports, _pivotRouteIdentifier) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pivotRouteIdentifier.default;
    }
  });
});
;define("picasa/utils/platform", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.isMacOSX = isMacOSX;
  const {
    process
  } = requireNode('electron').remote;

  function isMacOSX() {
    return process.platform === "darwin";
  }
});
;define("picasa/utils/precondition", ["exports", "ember-precondition/utils/precondition"], function (_exports, _precondition) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _precondition.default;
    }
  });
});
;define("picasa/utils/thumbnail-cache", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = thumbnailCache;

  function thumbnailCache() {
    return true;
  }
});
;define("picasa/utils/window-menu", ["exports", "jquery", "picasa/config/environment"], function (_exports, _jquery, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.reload = reload;
  _exports.toggleFullscreen = toggleFullscreen;
  _exports.toggleDevTools = toggleDevTools;
  _exports.toggleGhostDevTools = toggleGhostDevTools;
  _exports.openReportIssues = openReportIssues;
  _exports.openRepository = openRepository;
  _exports.openFolder = openFolder;
  _exports.setup = setup;

  /**
   * Functions
   */

  /**
   * Reloads the currently focused window
   *
   * @export
   * @param item - The menu item calling
   * @param {Electron.BrowserWindow} focusedWindow - The currently focussed window
   */
  function reload(item, focusedWindow) {
    if (focusedWindow) {
      focusedWindow.reload();
    }
  }
  /**
   * Toggles fullscreen on the currently focused window
   *
   * @export
   * @param item (description) * @param item - The menu item calling
   * @param {Electron.BrowserWindow} focusedWindow - The currently focussed window focusedWindow (description)
   */


  function toggleFullscreen(item, focusedWindow) {
    if (focusedWindow) {
      focusedWindow.setFullScreen(!focusedWindow.isFullScreen());
    }
  }
  /**
   * Toggles the developer tools on the currently focused window
   *
   * @export
   * @param item - The menu item calling
   * @param {Electron.BrowserWindow} focusedWindow - The currently focussed window
   */


  function toggleDevTools(item, focusedWindow) {
    if (focusedWindow) {
      focusedWindow.toggleDevTools();
    }
  }
  /**
   * Attempts to toggle developer tools for the currently visible Ghost instance
   *
   * @export
   * @param item - The menu item calling
   * @param {Electron.BrowserWindow} focusedWindow - The currently focussed window
   */


  function toggleGhostDevTools(item, focusedWindow) {
    if (focusedWindow) {
      let host = (0, _jquery.default)('div.instance-host.selected');
      let webviews = host ? (0, _jquery.default)(host).find('webview') : null;

      if (!webviews || !webviews[0]) {
        return;
      }

      if (webviews[0].isDevToolsOpened()) {
        webviews[0].closeDevTools();
      } else {
        webviews[0].openDevTools();
      }
    }
  }
  /**
   * Opens the issues on GitHub in the OS default browser
   *
   * @export
   */


  function openReportIssues() {
    requireNode('electron').shell.openExternal('http://github.com/systembugtj/picasa-electron/issues');
  }
  /**
   * Opens the repository on GitHub in the OS default browser
   *
   * @export
   */


  function openRepository() {
    requireNode('electron').shell.openExternal('http://github.com/systembugtj/picasa-electron');
  }

  function openFolder(item, focusedWindow) {
    const electron = requireNode('electron');
    const dialog = electron.remote.dialog;
    dialog.showOpenDialog(focusedWindow, {
      properties: ['openDirectory']
    }, () => {});
  }

  function translate(key) {
    return key;
  }
  /**
   * Setups the window menu for the application
   *
   * @export
   * @returns {Electron.Menu} - Built Menu
   */


  function setup(t) {
    t = t || translate;
    let {
      remote
    } = requireNode('electron');
    let browserWindow = remote.getCurrentWindow();
    let template = [{
      label: t("file.label"),
      submenu: [{
        label: t("file.folder.open"),
        accelerator: 'CmdOrCtrl+O',
        click: openFolder
      }]
    }, {
      label: 'Edit',
      submenu: [{
        label: '回撤',
        accelerator: 'CmdOrCtrl+Z',
        role: 'undo'
      }, {
        label: 'Redo',
        accelerator: 'Shift+CmdOrCtrl+Z',
        role: 'redo'
      }, {
        type: 'separator'
      }, {
        label: '剪切',
        accelerator: 'CmdOrCtrl+X',
        role: 'cut'
      }, {
        label: '复制',
        accelerator: 'CmdOrCtrl+C',
        role: 'copy'
      }, {
        label: '粘贴',
        accelerator: 'CmdOrCtrl+V',
        role: 'paste'
      }, {
        label: '全选',
        accelerator: 'CmdOrCtrl+A',
        role: 'selectall'
      }]
    }, {
      label: 'View',
      submenu: [{
        label: '重载',
        accelerator: 'CmdOrCtrl+R',

        /**
         * (description)
         *
         * @param item (description)
         * @param focusedWindow (description)
         */
        click(item, focusedWindow) {
          if (focusedWindow) {
            focusedWindow.reload();
          }
        }

      }, {
        label: 'Toggle Full Screen',
        accelerator: process.platform === 'darwin' ? 'Ctrl+Command+F' : 'F11',
        click: toggleFullscreen
      }]
    }, {
      label: t('folder.management.label'),
      submenu: []
    }, {
      label: '窗口',
      role: 'window',
      submenu: [{
        label: '最下化',
        accelerator: 'CmdOrCtrl+M',
        role: 'minimize'
      }, {
        label: '关闭',
        accelerator: 'CmdOrCtrl+W',
        role: 'close'
      }]
    }, {
      label: 'Help',
      role: 'help',
      submenu: [{
        label: 'Learn More',
        click: openRepository
      }, {
        label: 'Report Issues',
        click: openReportIssues
      }]
    }];

    if (_environment.default.PICASA.allowDevTools) {
      template.push({
        label: '开发者',
        submenu: [{
          label: '开/关 开发者工具',
          accelerator: process.platform === 'darwin' ? 'Alt+Command+I' : 'Ctrl+Shift+I',
          click: toggleDevTools
        }, {
          label: 'Toggle Developer Tools (Current Blog)',
          accelerator: process.platform === 'darwin' ? 'Alt+Command+Shift+I' : 'Ctrl+Alt+Shift+I',
          click: toggleGhostDevTools
        }, {
          label: 'Repository',
          click: openRepository
        }]
      });
    }

    if (process.platform === 'darwin') {
      // Mac OS is a special snowflake.
      template.unshift({
        label: 'The Picasa',
        submenu: [{
          label: 'About The Picasa',
          role: 'about'
        }, {
          type: 'separator'
        }, {
          // The click action gets injected from gh-switcher
          label: 'Preferences',
          accelerator: 'CmdOrCtrl+,'
        }, {
          type: 'separator'
        }, {
          label: 'Services',
          role: 'services',
          submenu: []
        }, {
          type: 'separator'
        }, {
          label: `Hide ${name}`,
          accelerator: 'Command+H',
          role: 'hide'
        }, {
          label: 'Hide Others',
          accelerator: 'Command+Alt+H',
          role: 'hideothers'
        }, {
          label: 'Show All',
          role: 'unhide'
        }, {
          type: 'separator'
        }, {
          label: 'Quit',
          accelerator: 'Command+Q',

          click() {
            browserWindow.close();
          }

        }]
      });
    } else {
      // Windows and Linux
      template.unshift({
        label: t("file.label"),
        submenu: [{
          // The click action gets injected from gh-switcher.
          label: t("preferences.label"),
          accelerator: 'CmdOrCtrl+,'
        }]
      });
    }

    return template;
  }
});
;

;define('picasa/config/environment', [], function() {
  var prefix = 'picasa';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

;
          if (!runningTests) {
            require("picasa/app")["default"].create({"name":"picasa","version":"0.1.0+d2fd39e1"});
          }
        
//# sourceMappingURL=picasa.map
