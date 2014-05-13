
module.exports = function (db, date, callback) {
  var count = 0,
      stream = db.createReadStream({ start: date });

  stream.on('data', function (data) {
    count++;
  });

  stream.on('error', function (err) {
    db.close();
    callback(err);
  });

  stream.on('end', function () {
    callback(null, count);
  });
};

  
