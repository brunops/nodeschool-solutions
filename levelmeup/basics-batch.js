var fs = require('fs');
var level = require('level');
var db = level(process.argv[2]);

var operations = [];

fs.readFile(process.argv[3], function (err, data) {
  if (err)
    throw err;

  var lines = data.toString().split('\n');

  operations = lines.map(function (line) {
    var params = line.split(','),
        op = {
          type: params[0],
          key: params[1]
        };

    if (params[2]) {
      op.value = params[2];
    }

    console.log(op);

    return op;
  });

  db.batch(operations, function (err) {
    if (err)
      console.error(err);
  });
}); 
    
