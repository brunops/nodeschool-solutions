var fs = require('fs');
var path = require('path');

module.exports = (dirPath, extension, cb) => {
  var filteredFiles = [];  

  fs.readdir(dirPath, (err, list) => {
    if (err) {
      return cb(err);
    }

    list.forEach((file) => {
      if (path.extname(file) === '.' + extension) {
        filteredFiles.push(file);
      }
    });

    cb(null, filteredFiles);
  });
};

