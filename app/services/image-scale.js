import Service from '@ember/service';

export default Service.extend({
  uniqueName(path) {
    const spark = requireNode("spark-md5");
    return  spark.hash(path);
  },

  fileExist(file) {
    return new Promise(resolve => {
      const fs = requireNode('fs');

      fs.access(file, fs.constants.F_OK, (err) => {
        resolve(!err);
      });
    });
  },

  createThumbnail(path, thumbnail) {
    const sharp = requireNode("sharp");
    return sharp(path)
      .resize(100, 100, {
        fit: sharp.fit.inside,
        withoutEnlargement: true
      })
      .toFormat('jpeg')
      .toFile(thumbnail)
      .then(info => {
        console.log(info);
        return thumbnail;
      })
      .catch(err => {
        console.log(err);
        return thumbnail;
      });
  }
});
