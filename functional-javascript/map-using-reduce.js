module.exports = function arrayMap(arr, fn) {
  return arr.reduce(function(prev, curr, index, array) {
    return prev.concat(fn.call(null, curr, index, array));
  }, []);
}
