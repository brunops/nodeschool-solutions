 module.exports = function (db, date, cb) {
   var tweets = [];

   db.createReadStream({
     start: date,

     // append last ASCII character to 'end' date to differentiate from 'start'
     end: date + '\xff'
   })
   .on('data', function (data) {
     tweets.push(data.value);
   })
   .on('error', function (err) {
     cb(err);
   })
   .on('end', function () {
     cb(null, tweets);
   });
 };
