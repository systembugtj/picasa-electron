import { uniqueName } from "picasa/utils/folder-reader";
import { from } from "rxjs";
import { map, reduce } from "rxjs/operators";
import Promise from "rsvp";
import scanFolderForImages from "picasa/utils/folder-reader";

const path = requireNode("path");

export function normalizeImages(root, images, usePromise) {
  usePromise = usePromise || true;
  const ob = from(images).pipe(
      map(image => normalizeImage(root, image)),
      reduce((images, image) => {
        images.push(image);
        return images;
      }, [])
    );
  return usePromise ? ob.toPromise() : ob;
}

/**
 * Normalize root and relative path of image.
 * @return { Object }
 * root the root path of image
 * name the file name with extension
 * path relative path to root
 * uniqueName the hash-code generated from full path (root/path)
 */
export function normalizeImage(root, image) {
  const path = requireNode("path");

  if (!image) {
    image = path.basename(root);
    root = path.dirname(root);
  }
  const fullPath = path.join(root, image);
  return {
    root,
    name: path.basename(image),
    path: image,
    fullPath,
    uniqueName: uniqueName(fullPath)
  };
}

/**
 * list files from path.
 * @param {array} paths
 */
export function listFiles(paths) {
  const promises = [];
  paths.forEach(path => {
    // scanFolderForImages return { cwd, files }
    const promise = scanFolderForImages(path);
    promises.push(promise);
  });
  // TODO: request scan service.
  return Promise.all(promises);
}

export function breakdownWithPath(results) {
  const splitted = {};
  // array of [ { cwd, images }]
  results.forEach(folder => {
    // folder is { cwd, images }.
    splitted[folder.cwd] = {
      cwd: folder.cwd,
      images: [],
    }

    folder.images.forEach(image => {
      const fullPath = path.join(folder.cwd, image);
      const cwd = path.dirname(fullPath);
      const fileName = path.basename(fullPath);
      if (!splitted[cwd]) {
        splitted[cwd] = {
          cwd,
          images: [],
        }
      }
      splitted[cwd].images.push(fileName);
    })

  });
  const folders = [];
  Object.keys(splitted).forEach(key => {
    folders.push(splitted[key]);
  });

  return folders;
}

export function toModel(folders) {
  const promises = [];
  folders.forEach(folder => {
    const promise = normalizeImages(folder.cwd, folder.images)
      .then(images => {
        folder.images = images
        return folder;
      })
      promises.push(promise);
  })
  return Promise.all(promises);
}
