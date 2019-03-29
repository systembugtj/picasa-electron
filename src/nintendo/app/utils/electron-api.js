const { dialog } = requireNode('electron').remote;
const { app } = requireNode('electron').remote;

export function getElectronApp() {
  return app;
}

export function getElectronDialog() {
  return dialog;
}
