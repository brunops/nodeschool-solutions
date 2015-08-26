var qioHttp = require('q-io/http');

qioHttp.read('http://localhost:7000')
  .then(function (data) {
    return qioHttp.read('http://localhost:7001/' + data);
  })
  .then(function (user) {
    console.log(JSON.parse(user));
  })
  .then(null, console.error)
  .done();

