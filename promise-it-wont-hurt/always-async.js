var q = require('q'),
    defer = q.defer();

defer.promise.then(console.log);
defer.resolve('SECOND');
console.log('FIRST');
