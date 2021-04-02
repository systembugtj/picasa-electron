'use strict';
var path = require('path');
var Funnel = require('broccoli-funnel');
var mergeTrees = require('broccoli-merge-trees');
var BroccoliDebug = require('broccoli-debug');
var fbTransform = require('fastboot-transform');

module.exports = {
  name: require('./package').name,

  blueprintsPath: function() {
    return path.join(__dirname, 'blueprints');
  },

  treeForVendor: function(vendorTree) {
    var mousewheelDir = path.dirname(require.resolve('jquery.mousewheel'));

    var mousewheelTree = new Funnel(mousewheelDir, {
      files: ['jquery.mousewheel.js']
    });
    mousewheelTree = new BroccoliDebug(
      mousewheelTree, 'ember-cli-mousewheel:mousewheel-tree'
    );

    if (vendorTree) {
      vendorTree = mergeTrees([vendorTree, mousewheelTree]);
    } else {
      vendorTree = mousewheelTree;
    }

    return new BroccoliDebug(
      fbTransform(vendorTree), 'ember-cli-mousewheel:vendor-tree'
    );
  },

  included: function(app) {
    this._super.included(app);
    app.import('vendor/jquery.mousewheel.js');
  }
};
