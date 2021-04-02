'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'picasa',
    podModulePrefix: 'picasa/pods',
    locationType: process.env.EMBER_CLI_ELECTRON ? 'hash' : process.env.EMBER_CLI_ELECTRON ? 'hash' : 'hash',
    environment,
    rootURL: process.env.EMBER_CLI_ELECTRON ? '' : process.env.EMBER_CLI_ELECTRON ? '' : '/',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. EMBER_NATIVE_DECORATOR_SUPPORT: true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    theme: {
      themes: [ 'light', 'dark'], // MANDATORY
      defaultTheme: 'light', // OPTIONAL
      //eventName: 'name of the event to be trigger when the theme changes', // OPTIONAL
      //isRelativePath: [default to true in the Addon] , boolean value to indicate if the assets should be assigned relative url or not [/assetsd/light.css]
      //useAssetMap: [default to true in Prod environment] boolean value to indicate if the assets were fingerprinted and an assetMap.json file is available // OPTIONAL
    },

    i18nextOptions: {
      ns: [ 'main' ],
      defaultNS: 'main',
      useCookie: false,
      preload: [ 'en', 'zh-CN' ],
      lng: 'zh',
      fallbackLng: 'en',
      backend: {
        loadPath: '/locales/{{ns}}/{{lng}}.json'
      },
      debug: true
    },

    contentSecurityPolicy: {
      'default-src': "'none'",
      'script-src': "'self' 'unsafe-inline'",
      'style-src': "'self' 'unsafe-inline' https://fonts.googleapis.com",
      'font-src': "'self' fonts.gstatic.com",
      'connect-src': "'self'",
      'img-src': "'self' data:",
      'media-src': "'self'"
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },

    resizeServiceDefaults: {
      debounceTimeout    : 200,
      heightSensitive    : true,
      widthSensitive     : true,
      injectionFactories : [ 'view', 'component']
    },
    PICASA: {
      allowDevTools: false
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV.PICASA.allowDevTools = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
  }

  return ENV;
};
