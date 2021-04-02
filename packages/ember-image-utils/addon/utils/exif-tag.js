import { Promise } from "rsvp";
import EXIF from "EXIF";
import fetchImage from "./fetch-image";

export function getExifTags(img) {
  return new Promise(function(resolve) {
    EXIF.getData(img, function() {
      resolve(EXIF.getAllTags(this));
    });
  });
}

export default function queryExifTags(src) {
  return fetchImage(src).then(img => {
    return getExifTags(img);
  });
}
