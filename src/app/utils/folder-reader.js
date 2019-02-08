import { Promise } from 'rsvp';
import getElectronApp from "./electron-api";
import { isArray } from "lodash/lang";
import { join } from "lodash/array";

const os = requireNode("os");
const glob = requireNode("glob");
const spark = requireNode("spark-md5");

export default function scanFolderForImages(target, options, ext) {
  ext = ext || "png|jpg|jpeg|gif";
  if (isArray(ext)) {
    ext = join(ext, "|");
  }

  options = options || {};
  options.cwd = target || '~/';

  return new Promise((resolve, reject) => {
    // options is optional
    glob(`**/*.+(${ext})`, options, (error, files) => {
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
  return  spark.hash(path);
}
