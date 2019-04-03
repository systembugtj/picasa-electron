import Service from '@ember/service';
import { getElectronApp, getElectronDialog, getElectronIpc } from "picasa/utils/electron-api";

export default class ElectronApiService extends Service {
  get app() {
    return getElectronApp();
  }
  get dialog() {
    return getElectronDialog();
  }
  get ipc() {
    return getElectronIpc();
  }

  send(message, arg) {
    this.ipc.send(message, arg);
  }
}
