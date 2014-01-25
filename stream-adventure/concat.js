var concat = require('concat-stream');

process.stdin.pipe(concat(function reverse(body) {
  process.stdout.end(reverseStr(body));
}));

function reverseStr(str) {
  return str.toString().split('').reverse().join('');
}
