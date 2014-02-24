function repeat(fn, num) {
  if (!num) return;

  fn();
  return repeat(fn, num - 1);
}

module.exports = repeat;
