var level = require('level'),
    sub = require('level-sublevel');

var db = sub(level(process.argv[2]));

db.sublevel('dinosaurs').put('slogan', 'rawr');
db.sublevel('robots').put('slogan', 'beep boop');

