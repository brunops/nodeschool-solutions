var url = require('url'),
    querystring = require('querystring');

var webaddress = prompt();

var parsedUrl = url.parse(webaddress),
    parsedQuery = querystring.parse(parsedUrl.query);

console.log(url.resolve(webaddress, parsedQuery.file));
