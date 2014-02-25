module.exports = function countWords(words) {
  return words.reduce(function(wordsTotal, word) {
    (++wordsTotal[word]) || (wordsTotal[word] = 1);
    return wordsTotal;
  }, {});
};

