import { Promise } from 'rsvp';
import getElectronApp from "./electron-api";

const os = requireNode("os");
const glob = requireNode("glob");

export default function folderReader(target, options) {

  options = options || {};
  target = target || '~/';
  options.cwd = target;

  return new Promise((resolve, reject) => {
    // options is optional
    glob("**/*.+(png|jpg|jpeg|gif)", options, (error, files) => {
      // files is an array of filenames.
      // If the `nonull` option is set, and nothing
      // was found, then files is ["**/*.js"]
      // er is an error object or null.
      if (error != null) {
        reject(error);
      } else {
        resolve({
          "cwd": options.cwd,
          "images": files
        });
      }
    });
  });
}

export const FOLDERS = {
  DESKTOP: "desktop",
  DOCUMENT: "document",
  APPDATA: "appData",
  HOME: "home"
}

export function specialFolder(name) {
  return getElectronApp().getPath(name);
}

export function hostname() {
  return os.hostname();
}

export function uniqueName(path) {
  const spark = requireNode("spark-md5");
  return  spark.hash(path);
}
