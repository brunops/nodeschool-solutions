var db = require('level')(process.argv[2], { valueEncoding: 'json' });
var data = require(process.argv[3]);

var operations = [];
data.forEach(function (entry) {
  if (entry.type === 'user') {
    operations.push({ type: 'put', key: entry.name, value: entry });
  }
  else if (entry.type === 'repo') {
    operations.push({ type: 'put', key: entry.user + "!" + entry.name, value: entry });
  }
});

db.batch(operations);

