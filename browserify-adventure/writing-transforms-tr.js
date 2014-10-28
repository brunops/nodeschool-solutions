var through = require('through2');
var split = require('split');
var quote = require('quote-stream');
var combiner = require('stream-combiner2');

var ftr = require('./writing-transforms-transform');

module.exports = function (file) {
  if (!/\.txt$/.test(file)) return through();

  var prefix = through();
  prefix.push('module.exports=');

  return combiner([ split(), ftr, quote(), prefix ]);
}; 
