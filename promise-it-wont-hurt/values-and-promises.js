var q = require('q');

function attachTitle(arg) {
  return 'DR. ' + arg;
}

var defer = q.defer();

defer.promise
  .then(attachTitle)
  .then(console.log);

defer.resolve('MANHATTAN');

