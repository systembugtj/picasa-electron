import Route from '@ember/routing/route';
import queryExifTags from "dummy/utils/exif-tag";

export default Route.extend({
  model() {
    const src = "https://raw.githubusercontent.com/exif-js/exif-js/master/example/dsc_09827.jpg";
    return queryExifTags(src).then(tags => {
      return {
        src,
        tags: JSON.stringify(tags)
       }
    })
  }
});
