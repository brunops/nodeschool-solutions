var qioHttp = require('q-io/http');

qioHttp.read('http://localhost:1337')
  .then(function (data) {
    console.log(JSON.parse(data));
  })
  .then(null, console.error)
  .done();

