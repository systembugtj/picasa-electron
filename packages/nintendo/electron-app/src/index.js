/* eslint-disable no-console */
const {
  default: installExtension,
  EMBER_INSPECTOR,
} = require("electron-devtools-installer");
const { pathToFileURL } = require("url");
const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
const { dirname, join, resolve } = require("path");
const log4js = require("log4js");
const sharp = require("sharp");
const oauth2 = require("./oauth2");
const showSplash = require("./splash");
const logger = log4js.getLogger("main");

const isDev = require("electron-is-dev");
const handleFileUrls = require("./handle-file-urls");
logger.level = isDev ? "debug" : "info";

const emberAppDir = path.resolve(__dirname, "..", "ember-dist");
const emberAppURL = pathToFileURL(
  path.join(emberAppDir, "index.html")
).toString();

let splash = null;
let mainWindow = null;

ipcMain.on("picasa-is-ready", function () {
  splash.destroy();
  mainWindow.show();
});

ipcMain.on("picasa-toggle-window-max", function () {
  if (!mainWindow) {
    return;
  }
  if (mainWindow.isMaximized()) {
    mainWindow.unmaximize();
  } else {
    mainWindow.maximize();
  }
});

ipcMain.on("picasa-create-thumbnail", function (event, arg) {
  sharp(arg.path)
    .rotate()
    .resize(arg.width, arg.height, {
      fit: sharp.fit.inside,
      withoutEnlargement: arg.withoutEnlargement,
    })
    .toFormat("jpeg")
    .toFile(arg.thumbnail)
    .then((i) => {
      logger.info(i);
      return arg.thumbnail;
    })
    .catch((err) => {
      logger.error(err);
      return arg.thumbnail;
    })
    .then(() => {
      // Notify render process
      mainWindow && mainWindow.webContents.send("picasa-thumbnail-ready", arg);
    });
});

ipcMain.on("tripasa-login-request", function (event, arg) {
  const windowParams = {
    parent: mainWindow,
    alwaysOnTop: false,
    autoHideMenuBar: true,
    webPreferences: {
      nodeIntegration: false,
    },
  };

  const myApiOauth = oauth2(arg.config, windowParams);

  myApiOauth.getAccessToken(arg.options).then((token) => {
    // use your token.access_token
    // Notify render process
    mainWindow && mainWindow.webContents.send("tripasa-access-token", token);

    /*
    myApiOauth.refreshToken(token.refresh_token)
      .then(newToken => {
        //use your new token
        mainWindow && mainWindow.webContents.send("tripasa-access-token", newToken);
      });
    */
  });
});

// Uncomment the lines below to enable Electron's crash reporter
// For more information, see http://electron.atom.io/docs/api/crash-reporter/
// electron.crashReporter.start({
//     productName: 'YourName',
//     companyName: 'YourCompany',
//     submitURL: 'https://your-domain.com/url-to-submit',
//     autoSubmit: true
// });

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("ready", async () => {
  splash = showSplash();

  if (isDev) {
    try {
      require("devtron").install();
    } catch (err) {
      console.log("Failed to install Devtron: ", err);
    }
    try {
      await installExtension(EMBER_INSPECTOR);
    } catch (err) {
      console.log("Failed to install Ember Inspector: ", err);
    }
  }

  await handleFileUrls(emberAppDir);

  const {
    width,
    height,
  } = require("electron").screen.getPrimaryDisplay().workAreaSize;

  const options = {
    width: (width * 2) / 3,
    height: height - 200,
    title: "www.ThePicasa.com",
    webPreferences: {
      webSecurity: false,
    },
    show: false,
    frame: process.platform !== "darwin", // has frame for linux and windows, but not mac.
    titleBarStyle: "hiddenInset", // only works on mac.
  };

  mainWindow = new BrowserWindow(options);

  // If you want to open up dev tools programmatically, call
  // mainWindow.openDevTools();

  // Load the ember application
  mainWindow.loadURL(emberAppURL);

  // If a loading operation goes wrong, we'll send Electron back to
  // Ember App entry point
  mainWindow.webContents.on("did-fail-load", () => {
    mainWindow.loadURL(emberAppURL);
  });

  mainWindow.webContents.on("crashed", () => {
    console.log(
      "Your Ember app (or other code) in the main window has crashed."
    );
    console.log(
      "This is a serious issue that needs to be handled and/or debugged."
    );
  });

  mainWindow.on("unresponsive", () => {
    console.log(
      "Your Ember app (or other code) has made the window unresponsive."
    );
  });

  mainWindow.on("responsive", () => {
    console.log("The main window has become responsive again.");
  });

  mainWindow.on("closed", () => {
    mainWindow = null;
  });
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
process.on("uncaughtException", (err) => {
  console.log("An exception in the main thread was not handled.");
  console.log(
    "This is a serious issue that needs to be handled and/or debugged."
  );
  console.log(`Exception: ${err}`);
});
