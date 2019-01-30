import Component from '@ember/component';
import I18nMixin from 'ember-i18next/mixins/i18n';
import { inject as service } from '@ember/service';
import { computed } from "@ember/object";

export default Component.extend(I18nMixin, {
  photoImport: service(),
  folderSelectLabel: computed("", {
    get() {
      return this.t("import.select.label")
    }
  }),

  importing: false,

  selectedFolder: computed("folders", {
    get() {
      return this.get('folders').objectAt(0);
    }
  }),

  importStarted: () => {},
  importFinished: () => {},

  folders: undefined, // folders to save imported folders.

  importFolder(path) {
    this.set("importing", true);
    this.importStarted();
    this.get("photoImport").import(path)
      .subscribe(photo => {
        this.set("fileInProgress", photo.file);
      }, error => {
        this.importFinished(error);
        this.set("importing", false);
      }, () => {
        this.importFinished();
        this.set("importing", false);
      })
  },

  actions: {
    startImport() {
      this.importFolder(this.get("source"));
    },
    stopImport() {
      // should allow stop?
    },
    cancelImport() {
      this.importFinished();
    }
  }
});
