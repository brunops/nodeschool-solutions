var http = require('http');
var url = require('url');

http.createServer((req, res) => {
  var urlObj = url.parse(req.url, true),
      pathname = urlObj.pathname,
      strtime = urlObj.query.iso,
      result;

  if (pathname === '/api/unixtime') {
     result = getUnixTimestamp(strtime);
  }
  else if (pathname === '/api/parsetime') {
    result = getTimeObj(strtime);
  }

  if (result) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(result));
  }
  else {
    res.writeHead(404);
    res.end();
  }
  
}).listen(process.argv[2]);


var getUnixTimestamp = (strtime) => {
  return {
    unixtime: getTimestamp(strtime)
  };  
}

var getTimestamp = (strtime) => {
  return Date.parse(strtime);
}

var getTimeObj = (strtime) => {
  var date = new Date(getTimestamp(strtime));

  return {
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds()
  };
}
