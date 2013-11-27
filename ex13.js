var http = require('http');
var url  = require('url');

http.createServer(function(req, res) {
  var parsedUrlData = getParsedUrlData(req.url),
      pathname = parsedUrlData.pathname.toLowerCase();

  if (pathname === '/api/parsetime') {
    handleParseTimeRequest(parsedUrlData, req, res);
  }
  else if (pathname === '/api/unixtime') {
    handleUnixTimeRequest(parsedUrlData, req, res);
  }

  res.end();
}).listen(8000);

function handleUnixTimeRequest(parsedUrlData, req, res) {
  var date         = getDateFromUrl(parsedUrlData),
      responseData = {
        unixtime: date.getTime()
      };

  handleApiTimeResponse(responseData, res);
}

function handleParseTimeRequest(parsedUrlData, req, res) {
  var date         = getDateFromUrl(parsedUrlData),
      responseData = {
        hour: date.getHours(),
        minute: date.getMinutes(),
        second: date.getSeconds()
      };

  handleApiTimeResponse(responseData, res);
}

function getDateFromUrl(parsedUrlData) {
  var ISOString = parsedUrlData.variables['iso'];

  return new Date(ISOString);
}

function handleApiTimeResponse(responseData, res) {
  res.writeHead(200, { 'Content-type': 'application/json'});
  res.write(JSON.stringify(responseData));
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

