var fs = require('fs');

fs.readdir(process.argv[2], function (err, list) {
  var regex = new RegExp('\.' + process.argv[3] + '$');
  
  list.forEach(function (filename) {
    if (regex.test(filename)) {
      console.log(filename);
    }
  });
});

