'use strict';
var path = require('path');
var Funnel = require('broccoli-funnel');
var mergeTrees = require('broccoli-merge-trees');
var BroccoliDebug = require('broccoli-debug');
var fbTransform = require('fastboot-transform');

module.exports = {
  name: require('./package').name,

  treeForVendor: function(vendorTree) {
    var dir = path.dirname(require.resolve('exif-js'));

    var tree = new Funnel(dir, {
      files: ['exif.js'],
      destDir: 'exif-js'
    });

    tree = new BroccoliDebug(
      tree, 'ember-exif-shim:exif-tree'
    );

    if (vendorTree) {
      vendorTree = mergeTrees([vendorTree, tree]);
    } else {
      vendorTree = tree;
    }

    return new BroccoliDebug(
      fbTransform(vendorTree), 'ember-exif-shim:vendor-tree'
    );
  },

  included: function(app) {
    this._super.included(app);

    app.import('vendor/exif-js/exif.js');
    app.import('vendor/exif-shim.js');
  }
};
