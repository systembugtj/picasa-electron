

export default function createWatcher() {
  const chokidar = requireNode("chokidar");
  return chokidar.watch(...arguments);
}
