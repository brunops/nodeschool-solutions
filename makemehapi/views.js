var Hapi = require('hapi'),
    path = require('path');

var options = {
  views: {
    path: path.join(__dirname, '/templates'),
    engines: {
      html: require('handlebars')
    }
  }
};

var server = Hapi.createServer('localhost', Number(process.argv[2]) || 8080, options);

server.route({
  method: 'GET',
  path: '/',
  handler: {
    view: 'index.html'
  }
});


server.start();

