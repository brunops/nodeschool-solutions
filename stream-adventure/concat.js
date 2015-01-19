var concatStream = require('concat-stream');

process.stdin
  .pipe(concatStream(function (body) {
    process.stdout.write(body.toString().split('').reverse().join(''));
  }));

