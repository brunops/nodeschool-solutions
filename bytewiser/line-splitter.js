var fs = require('fs');

var filepath = process.argv[2];

fs.readFile(filepath, function (err, buf) {
  
  for (var prev = 0, curr = 0; curr < buf.length; ++curr) {
    if (buf[curr] === 0x0a) {
      console.log(new Buffer(buf.slice(prev, curr)));
      prev = curr + 1;
    }
  }
  // last line
  console.log(new Buffer(buf.slice(prev, buf.length - 1)));
});

