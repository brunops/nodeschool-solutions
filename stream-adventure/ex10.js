var trumpet = require('trumpet');
var through = require('through');

var tr = trumpet();
var stream = tr.select('.loud').createStream();

process.stdin.pipe(tr).pipe(process.stdout);
stream.pipe(through(writeUpcase, end)).pipe(stream);

function writeUpcase(buf) {
  this.queue(buf.toString().toUpperCase());
}

function end() {
  this.queue(null);
}
