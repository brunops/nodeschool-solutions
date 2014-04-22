var through = require('through');
var split = require('split');

var even = false;

var tr = through(function (buf) {
  buf = buf.toString();
  if (even) {
    buf = buf.toUpperCase();
  }
  else {
    buf = buf.toLowerCase();
  }
  even = !even;
  this.queue(buf + "\n");
});

process.stdin
  .pipe(split())
  .pipe(tr)
  .pipe(process.stdout);

