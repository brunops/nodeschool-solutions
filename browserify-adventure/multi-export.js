var ndjson = require('./ndjson');

console.log(ndjson.parse(prompt()));
console.log(ndjson.stringify(prompt()));

