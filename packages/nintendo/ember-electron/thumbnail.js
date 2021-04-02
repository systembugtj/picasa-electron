const sharp = require("sharp");

module.exports = {
  init: function(ipc, mainWindow, logger) {
    ipc.on('picasa-create-thumbnail', function(event, arg) {
      sharp(arg.path)
          .resize(arg.width, arg.height, {
            fit: sharp.fit.inside,
            withoutEnlargement: arg.withoutEnlargement
          })
          .toFormat('jpeg')
          .toFile(arg.thumbnail)
          .then(i => {
            logger.info(i);
            return arg.thumbnail;
          })
          .catch(err => {
            logger.error(err);
            return arg.thumbnail;
          }).then(() => {
            // Notify render process
            mainWindow && mainWindow.webContents.send("picasa-thumbnail-ready", arg);
          });
    })
  },

}
