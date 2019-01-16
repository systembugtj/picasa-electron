import { Promise } from 'rsvp';
import getElectronApp from "./electron-api";

export default function folderReader(target, options) {
  let glob = requireNode("glob");
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
}

export function specialFolder(name) {
  return getElectronApp().getPath(name);
}
