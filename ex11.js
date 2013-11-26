var fs = require('fs');
var http = require('http');

http.createServer(function(req, res) {
  var stream = fs.createReadStream(process.argv[2]);
  stream.pipe(res);
}).listen(8000);

