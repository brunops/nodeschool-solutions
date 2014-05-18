var http = require('http'),
    fs = require('fs'),
    async = require('async');

var filename = process.argv[2];

async.waterfall([
  function (cb) {
    fs.readFile(filename, 'utf-8', function (err, data) {
      if (err) {
        return cb(err);
      }

      cb(null, data);
    });
  },

  function (data, cb) {
    var body = '';

    http.get(data, function (res) {
      res.on('data', function (chunk) {
        body += chunk.toString();
      })
      .on('end', function () {
        cb(null, body);
      });
    })
    .on('error', function (err) {
      cb(err);
    });
  }
], function (err, result) {
    
    if (err) {
      return console.error(err);
    }

    console.log(result);
});


