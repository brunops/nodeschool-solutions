var combine = require('stream-combiner');
var split = require('split');
var through = require('through');
var zlib = require('zlib');


module.exports = function () {
  var genreInfo;

  function write(buf) {
    if (buf.length === 0) {
      return;
    }

    buf = JSON.parse(buf);
    if (buf.type === 'genre') {
      if (genreInfo) {
        this.queue(JSON.stringify(genreInfo) + '\n');
      }

      genreInfo = {
        name: buf.name,
        books: []
      }
    }
    else {
      genreInfo.books.push(buf.name);
    }
  }

  function end() {
    this.queue(JSON.stringify(genreInfo) + '\n');
    this.queue(null);
  };

  return combine(
    //process.openStdin(),
    split(),
    through(write, end),
    zlib.createGzip()
    //process.stdout    
  );
};

