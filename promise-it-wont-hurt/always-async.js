var q = require('q');

var defer = q.defer();

defer.promise.then(console.log);

defer.resolve('SECOND');
console.log('FIRST');

