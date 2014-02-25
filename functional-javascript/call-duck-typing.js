function duckCount() {
  return Array.prototype.slice.call(arguments).reduce(function(prev, curr) {
    return prev + (Object.prototype.hasOwnProperty.call(curr, 'quack') ? 1 : 0);
  }, 0);
}

module.exports = duckCount;
