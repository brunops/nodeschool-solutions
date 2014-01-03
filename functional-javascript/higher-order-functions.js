module.exports = repeat;

function repeat(fn, num) {
  return num ? fn() : repeat(fn, --num);
}
