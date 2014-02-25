function repeat(operation, num) {
  if (!num) return;
  return function() {
    operation();
    return repeat(operation, --num);
  }
}

function trampoline(fn) {
  while (fn());
}

module.exports = function(operation, num) {
  return trampoline(repeat(operation, num));
};

