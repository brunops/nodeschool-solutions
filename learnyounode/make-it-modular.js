var filterDir = require('./filter-dir');

var dirPath = process.argv[2],
    extension = process.argv[3];

filterDir(dirPath, extension, function (err, list) {
  if (err) {
    console.log('An error happened when reading ' + dirPath);
    return err;
  }
  
  list.forEach(function (filename) {
    console.log(filename);
  });
});
