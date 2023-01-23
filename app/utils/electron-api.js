const { ipcRenderer, remote } = requireNode('electron');


export function getElectronApp() {
  return remote.app;
}

export function getElectronDialog() {
  return remote.dialog;
}

export function getElectronIpc() {
  return ipcRenderer;
}
