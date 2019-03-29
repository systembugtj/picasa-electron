import Service from '@ember/service';
import { getElectronApp, getElectronDialog } from "picasa/utils/electron-api";

export default class ElectronApiService extends Service {
  get app() {
    return getElectronApp();
  }
  get dialog() {
    return getElectronDialog();
  }
}
