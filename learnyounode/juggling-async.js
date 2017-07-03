var http = require('http');
var concatStream = require('concat-stream');

var urls = process.argv.slice(2),
    results = [],
    resultsCount = 0;

urls.forEach((url, i) => {
  http.get(url, (response) => {
    response.setEncoding('utf8');

    response.pipe(concatStream((data) => {
      results[i] = data;
      resultsCount++;

      if (resultsCount === urls.length) {
        results.forEach((result) => {
          console.log(result);
        });
      }
    }));    
  });
});
