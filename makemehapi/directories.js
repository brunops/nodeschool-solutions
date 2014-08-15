var Hapi = require('hapi'),
    path = require('path');

var server = Hapi.createServer('localhost', Number(process.argv[2]) || 8080);

server.route({
  method: 'GET',
  path: '/foo/bar/baz/{param}',
  handler: {
    directory: {
      path: path.join(__dirname, '/public')
    }
  }
});

server.start();

