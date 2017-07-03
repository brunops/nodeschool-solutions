const fs = require('fs');

const text = fs.readFileSync(process.argv[2]);

console.log(text.toString().split('\n').length - 1);
