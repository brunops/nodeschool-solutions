var through = require('through');
var fs = require('fs');
var Hapi = require('hapi');

var server = Hapi.createServer('localhost', Number(process.argv[2]) || 8080);

server.route({
  method: 'GET',
  path: '/',
  handler: function (req, rep) {
    var data = fs.createReadStream(__dirname + '/stream-text.txt');

    rep(data.pipe(through(function (buf) {
      this.queue(rot13(buf.toString()));
    }, function () {
      this.queue(null);
    })));
  }
});

server.start();

var alphabet = 'abcdefghijklmnopqrstuvwxyz',
    rot13Alphabet = rotate(alphabet, 13);

// Map rot13 letters
var rot13Map = alphabet.split('').reduce(function (prev, curr, idx, arr) {
  prev[alphabet[idx]] = rot13Alphabet[idx];
  prev[alphabet[idx].toUpperCase()] = rot13Alphabet[idx].toUpperCase();

  return prev;
}, {});

function rot13(text) {
  return text.split('').map(rot13Char).join('');
}

function rot13Char(c) {
  return rot13Map[c] || c;
}

function rotate(text, size) {
  text = text.split('');

  while (size--) {
    text.unshift(text.pop());
  }

  return text.join('');
}

