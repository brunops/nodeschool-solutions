var fs = require('fs');
var path = require('path');

fs.readdir(process.argv[2], function (err, list) {
  list.forEach(function (filename) {
    if (path.extname(filename) === '.' + process.argv[3]) {
      console.log(filename);
    }
  });
});

