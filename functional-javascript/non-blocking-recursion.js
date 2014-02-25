function repeat(fn, num) {
  if (!num) return;

  fn();

  if (num % 200 === 0) {
    setTimeout(function() {
      repeat(fn, --num);
    }, 0);
  }
  else {
    repeat(fn, --num);
  }
}

module.exports = repeat;
