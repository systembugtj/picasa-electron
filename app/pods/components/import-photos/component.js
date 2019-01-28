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
  importStarted: () => {},
  importFinished: () => {},

  folders: undefined, // folders to save imported folders.

  importFolder(path) {
    this.importStarted();
    this.get("photoImport").import(path)
      .subscribe(photo => {
        this.set("fileInProgress", photo.file);
      }, () => {
        this.set("showImportDialog", false);
      }, () => {
        this.importFinished();
        this.set("showImportDialog", false);
      })
  },

  actions: {
    startImport() {
      this.importFolder(this.get("source"));
    },
    stopImport() {
      // should allow stop?
    }
  }
});
