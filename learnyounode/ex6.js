var fd = require('./filterdir'); 

fd(process.argv[2], process.argv[3], function(err, list) {
  if (err) {
    console.log('Error while reading the file "' + process.argv[2]  + '"');
    return 1;
  }

  list.forEach(function(el) {
    console.log(el);
  });
});
