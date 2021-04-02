import $ from "jquery";
import ENV from "picasa/config/environment";
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
export function reload(item, focusedWindow) {
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
export function toggleFullscreen(item, focusedWindow) {
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
export function toggleDevTools(item, focusedWindow) {
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
export function toggleGhostDevTools(item, focusedWindow) {
  if (focusedWindow) {
    let host = $("div.instance-host.selected");
    let webviews = host ? $(host).find("webview") : null;

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
export function openReportIssues() {
  requireNode("electron").shell.openExternal(
    "http://github.com/systembugtj/picasa-electron/issues"
  );
}

/**
 * Opens the repository on GitHub in the OS default browser
 *
 * @export
 */
export function openRepository() {
  requireNode("electron").shell.openExternal(
    "http://github.com/systembugtj/picasa-electron"
  );
}

export function openFolder(item, focusedWindow) {
  const electron = requireNode("electron");
  const dialog = electron.remote.dialog;

  dialog.showOpenDialog(
    focusedWindow,
    {
      properties: ["openDirectory"],
    },
    () => {}
  );
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
export function setup(t) {
  t = t || translate;

  let { remote } = requireNode("@electron/remote");
  let browserWindow = remote.getCurrentWindow();

  let template = [
    {
      label: t("file.label"),
      submenu: [
        {
          label: t("file.folder.open"),
          accelerator: "CmdOrCtrl+O",
          click: openFolder,
        },
      ],
    },
    {
      label: "Edit",
      submenu: [
        {
          label: "回撤",
          accelerator: "CmdOrCtrl+Z",
          role: "undo",
        },
        {
          label: "Redo",
          accelerator: "Shift+CmdOrCtrl+Z",
          role: "redo",
        },
        {
          type: "separator",
        },
        {
          label: "剪切",
          accelerator: "CmdOrCtrl+X",
          role: "cut",
        },
        {
          label: "复制",
          accelerator: "CmdOrCtrl+C",
          role: "copy",
        },
        {
          label: "粘贴",
          accelerator: "CmdOrCtrl+V",
          role: "paste",
        },
        {
          label: "全选",
          accelerator: "CmdOrCtrl+A",
          role: "selectall",
        },
      ],
    },
    {
      label: "View",
      submenu: [
        {
          label: "重载",
          accelerator: "CmdOrCtrl+R",
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
          },
        },
        {
          label: "Toggle Full Screen",
          accelerator: process.platform === "darwin" ? "Ctrl+Command+F" : "F11",
          click: toggleFullscreen,
        },
      ],
    },
    {
      label: t("folder.management.label"),
      submenu: [],
    },
    {
      label: "窗口",
      role: "window",
      submenu: [
        {
          label: "最下化",
          accelerator: "CmdOrCtrl+M",
          role: "minimize",
        },
        {
          label: "关闭",
          accelerator: "CmdOrCtrl+W",
          role: "close",
        },
      ],
    },
    {
      label: "Help",
      role: "help",
      submenu: [
        {
          label: "Learn More",
          click: openRepository,
        },
        {
          label: "Report Issues",
          click: openReportIssues,
        },
      ],
    },
  ];

  if (ENV.PICASA.allowDevTools) {
    template.push({
      label: "开发者",
      submenu: [
        {
          label: "开/关 开发者工具",
          accelerator:
            process.platform === "darwin" ? "Alt+Command+I" : "Ctrl+Shift+I",
          click: toggleDevTools,
        },
        {
          label: "Toggle Developer Tools (Current Blog)",
          accelerator:
            process.platform === "darwin"
              ? "Alt+Command+Shift+I"
              : "Ctrl+Alt+Shift+I",
          click: toggleGhostDevTools,
        },
        {
          label: "Repository",
          click: openRepository,
        },
      ],
    });
  }
  if (process.platform === "darwin") {
    // Mac OS is a special snowflake.
    template.unshift({
      label: "The Picasa",
      submenu: [
        {
          label: "About The Picasa",
          role: "about",
        },
        {
          type: "separator",
        },
        {
          // The click action gets injected from gh-switcher
          label: "Preferences",
          accelerator: "CmdOrCtrl+,",
        },
        {
          type: "separator",
        },
        {
          label: "Services",
          role: "services",
          submenu: [],
        },
        {
          type: "separator",
        },
        {
          label: `Hide ${name}`,
          accelerator: "Command+H",
          role: "hide",
        },
        {
          label: "Hide Others",
          accelerator: "Command+Alt+H",
          role: "hideothers",
        },
        {
          label: "Show All",
          role: "unhide",
        },
        {
          type: "separator",
        },
        {
          label: "Quit",
          accelerator: "Command+Q",
          click() {
            browserWindow.close();
          },
        },
      ],
    });
  } else {
    // Windows and Linux
    template.unshift({
      label: t("file.label"),
      submenu: [
        {
          // The click action gets injected from gh-switcher.
          label: t("preferences.label"),
          accelerator: "CmdOrCtrl+,",
        },
      ],
    });
  }

  return template;
}
