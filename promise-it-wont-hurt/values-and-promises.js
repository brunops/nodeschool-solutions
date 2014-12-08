var q = require('q');

var defer = q.defer();

defer.promise
  .then(attachTitle)
  .then(console.log);

defer.resolve('MANHATTAN');

function attachTitle(name) {
  return 'DR. ' + name;
}
