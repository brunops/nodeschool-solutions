var through = require('through');
var zlib = require('zlib');
var tar = require('tar');
var crypto = require('crypto');

var gunzip = zlib.createGunzip();
var parser = tar.Parse();
var stream = crypto.createDecipher(process.argv[2], process.argv[3]);

parser.on('entry', function(entry) {
  if (entry.type === 'File') {
    var md5 = crypto.createHash('md5', { encoding: 'hex' });

    entry.pipe(md5).pipe(through(function(buf) {
      this.queue(buf.toString() + ' ' + entry.path + '\n');
    })).pipe(process.stdout);
  }
});

process.stdin.pipe(stream).pipe(gunzip).pipe(parser);

