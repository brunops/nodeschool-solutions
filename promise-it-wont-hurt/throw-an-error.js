var q = require('q');

function parsePromised(arg) {
  var defer = q.defer();
 
  try {
    defer.resolve(JSON.parse(arg));
  } catch (e) {
    defer.reject(e);    
  }

  return defer.promise;
}

  
parsePromised(process.argv[2])
  .then(null, console.log);

