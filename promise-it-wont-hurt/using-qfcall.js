var q = require('q');

q.fcall(function () {
  return JSON.parse(process.argv[2]);
}).then(null, console.log); 
