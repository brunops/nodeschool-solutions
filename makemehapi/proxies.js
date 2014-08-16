var Hapi = require('hapi');

var server = Hapi.createServer('localhost', Number(process.argv[2]) || 8080);

server.route({
  method: 'GET',
  path: '/proxy',
  handler: {
    proxy: {
      host: 'localhost',
      port: 65535
    }
  }
});

server.start();

