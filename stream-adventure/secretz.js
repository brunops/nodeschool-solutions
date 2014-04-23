var tar = require('tar');
var parser = tar.Parse();
var crypto = require('crypto');
var through = require('through');

var gunzipStream = require('zlib').createGunzip();
var cypherStream = crypto.createDecipher(process.argv[2], process.argv[3]);

parser.on('entry', function (e) {
  var md5Stream = crypto.createHash('md5', { encoding: 'hex' });
  
  if (e.type !== 'File') {
    return;
  }

  e.pipe(md5Stream)
  .pipe(through(function (buf) {
    this.queue(buf.toString());
  }, function () {
    this.queue(" " + e.path + "\n");
    this.queue(null);
  }))
  .pipe(process.stdout);
});

process.stdin.pipe(cypherStream).pipe(gunzipStream).pipe(parser);
