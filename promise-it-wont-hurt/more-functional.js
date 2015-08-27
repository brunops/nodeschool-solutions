var qioHttp = require('q-io/http'),
    _ = require('lodash');


qioHttp.read('http://localhost:7000')
  .then(_.compose(qioHttp.read, function (id) { return 'http://localhost:7001/' + id; }))
  .then(_.compose(console.log, JSON.parse))
  .then(null, console.error)
  .done();

