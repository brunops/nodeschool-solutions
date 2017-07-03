let filterDir = require('./filter-dir');

let dirPath = process.argv[2];
let extension = process.argv[3];

filterDir(dirPath, extension, (err, list) => {
  if (err) {
    console.log('An error happened when reading ' + dirPath);
    return err;
  }
  
  list.forEach((filename) => {
    console.log(filename);
  });
});
