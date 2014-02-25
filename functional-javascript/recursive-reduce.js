function reduce(array, fn, init) {
  var arrayDup = array.slice(), i = 0;

  return (function recursiveReduce(arrayDup, fn, init) {
    return arrayDup.length ? recursiveReduce(arrayDup, fn, fn(init, arrayDup.shift()), i++, array) : init;
  }(arrayDup, fn, init));
}

module.exports = reduce;
