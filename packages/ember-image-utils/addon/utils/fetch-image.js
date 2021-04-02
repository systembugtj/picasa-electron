import { Promise } from "rsvp";

export default function fetchImage(src) {
  return new Promise(function(resolve, reject) {
    const image = new Image();
    image.onload = () => {
      resolve(image);
    }
    image.onerror = reject;
    image.src = src;
  })
}
