var through = require('through');

process.stdin.pipe(through(function (buf) {
  this.queue(buf.toString().toUpperCase());
}, function () {
  this.queue(null);
})).pipe(process.stdout);

