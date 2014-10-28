var fs = require('fs');
var sprintf = require('sprintf');

var src = fs.readFileSync('/usr/local/lib/node_modules/browserify-adventure/problems/using_transforms/wake.txt', 'utf8');

src.split('\n').forEach(function (line, index) {
  if (index % 5 === 0) {
    console.log(sprintf("%3d %s", index, line));
  }
  else {
    console.log(sprintf("    %s", line));
  }
});

