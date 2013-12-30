var slice = Array.prototype.slice;

module.exports = logger;

function logger(prefix) {
  return function() {
    var args = slice.call(arguments);
    args.unshift(prefix);

    console.log.apply(null, args);
  }
}
