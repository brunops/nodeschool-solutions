function repeat(operation, num) {
  return num
  ? function() { operation(); return repeat(operation, num - 1); } 
  : 0;
}

function trampoline(fn) {
  var result = fn();

  while (result && typeof result === 'function') {
    result = result.apply(result, arguments);
  }

  return result;
}

module.exports = function(operation, num) {
  return trampoline(repeat(operation, num));
}

