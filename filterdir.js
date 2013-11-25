var fs = require('fs');

module.exports = function filterdir(dirPath, filterStr, cb) {
  var filterRegex = new RegExp('\\.' + filterStr + '$');
  fs.readdir(dirPath, function(err, list) {
    if (err)
      return cb(err);
    
    var filteredList = [];
    list.forEach(function(el) {
      if (filterRegex.test(el)) {
        filteredList.push(el);
      }
    });

    if (cb)
      return cb(null, filteredList);
  });
}

