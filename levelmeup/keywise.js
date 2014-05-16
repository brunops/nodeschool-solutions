var db = require('level')(process.argv[2], { valueEncoding: 'json' });
var data = require(process.argv[3]);

var operations = [];
data.forEach(function (entry) {
  var key;
  if (entry.type === 'user') {
    key = entry.name;
  }
  else {
    key = entry.user + "!" + entry.name;
  }

  operations.push({
    type: 'put',
    key: key,
    value: entry
  });
});

db.batch(operations);

