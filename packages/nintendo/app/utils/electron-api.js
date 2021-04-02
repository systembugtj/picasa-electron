const { ipcRenderer } = requireNode("electron");
const remote = requireNode("@electron/remote");

export function getElectronApp() {
  return remote.app;
}

export function getElectronDialog() {
  return remote.dialog;
}

export function getElectronIpc() {
  return ipcRenderer;
}
