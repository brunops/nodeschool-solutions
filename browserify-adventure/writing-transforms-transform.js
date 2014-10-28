var through = require('through2');
var sprintf = require('sprintf');

var lineNumber = 0;

module.exports = through(function (buf, enc, next) {
  if (lineNumber % 5 === 0) {
    this.push(sprintf("%3d %s", lineNumber, buf.toString()));
  }
  else {
    this.push(sprintf("    %s", buf.toString()));
  }
  this.push('\n');
  lineNumber++;

  next();
});

