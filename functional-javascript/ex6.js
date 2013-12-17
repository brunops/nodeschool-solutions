module.exports = countWords;

function countWords(ary) {
  return ary.reduce(function(prev, curr) {
    prev[curr] = ++prev[curr] || 1;
    return prev;
  }, {});
}
