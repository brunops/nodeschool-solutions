var http = require('http');
var url  = require('url');

http.createServer(function(req, res) {
  var parsedUrlData = getParsedUrlData(req.url),
      pathname      = parsedUrlData.pathname.toLowerCase(),
      date          = new Date(parsedUrlData.variables.iso),
      response;

  if (pathname === '/api/parsetime') {
    response = parsedTime(date);
  }
  else if (pathname === '/api/unixtime') {
    response = unixTime(date);
  }

  if (response) {
    res.writeHead(200, { 'Content-type': 'application/json'});
    res.write(JSON.stringify(response));
  }
  else {
    res.writeHead(404);
    res.end();
  }

}).listen(8000);

function unixTime(date) {
  return {
    unixtime: date.getTime()
  }
}

function parsedTime(date) {
  return {
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds()
  }
}

function getParsedUrlData(urlStr) {
  var parsedUrl = url.parse(urlStr);
  var parsedData = {
    pathname: parsedUrl.pathname,
    variables: {}
  };

  var currentVar, queryVariables = parsedUrl.query.split('&');

  for (var i = 0; i < queryVariables.length; ++i) {
    currentVar = queryVariables[i].split('=');
    parsedData.variables[currentVar[0]] = currentVar[1];
  }

  return parsedData;
}

