var split = require('split');
var through = require('through');

process.stdin
  .pipe(split())
  .pipe(through(transform()))
  .pipe(process.stdout);

function transform(buf) {
  var count = 0;

  return function(buf) { 
    if (count++ % 2)
      this.queue(buf.toString().toUpperCase() + '\n');
    else
      this.queue(buf.toString().toLowerCase() + '\n');
  }
}
