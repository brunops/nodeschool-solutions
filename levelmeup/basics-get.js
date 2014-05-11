var level = require('level');
var db = level(process.argv[2]);

for (var i = 0; i <= 100; ++i) {
  (function (currKey) {
    db.get(currKey, function (err, data) {
      if (err) {
        return;
      }

      console.log("%s=%s", currKey, data);
    });
  }("key" + i));
}

