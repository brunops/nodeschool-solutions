module.exports = function arrayMap(array, fn) {
  return array.reduce(function(prev, curr, index, array) {
    prev.push(fn.call(null, curr, index, array));
    return prev;
  }, []);
};
