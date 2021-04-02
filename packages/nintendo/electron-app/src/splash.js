const { BrowserWindow } = require("electron");

module.exports = function showSplash() {
  // create a new `splash`-Window
  const splash = new BrowserWindow({
    width: 400,
    height: 300,
    frame: false,
    alwaysOnTop: true,
  });
  splash.loadURL(`file://${__dirname}/splash.html`);

  return splash;
};
