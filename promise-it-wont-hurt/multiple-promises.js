var q = require('q');

var defer1 = q.defer(),
    defer2 = q.defer();

function all(prom1, prom2) {
  var defer = q.defer(),
      results = [undefined, undefined],
      counter = 0;

  prom1
    .then(function (data) {
      counter += 1;
      results[0] = data;

      if (counter === 2) {
        defer.resolve(results);
      }
    })
    .then(null, defer.reject);

  prom2
    .then(function (data) {
      counter += 1;
      results[1] = data;

      if (counter === 2) {
        defer.resolve(results);
      }
    })
    .then(null, defer.reject);

  return defer.promise;
}

all(defer1.promise, defer2.promise)
  .then(console.log);

setTimeout(function () {
  defer1.resolve('PROMISES');
  defer2.resolve('FTW');
}, 200);


