var Hapi = require('hapi');

var server = Hapi.createServer('localhost', Number(process.argv[2]) || 8080);

server.route({
  method: 'GET',
  path: '/',
  handler: function (req, reply) {
    reply('Hello Hapi');
  }
});

server.start();


