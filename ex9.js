var http = require('http');

var urls = process.argv.slice(2);
var responses = [], finishedResponses = 0;

for (var i = 0; i < urls.length; i++) {
  (function(index) {

    http.get(urls[index], function(response) {
      response.setEncoding('utf8');

      response.on('data', function(data) {
        responses[index] = responses[index] ? responses[index] + data : data;
      });

      response.on('end', function() {
        if (++finishedResponses === urls.length) {
          for (var i = 0; i < urls.length; ++i) {
            console.log(responses[i]);
          }
        } 
      });
    });

  })(i);
}

