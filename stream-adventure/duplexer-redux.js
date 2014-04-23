var duplexer = require('duplexer');
var through = require('through');

module.exports = function (counter) {
  var count = {};
  var tr = through(function (buf) {
    count[buf.country] = count[buf.country] ? count[buf.country] + 1 : 1;
  }, function () {
    counter.setCounts(count);
  });
  
  return duplexer(tr, counter);
};

