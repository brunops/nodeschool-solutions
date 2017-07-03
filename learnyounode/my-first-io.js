var fs = require('fs');

var text = fs.readFileSync(process.argv[2]);

console.log(text.toString().split('\n').length - 1);
