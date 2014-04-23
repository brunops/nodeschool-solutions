var through = require('through');
var http = require('http');

var port = process.argv[2];

function write(buf) {
  this.queue(buf.toString().toUpperCase());
}
function end() {
  this.queue(null);
};

http.createServer(function (req, res) {
  if (req.method === 'POST') {
    req.pipe(through(write, end)).pipe(res);
  }
}).listen(port);

