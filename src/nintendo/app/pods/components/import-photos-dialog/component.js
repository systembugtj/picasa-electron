import Component from '@ember/component';
import I18nMixin from 'ember-i18next/mixins/i18n';
import { inject } from '@ember/service';
import { action, computed } from '@ember/object';

export default class ImportPhotosDialog extends Component.extend(I18nMixin) {
  @inject photoImport;

  @computed
  get folderSelectLabel() {
      return this.t("import.select.label")
  }

  importing = false;

  @computed("folders")
  get selectedFolder() {
      return this.get('folders').objectAt(0);
  }

  importStarted = () => {};
  importFinished =  () => {};
  folders = undefined; // folders to save imported folders.

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
  }

  @action
  startImport() {
    this.importFolder(this.get("source"));
  }
  @action
  stopImport() {
    // should allow stop?
  }

  @action
  cancelImport() {
    this.importFinished();
  }
}
