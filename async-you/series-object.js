var http = require('http'),
    async = require('async');

async.series({
  requestOne: function (cb) {
    http.get(process.argv[2], function (res) {
      var body = '';
      res.on('data', function (chunk) {
        body += chunk.toString();
      }).on('end', function () {
        cb(null, body);
      });
    }).on('error', function (err) {
      return cb(err);
    });
  },

  requestTwo: function (cb) {
    http.get(process.argv[3], function (res) {
      var body = '';
      res.on('data', function (chunk) {
        body += chunk.toString();
      }).on('end', function () {
        cb(null, body);
      });
    }).on('error', function (err) {
      return cb(err);
    });
  }
}, function (err, result) {
  if (err) {
    return console.error(err);
  }

  console.log(result);
});


