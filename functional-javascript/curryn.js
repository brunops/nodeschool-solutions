function curryN(fn, n) {
  n = typeof n !== 'undefined' ? n : fn.length;

  if (n) {
    return function(arg) {
      return curryN(fn.bind(null, arg), n - 1);
    }
  }
  else {
    return fn();
  }
}

module.exports = curryN;
