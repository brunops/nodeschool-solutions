var trumpet = require('trumpet');
var through = require('through');

var tr = trumpet();
var stream = tr.select('.loud').createStream();

process.stdin.pipe(tr).pipe(process.stdout);
stream
  .pipe(through(function (buf) { this.queue(buf.toString().toUpperCase()); }))
  .pipe(stream)


