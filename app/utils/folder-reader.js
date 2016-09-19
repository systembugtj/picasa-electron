import Ember from "ember";

export default function folderReader(target='~/', options) {
  let glob = requireNode("glob");
  options = options || {};

  options.cwd = target

  return new Ember.RSVP.Promise(function(resolve, reject){
    // options is optional
    glob("**/*.png", options, function (er, files) {
      // files is an array of filenames.
      // If the `nonull` option is set, and nothing
      // was found, then files is ["**/*.js"]
      // er is an error object or null.
      if (er != null) {
        reject(er);
      } else {
        resolve({
          "cwd": options.cwd, 
          "images": files
        });
      }
    })
  });
}
