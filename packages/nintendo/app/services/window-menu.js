import { setup as getMenuTemplate } from "picasa/utils/window-menu";
import Service from "@ember/service";
import { defaults } from "lodash/object";
import { debounce } from "@ember/runloop";
import { later } from "@ember/runloop";
import Evented from "@ember/object/evented";
import I18nMixin from "ember-i18next/mixins/i18n";
import EventNames from "picasa/constants/event-name";
import { info } from "picasa/utils/logger";

export default Service.extend(Evented, I18nMixin, {
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
    debounce(this, this._prepareMenu, 150);
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
      menuName: "Ghost",
      click: () => {},
      name: "default-name",
      label: "Default label",
      accelerator: undefined,
      addSeperator: false,
      position: undefined,
    };
    const options = defaults(params, predefined);
    const injections = this.injections;
    const hasInjection = injections.find((item) => item.name === options.name);
    const injection = {
      name: options.name,
      injection: (template) => {
        const menu = template.find((item) => item.label === options.menuName);
        const newItem = {
          label: options.label,
          accelerator: options.accelerator,
          click: options.click,
        };

        // Insert item into the menu
        if (menu && menu.submenu) {
          const sepPosition = options.position - 1 || menu.submenu.length;
          const insertPosition = options.position || menu.submenu.length || 0;

          if (options.addSeperator) {
            menu.submenu.insertAt(sepPosition, {
              type: "separator",
            });
          }

          menu.submenu.insertAt(insertPosition, newItem);
        }

        return template;
      },
    };

    if (!hasInjection) {
      injections.pushObject(injection);
      this.set("injections", injections);
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
      this.set("preferencesCallback", preferencesCallback);
      this.set("blogs", blogs);
      later(this, "setup");
    }
  },

  /**
   * Setups the window menu for the application
   */
  _prepareMenu() {
    const remote = requireNode("@electron/remote");
    const { Menu } = remote;
    const template = getMenuTemplate(this.t.bind(this));

    this._injectBlogs(template);
    this._injectPreferences(template);
    this._injectShortcuts(template);
    this._processInjections(template);

    Menu.setApplicationMenu(Menu.buildFromTemplate(template));
  },

  dispatchEvent(name, item, focusedWindow) {
    info(`${name} event is fired.`);
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
      template.forEach((item) => {
        if (item && item.label && item.label === "View") {
          item.submenu.insertAt(2, {
            type: "separator",
          });
          item.submenu.insertAt(2, {
            label: "Labs",
            accelerator: "CmdOrCtrl+Alt+L",
            name: "open-labs",
            click: (item, focusedWindow) =>
              this.dispatchEvent("openSettingsLabs", item, focusedWindow),
          });
          item.submenu.insertAt(2, {
            label: "Apps",
            accelerator: "CmdOrCtrl+Alt+A",
            name: "open-apps",
            click: (item, focusedWindow) =>
              this.dispatchEvent("openSettingsApps", item, focusedWindow),
          });
          item.submenu.insertAt(2, {
            label: "Code Injection",
            accelerator: "CmdOrCtrl+Alt+C+I",
            name: "open-code-injection",
            click: (item, focusedWindow) =>
              this.dispatchEvent(
                "openSettingsCodeInjection",
                item,
                focusedWindow
              ),
          });
          item.submenu.insertAt(2, {
            label: "Tags",
            accelerator: "CmdOrCtrl+Alt+T",
            name: "open-tags",
            click: (item, focusedWindow) =>
              this.dispatchEvent("openSettingsTags", item, focusedWindow),
          });
          item.submenu.insertAt(2, {
            label: "Navigation",
            accelerator: "CmdOrCtrl+Alt+N",
            name: "open-navigation",
            click: (item, focusedWindow) =>
              this.dispatchEvent("openSettingsNavigation", item, focusedWindow),
          });
          item.submenu.insertAt(2, {
            label: "General",
            accelerator: "CmdOrCtrl+Alt+G",
            name: "open-general",
            click: (item, focusedWindow) =>
              this.dispatchEvent("openSettingsGeneral", item, focusedWindow),
          });
          item.submenu.insertAt(2, {
            type: "separator",
          });
          item.submenu.insertAt(2, {
            label: "Team",
            accelerator: "CmdOrCtrl+Alt+T",
            name: "open-team",
            click: (item, focusedWindow) =>
              this.dispatchEvent("openTeam", item, focusedWindow),
          });
          item.submenu.insertAt(2, {
            label: "Content",
            accelerator: "CmdOrCtrl+Alt+L",
            name: "open-content",
            click: (item, focusedWindow) =>
              this.dispatchEvent("openContent", item, focusedWindow),
          });
          item.submenu.insertAt(2, {
            label: "New Post",
            accelerator: "CmdOrCtrl+Alt+C",
            name: "open-new-post",
            click: (item, focusedWindow) =>
              this.dispatchEvent("openNewPost", item, focusedWindow),
          });
          item.submenu.insertAt(2, {
            type: "separator",
          });
        }

        if (item && item.label && item.label === "Edit") {
          item.submenu.insertAt(2, {
            label: "Open Preview",
            accelerator: "CmdOrCtrl+P",
            name: "open-preview",
            click: (item, focusedWindow) =>
              this.dispatchEvent(EventNames.OpenPreview, item, focusedWindow),
          });
        }
        if (
          item &&
          item.label &&
          item.label === this.t("folder.management.label")
        ) {
          item.submenu.insertAt(0, {
            label: this.t("folder.management.add"),
            accelerator: "CmdOrCtrl+D",
            name: "add-folder",
            click: (item, focusedWindow) =>
              this.dispatchEvent(
                EventNames.OpenFolderSelection,
                item,
                focusedWindow
              ),
          });
          item.submenu.insertAt(1, {
            label: this.t("folder.management.import"),
            accelerator: "CmdOrCtrl+D",
            name: "import-folder",
            click: (item, focusedWindow) =>
              this.dispatchEvent(
                EventNames.ImportFromFolder,
                item,
                focusedWindow
              ),
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
      template.forEach((item) => {
        if (item && item.label && item.label === "View") {
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
      template.forEach((menuItem) => {
        if (
          (menuItem && menuItem.label && menuItem.label === "The Picasa") ||
          menuItem.label === "Electron" ||
          menuItem.label === this.t("file.label")
        ) {
          menuItem.submenu.forEach((subMenuItem) => {
            if (
              subMenuItem &&
              subMenuItem.label &&
              subMenuItem.label === this.t("preferences.label")
            ) {
              subMenuItem.click = (item, focusedWindow) =>
                this.dispatchEvent(
                  EventNames.OpenPreferences,
                  item,
                  focusedWindow
                );
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
      injections.forEach((item) => {
        if (item.injection && typeof item.injection === "function") {
          processedTemplate = item.injection(processedTemplate);
        }
      });
    }

    return processedTemplate;
  },
});
