var fs = require('fs');
var path = require('path');

module.exports = function (dirPath, extension, cb) {
  var filteredFiles = [];  

  fs.readdir(dirPath, function (err, list) {
    if (err) {
      return cb(err);
    }

    list.forEach(function (file) {
      if (path.extname(file) === '.' + extension) {
        filteredFiles.push(file);
      }
    });

    cb(null, filteredFiles);
  });
};

