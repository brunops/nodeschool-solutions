var fs = require('fs');

fs.readFile(process.argv[2], 'utf8', function(err, contents) {
  if (err) return 1;
  console.log(contents.split('\n').length - 1);
});
