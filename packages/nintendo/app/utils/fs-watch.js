

const chokidar = requireNode("chokidar");

export default function createWatcher() {
  return chokidar.watch(...arguments);
}
