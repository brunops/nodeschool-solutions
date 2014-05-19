var http = require('http'),
    async = require('async');

var url = process.argv[2];

async.reduce(['one', 'two', 'three'], 0, function (memo, item, cb) {
  http.get(url + '?number=' + item, function (res) {
    var body = '';
    res.on('data', function (chunk) {
      body += chunk.toString();
    });

    res.on('end', function () {
      cb(null, memo + parseInt(body, 10));
    });
  }).on('error', function (err) {
    return console.error(err);
  });
}, function (err, result) {
  if (err) {
    return console.error(err);
  }

  console.log(result);
});



