var fs = require('fs');

fs.readdir(process.argv[2], function(err, list) {
  if (err) return 1;
  for (var i = 0; i < list.length; ++i) {
    var containsValidExtension = new RegExp('\\.' + process.argv[3]).test(list[i] + '$');
    if (containsValidExtension) console.log(list[i]);
  }
});
