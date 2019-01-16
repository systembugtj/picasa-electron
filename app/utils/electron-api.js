export default function getElectronApp() {
  const { app } = requireNode('electron').remote;
  return app;
}
