module.exports.init = function (db, words, cb) {
  var ops = [];

  words.forEach(function (word) {
    var key = word.length + '!' + word;

    ops.push({ type: 'put', key: key, value: word });
  });
 
  db.batch(ops, cb);
};

module.exports.query = function (db, word, cb) {
  var length = word.length,
      word = word.replace(/\*/g, ''),
      key = length + '!' + word,
      words = [];

  db.createReadStream({ start: key, end: key + '\xff' })
    .on('data', function (data) {
      words.push(data.value);
    })
    .on('error', function (err) {
      cb(err);
      throw err;
    })
    .on('end', function () {
      cb(null, words);
    });
};

