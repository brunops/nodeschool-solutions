function Spy(target, method) {
  var spy = { count: 0 };
  var oldMethod = target[method];

  target[method] = function() {
    spy.count++;
    return oldMethod.apply(target, Array.prototype.slice.call(arguments));
  };

  return spy;
}

module.exports = Spy;
