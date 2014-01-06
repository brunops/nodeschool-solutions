function curryN(fn, n) {
  var n = typeof n !== 'undefined' ? n : fn.length;

  if (n > 1) {
    return function(arg) {
      return curryN(fn.bind(fn, arg), n - 1);
    };
  }
  else {
    return function(arg) {
      return fn(arg);
    }
  }
}

module.exports = curryN;
