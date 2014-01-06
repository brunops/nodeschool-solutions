function repeat(operation, num) {
  // Modify this so it doesn't cause a stack overflow!
  if (num <= 0) return
  operation()
  return repeat(operation, --num)
}

function trampoline(fn) {
  // You probably want to implement a trampoline!

  var result = fn.apply(fn, arguments);
  while (typeof result === 'function') {
    result = result();
  }

  return result;
}

module.exports = function(operation, num) {
  // You probably want to call your trampoline here!
  return repeat(operation, num)
}

