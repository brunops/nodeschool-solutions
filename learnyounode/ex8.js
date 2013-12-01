var http = require('http');

http.get(process.argv[2], function(response) {
  var fullResponse = '';
  response.setEncoding('utf8');
  response.on('data', function(data) {
    fullResponse += data;
  });

  response.on('end', function(data) {
    console.log(fullResponse.length);
    console.log(fullResponse);
  });
});

