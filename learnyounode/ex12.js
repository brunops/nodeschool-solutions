var http = require('http');
var map  = require('through2-map');

http.createServer(function(req, res) {
  if (req.method === "POST") {
    req.pipe(map(function(chunk) {
      return chunk.toString().toUpperCase();
    })).pipe(res);
  }
  else {
    return res.end('only posts allowed, sir!');
  }
}).listen(8000);
