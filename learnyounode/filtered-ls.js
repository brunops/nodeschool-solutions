const fs = require('fs');
const path = require('path');

fs.readdir(process.argv[2], (err, list) => {
  list.forEach((filename) => {
    if (path.extname(filename) === '.' + process.argv[3]) {
      console.log(filename);
    }
  });
});

