var express = require('express'),
    path = require('path');

var app = express();

app.set('view engine', 'jade');
app.set('views', process.argv[3] || path.join(__dirname, 'templates'));

app.get('/home', (req, res) => {
  res.render('index', { date: new Date().toDateString() });
});
app.listen(process.argv[2] || 3000);
