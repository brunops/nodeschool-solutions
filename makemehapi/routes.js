var Hapi = require('hapi');

var server = Hapi.createServer('localhost', Number(process.argv[2]) || 8080);

server.route({
  method: 'GET',
  path: '/{name}',
  handler: function (req, rep) {
    rep('Hello ' + req.params.name);
  }
});

server.start();

