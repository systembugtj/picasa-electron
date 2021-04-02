'use strict';

define("picasa/tests/helpers/ember-power-select", ["exports", "ember-power-select/test-support/helpers"], function (_exports, _helpers) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = deprecatedRegisterHelpers;
  _exports.selectChoose = _exports.touchTrigger = _exports.nativeTouch = _exports.clickTrigger = _exports.typeInSearch = _exports.triggerKeydown = _exports.nativeMouseUp = _exports.nativeMouseDown = _exports.findContains = void 0;

  function deprecateHelper(fn, name) {
    return function (...args) {
      (true && !(false) && Ember.deprecate(`DEPRECATED \`import { ${name} } from '../../tests/helpers/ember-power-select';\` is deprecated. Please, replace it with \`import { ${name} } from 'ember-power-select/test-support/helpers';\``, false, {
        until: '1.11.0',
        id: `ember-power-select-test-support-${name}`
      }));
      return fn(...args);
    };
  }

  let findContains = deprecateHelper(_helpers.findContains, 'findContains');
  _exports.findContains = findContains;
  let nativeMouseDown = deprecateHelper(_helpers.nativeMouseDown, 'nativeMouseDown');
  _exports.nativeMouseDown = nativeMouseDown;
  let nativeMouseUp = deprecateHelper(_helpers.nativeMouseUp, 'nativeMouseUp');
  _exports.nativeMouseUp = nativeMouseUp;
  let triggerKeydown = deprecateHelper(_helpers.triggerKeydown, 'triggerKeydown');
  _exports.triggerKeydown = triggerKeydown;
  let typeInSearch = deprecateHelper(_helpers.typeInSearch, 'typeInSearch');
  _exports.typeInSearch = typeInSearch;
  let clickTrigger = deprecateHelper(_helpers.clickTrigger, 'clickTrigger');
  _exports.clickTrigger = clickTrigger;
  let nativeTouch = deprecateHelper(_helpers.nativeTouch, 'nativeTouch');
  _exports.nativeTouch = nativeTouch;
  let touchTrigger = deprecateHelper(_helpers.touchTrigger, 'touchTrigger');
  _exports.touchTrigger = touchTrigger;
  let selectChoose = deprecateHelper(_helpers.selectChoose, 'selectChoose');
  _exports.selectChoose = selectChoose;

  function deprecatedRegisterHelpers() {
    (true && !(false) && Ember.deprecate("DEPRECATED `import registerPowerSelectHelpers from '../../tests/helpers/ember-power-select';` is deprecated. Please, replace it with `import registerPowerSelectHelpers from 'ember-power-select/test-support/helpers';`", false, {
      until: '1.11.0',
      id: 'ember-power-select-test-support-register-helpers'
    }));
    return (0, _helpers.default)();
  }
});
define("picasa/tests/integration/pods/components/folder-list/component-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | folder-list', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{folder-list}}
      */
      {"id":"5w9oPeeF","block":"{\"symbols\":[],\"statements\":[[1,[34,0]]],\"hasEval\":false,\"upvars\":[\"folder-list\"]}","meta":{}}));
      assert.dom(this.element).hasText(''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        
            {{#folder-list}}
              template block text
            {{/folder-list}}
          
      */
      {"id":"zouM8JTa","block":"{\"symbols\":[],\"statements\":[[2,\"\\n\"],[6,[37,0],null,null,[[\"default\"],[{\"statements\":[[2,\"        template block text\\n\"]],\"parameters\":[]}]]],[2,\"    \"]],\"hasEval\":false,\"upvars\":[\"folder-list\"]}","meta":{}}));
      assert.dom(this.element).hasText('template block text');
    });
  });
});
define("picasa/tests/integration/pods/components/image-list/component-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | image list', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{image-list}}
      */
      {"id":"pqh2satd","block":"{\"symbols\":[],\"statements\":[[1,[34,0]]],\"hasEval\":false,\"upvars\":[\"image-list\"]}","meta":{}}));
      assert.dom('*').hasText(''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        
            {{#image-list}}
              template block text
            {{/image-list}}
          
      */
      {"id":"k2zp4fBf","block":"{\"symbols\":[],\"statements\":[[2,\"\\n\"],[6,[37,0],null,null,[[\"default\"],[{\"statements\":[[2,\"        template block text\\n\"]],\"parameters\":[]}]]],[2,\"    \"]],\"hasEval\":false,\"upvars\":[\"image-list\"]}","meta":{}}));
      assert.dom('*').hasText('template block text');
    });
  });
});
define("picasa/tests/integration/pods/components/image-property/component-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | image-property', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{image-property}}
      */
      {"id":"h20UyfFl","block":"{\"symbols\":[],\"statements\":[[1,[34,0]]],\"hasEval\":false,\"upvars\":[\"image-property\"]}","meta":{}}));
      assert.dom(this.element).hasText(''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        
            {{#image-property}}
              template block text
            {{/image-property}}
          
      */
      {"id":"g1yLoDeu","block":"{\"symbols\":[],\"statements\":[[2,\"\\n\"],[6,[37,0],null,null,[[\"default\"],[{\"statements\":[[2,\"        template block text\\n\"]],\"parameters\":[]}]]],[2,\"    \"]],\"hasEval\":false,\"upvars\":[\"image-property\"]}","meta":{}}));
      assert.dom(this.element).hasText('template block text');
    });
  });
});
define("picasa/tests/integration/pods/components/import-photos-dialog/component-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | import-photos', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{import-photos-dialog}}
      */
      {"id":"AfrR9W32","block":"{\"symbols\":[],\"statements\":[[1,[34,0]]],\"hasEval\":false,\"upvars\":[\"import-photos-dialog\"]}","meta":{}}));
      assert.dom(this.element).hasText(''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        
            {{#import-photos}}
              template block text
            {{/import-photos}}
          
      */
      {"id":"h0VT978D","block":"{\"symbols\":[],\"statements\":[[2,\"\\n\"],[6,[37,0],null,null,[[\"default\"],[{\"statements\":[[2,\"        template block text\\n\"]],\"parameters\":[]}]]],[2,\"    \"]],\"hasEval\":false,\"upvars\":[\"import-photos\"]}","meta":{}}));
      assert.dom(this.element).hasText('template block text');
    });
  });
});
define("picasa/tests/integration/pods/components/path-tree/component-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | path tree', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{path-tree}}
      */
      {"id":"5TIzV/Xc","block":"{\"symbols\":[],\"statements\":[[1,[34,0]]],\"hasEval\":false,\"upvars\":[\"path-tree\"]}","meta":{}}));
      assert.dom('*').hasText(''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        
            {{#path-tree}}
              template block text
            {{/path-tree}}
          
      */
      {"id":"y2UusgGz","block":"{\"symbols\":[],\"statements\":[[2,\"\\n\"],[6,[37,0],null,null,[[\"default\"],[{\"statements\":[[2,\"        template block text\\n\"]],\"parameters\":[]}]]],[2,\"    \"]],\"hasEval\":false,\"upvars\":[\"path-tree\"]}","meta":{}}));
      assert.dom('*').hasText('template block text');
    });
  });
});
define("picasa/tests/integration/pods/components/progress-bar/component-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | progress-bar', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        <ProgressBar />
      */
      {"id":"LO5FPUsh","block":"{\"symbols\":[],\"statements\":[[8,\"progress-bar\",[],[[],[]],null]],\"hasEval\":false,\"upvars\":[]}","meta":{}}));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        
            <ProgressBar>
              template block text
            </ProgressBar>
          
      */
      {"id":"eDuvf+G3","block":"{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"progress-bar\",[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n        template block text\\n      \"]],\"parameters\":[]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}","meta":{}}));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("picasa/tests/integration/pods/components/settings/component-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | settings', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{settings}}
      */
      {"id":"XsrxOxfe","block":"{\"symbols\":[],\"statements\":[[1,[34,0]]],\"hasEval\":false,\"upvars\":[\"settings\"]}","meta":{}}));
      assert.dom(this.element).hasText(''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        
            {{#settings}}
              template block text
            {{/settings}}
          
      */
      {"id":"/HqR02I8","block":"{\"symbols\":[],\"statements\":[[2,\"\\n\"],[6,[37,0],null,null,[[\"default\"],[{\"statements\":[[2,\"        template block text\\n\"]],\"parameters\":[]}]]],[2,\"    \"]],\"hasEval\":false,\"upvars\":[\"settings\"]}","meta":{}}));
      assert.dom(this.element).hasText('template block text');
    });
  });
});
define("picasa/tests/integration/pods/components/title-bar/component-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | title-bar', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{title-bar}}
      */
      {"id":"cWBrCYEl","block":"{\"symbols\":[],\"statements\":[[1,[34,0]]],\"hasEval\":false,\"upvars\":[\"title-bar\"]}","meta":{}}));
      assert.dom(this.element).hasText(''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        
            {{#title-bar}}
              template block text
            {{/title-bar}}
          
      */
      {"id":"0TUoz70D","block":"{\"symbols\":[],\"statements\":[[2,\"\\n\"],[6,[37,0],null,null,[[\"default\"],[{\"statements\":[[2,\"        template block text\\n\"]],\"parameters\":[]}]]],[2,\"    \"]],\"hasEval\":false,\"upvars\":[\"title-bar\"]}","meta":{}}));
      assert.dom(this.element).hasText('template block text');
    });
  });
});
define("picasa/tests/test-helper", ["picasa/app", "picasa/config/environment", "@ember/test-helpers", "ember-qunit"], function (_app, _environment, _testHelpers, _emberQunit) {
  "use strict";

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _emberQunit.start)();
});
define("picasa/tests/unit/mixins/persistence-test", ["picasa/mixins/persistence", "qunit"], function (_persistence, _qunit) {
  "use strict";

  (0, _qunit.module)('Unit | Mixin | persistence', function () {
    // Replace this with your real tests.
    (0, _qunit.test)('it works', function (assert) {
      let PersistenceObject = Ember.Object.extend(_persistence.default);
      let subject = PersistenceObject.create();
      assert.ok(subject);
    });
  });
});
define("picasa/tests/unit/mixins/preference-test", ["picasa/mixins/preference", "qunit"], function (_preference, _qunit) {
  "use strict";

  (0, _qunit.module)('Unit | Mixin | preference', function () {
    // Replace this with your real tests.
    (0, _qunit.test)('it works', function (assert) {
      let PreferenceObject = Ember.Object.extend(_preference.default);
      let subject = PreferenceObject.create();
      assert.ok(subject);
    });
  });
});
define("picasa/tests/unit/pods/electron-api/service-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Service | electron-api', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let service = this.owner.lookup('service:electron-api');
      assert.ok(service);
    });
  });
});
define("picasa/tests/unit/pods/folder-scan/service-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Service | folder-scan', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let service = this.owner.lookup('service:folder-scan');
      assert.ok(service);
    });
  });
});
define("picasa/tests/unit/pods/index/route-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | index', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:index');
      assert.ok(route);
    });
  });
});
define("picasa/tests/unit/pods/localization/initializer-test-test", ["picasa/initializers/localization", "qunit", "ember-qunit", "picasa/tests/unit/helpers/destroy-app"], function (_localization, _qunit, _emberQunit, _destroyApp) {
  "use strict";

  (0, _qunit.module)('Unit | Initializer | localization', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    hooks.beforeEach(function () {
      this.TestApplication = Ember.Application.extend();
      this.TestApplication.initializer({
        name: 'initializer under test',
        initialize: _localization.initialize
      });
      this.application = this.TestApplication.create({
        autoboot: false
      });
    });
    hooks.afterEach(function () {
      (0, _destroyApp.default)(this.application);
    }); // Replace this with your real tests.

    (0, _qunit.test)('it works', async function (assert) {
      await this.application.boot();
      assert.ok(true);
    });
  });
});
define("picasa/tests/unit/pods/splash/route-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | splash', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:splash');
      assert.ok(route);
    });
  });
});
define("picasa/tests/unit/pods/trip/route-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | trip', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:trip');
      assert.ok(route);
    });
  });
});
define("picasa/tests/unit/services/fetch-cache-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Service | fetch-cache', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let service = this.owner.lookup('service:fetch-cache');
      assert.ok(service);
    });
  });
});
define("picasa/tests/unit/services/file-watcher-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Service | file-watcher', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let service = this.owner.lookup('service:file-watcher');
      assert.ok(service);
    });
  });
});
define("picasa/tests/unit/services/image-scale-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Service | image-scale', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let service = this.owner.lookup('service:image-scale');
      assert.ok(service);
    });
  });
});
define("picasa/tests/unit/services/persistence-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Service | persistence', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let service = this.owner.lookup('service:persistence');
      assert.ok(service);
    });
  });
});
define("picasa/tests/unit/services/photo-import-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Service | photo-import', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let service = this.owner.lookup('service:photo-import');
      assert.ok(service);
    });
  });
});
define("picasa/tests/unit/services/preference-manager-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Service | persistence', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let service = this.owner.lookup('service:preference-manager');
      assert.ok(service);
    });
  });
});
define("picasa/tests/unit/services/window-menu-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Service | persistence', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let service = this.owner.lookup('service:window-menu');
      assert.ok(service);
    });
  });
});
define("picasa/tests/unit/utils/context-menu-test", ["picasa/utils/context-menu", "qunit"], function (_contextMenu, _qunit) {
  "use strict";

  (0, _qunit.module)('Unit | Utility | context menu', function () {
    // Replace this with your real tests.
    (0, _qunit.test)('it works', function (assert) {
      let result = (0, _contextMenu.default)();
      assert.ok(result);
    });
  });
});
define("picasa/tests/unit/utils/data-normalizer-test", ["picasa/utils/data-normalizer", "qunit"], function (_dataNormalizer, _qunit) {
  "use strict";

  (0, _qunit.module)('Unit | Utility | data-normalizer', function ()
  /*hooks*/
  {
    // Replace this with your real tests.
    (0, _qunit.test)('it works', async function (assert) {
      const root = "/";
      const images = ["a", "b"];
      let result = await (0, _dataNormalizer.normalizeImages)(root, images, true); // use promise then can be await.

      assert.equal(result.length, 2);
      assert.equal(result[0].root, root);
      assert.equal(result[0].image, images[0]);
      assert.equal(result[0].path, `${root}/${images[0]}`);
    });
  });
});
define("picasa/tests/unit/utils/folder-reader-test", ["picasa/utils/folder-reader", "qunit"], function (_folderReader, _qunit) {
  "use strict";

  (0, _qunit.module)('Unit | Utility | folder reader', function () {
    // Replace this with your real tests.
    (0, _qunit.test)('it works', function (assert) {
      let result = (0, _folderReader.default)();
      assert.ok(result);
    });
  });
});
define("picasa/tests/unit/utils/fs-watch-test", ["picasa/utils/fs-watch", "qunit"], function (_fsWatch, _qunit) {
  "use strict";

  (0, _qunit.module)('Unit | Utility | fs-watch', function ()
  /*hooks*/
  {
    // Replace this with your real tests.
    (0, _qunit.test)('it works', function (assert) {
      let result = (0, _fsWatch.default)();
      assert.ok(result);
    });
  });
});
define("picasa/tests/unit/utils/logger-test", ["picasa/utils/logger", "qunit"], function (_logger, _qunit) {
  "use strict";

  (0, _qunit.module)('Unit | Utility | logger', function ()
  /*hooks*/
  {
    // Replace this with your real tests.
    (0, _qunit.test)('it works', function (assert) {
      let result = (0, _logger.default)();
      assert.ok(result);
    });
  });
});
define("picasa/tests/unit/utils/platform-test", ["picasa/utils/platform", "qunit"], function (_platform, _qunit) {
  "use strict";

  (0, _qunit.module)('Unit | Utility | platform', function ()
  /*hooks*/
  {
    // Replace this with your real tests.
    (0, _qunit.test)('it works', function (assert) {
      let result = (0, _platform.default)();
      assert.ok(result);
    });
  });
});
define("picasa/tests/unit/utils/thumbnail-cache-test", ["picasa/utils/thumbnail-cache", "qunit"], function (_thumbnailCache, _qunit) {
  "use strict";

  (0, _qunit.module)('Unit | Utility | thumbnail-cache', function ()
  /*hooks*/
  {
    // Replace this with your real tests.
    (0, _qunit.test)('it works', function (assert) {
      let result = (0, _thumbnailCache.default)();
      assert.ok(result);
    });
  });
});
define("picasa/tests/unit/utils/window-menu-test", ["picasa/utils/window-menu", "qunit"], function (_windowMenu, _qunit) {
  "use strict";

  (0, _qunit.module)('Unit | Utility | window menu', function () {
    // Replace this with your real tests.
    (0, _qunit.test)('it works', function (assert) {
      let result = (0, _windowMenu.default)();
      assert.ok(result);
    });
  });
});
define('picasa/config/environment', [], function() {
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

require('picasa/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
