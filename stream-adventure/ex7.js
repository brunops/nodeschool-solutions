var through = require('through');
var http = require('http');

var server = http.createServer(function(req, res) {
  if (req.method === 'POST') {
    req.pipe(through(writeUpcase, end)).pipe(res);
  }
});

function writeUpcase(buf) {
  this.queue(buf.toString().toUpperCase());
}

function end() {
  this.queue(null);
}

server.listen(process.argv[2]);
