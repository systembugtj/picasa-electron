import { uniqueName } from "picasa/utils/folder-reader";
import { from } from "rxjs";
import { map, reduce } from "rxjs/operators";

export function normalizeImages(root, images, usePromise) {
  usePromise = usePromise || true;
  const ob = from(images).pipe(
      map(image => {
        const path = `${root}/${image}`;
        return {
          root,
          name: image,
          path,
          uniqueName: uniqueName(path)
        };
      }),
      reduce((images, image) => {
        images.push(image);
        return images;
      }, [])
    );
  return usePromise ? ob.toPromise() : ob;
}

export function normalizeImage(root, image) {
  const path = requireNode("path");
  return {
    root,
    name: path.basename(image),
    path: image,
    uniqueName: uniqueName(image)
  };
}
