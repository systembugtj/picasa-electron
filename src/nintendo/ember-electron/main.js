/* eslint-env node */
const { app, BrowserWindow, protocol, ipcMain } = require('electron');
const { dirname, join, resolve } = require('path');
const protocolServe = require('electron-protocol-serve');
const log4js = require('log4js');
const sharp = require("sharp");
const oauth2 = require('./oauth2');
const PROD_MODE = process.env.NODE_ENV === "production";
const logger = log4js.getLogger("main");
logger.level = PROD_MODE ? 'info' : "debug";

let splash = null;
let mainWindow = null;

ipcMain.on('picasa-is-ready', function() {
    splash.destroy();
    mainWindow.show();
});

ipcMain.on('picasa-create-thumbnail', function(event, arg) {
  sharp(arg.path)
      .resize(arg.width, arg.height, {
        fit: sharp.fit.inside,
        withoutEnlargement: arg.withoutEnlargement
      })
      .toFormat('jpeg')
      .toFile(arg.thumbnail)
      .then(i => {
        logger.info(i);
        return arg.thumbnail;
      })
      .catch(err => {
        logger.error(err);
        return arg.thumbnail;
      }).then(() => {
        // Notify render process
        mainWindow && mainWindow.webContents.send("picasa-thumbnail-ready", arg);
      });
})

ipcMain.on("tripasa-login-request", function(event, arg) {
  const windowParams = {
    parent: mainWindow,
    alwaysOnTop: false,
    autoHideMenuBar: true,
    webPreferences: {
        nodeIntegration: false
    }
  }

  const myApiOauth = oauth2(arg.config, windowParams);

  myApiOauth.getAccessToken(arg.options)
    .then(token => {
      // use your token.access_token
      // Notify render process
      mainWindow && mainWindow.webContents.send("tripasa-access-token", token);

      myApiOauth.refreshToken(token.refresh_token)
        .then(newToken => {
          //use your new token
          mainWindow && mainWindow.webContents.send("tripasa-access-token", newToken);
        });
    });
})

// Registering a protocol & schema to serve our Ember application
protocol.registerStandardSchemes(['serve'], { secure: true });
protocolServe({
  cwd: join(__dirname || resolve(dirname('')), '..', 'ember'),
  app,
  protocol,
});

// Uncomment the lines below to enable Electron's crash reporter
// For more information, see http://electron.atom.io/docs/api/crash-reporter/
// electron.crashReporter.start({
//     productName: 'YourName',
//     companyName: 'YourCompany',
//     submitURL: 'https://your-domain.com/url-to-submit',
//     autoSubmit: true
// });

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('ready', () => {

  // create a new `splash`-Window
  splash = new BrowserWindow({
    width: 400,
    height: 300,
    frame: false,
    alwaysOnTop: true
  });
  splash.loadURL(`file://${__dirname}/splash.html`);

  const { width, height } = require('electron').screen.getPrimaryDisplay().workAreaSize;
  const options = {
    width: width * 2 / 3,
    height: height - 200,
    title: "www.ThePicasa.com",
    webPreferences: {
      webSecurity: false
    },
    show: false,
    frame: process.platform !== 'darwin', // has frame for linux and windows, but not mac.
    titleBarStyle: "hiddenInset", // only works on mac.
  }
  mainWindow = new BrowserWindow(options);

  // If you want to open up dev tools programmatically, call
  // mainWindow.openDevTools();

  const emberAppLocation = 'serve://dist';

  // Load the ember application using our custom protocol/scheme
  mainWindow.loadURL(emberAppLocation);

  // If a loading operation goes wrong, we'll send Electron back to
  // Ember App entry point
  mainWindow.webContents.on('did-fail-load', () => {
    mainWindow.loadURL(emberAppLocation);
  });

  mainWindow.webContents.on('crashed', () => {
    console.log('Your Ember app (or other code) in the main window has crashed.');
    console.log('This is a serious issue that needs to be handled and/or debugged.');
  });

  mainWindow.on('unresponsive', () => {
    console.log('Your Ember app (or other code) has made the window unresponsive.');
  });

  mainWindow.on('responsive', () => {
    console.log('The main window has become responsive again.');
  });

  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  // Open Debug tools if not in production.
  if (!PROD_MODE && mainWindow.toggleDevTools) {
    mainWindow.toggleDevTools();
  }
});

// Handle an unhandled error in the main thread
//
// Note that 'uncaughtException' is a crude mechanism for exception handling intended to
// be used only as a last resort. The event should not be used as an equivalent to
// "On Error Resume Next". Unhandled exceptions inherently mean that an application is in
// an undefined state. Attempting to resume application code without properly recovering
// from the exception can cause additional unforeseen and unpredictable issues.
//
// Attempting to resume normally after an uncaught exception can be similar to pulling out
// of the power cord when upgrading a computer -- nine out of ten times nothing happens -
// but the 10th time, the system becomes corrupted.
//
// The correct use of 'uncaughtException' is to perform synchronous cleanup of allocated
// resources (e.g. file descriptors, handles, etc) before shutting down the process. It is
// not safe to resume normal operation after 'uncaughtException'.
process.on('uncaughtException', (err) => {
  console.log('An exception in the main thread was not handled.');
  console.log('This is a serious issue that needs to be handled and/or debugged.');
  console.log(`Exception: ${err}`);
});
