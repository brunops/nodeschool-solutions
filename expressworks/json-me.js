var express = require('express');
var app = express();
var fs = require('fs');
    
app.get('/books', (req, res) => {
   fs.readFile(process.argv[3], (err, content) => {
       if(err) {
           res.send(500);
       }
       
       try {
           var books = JSON.parse(content.toString());
           res.json(books);
       } catch(error) {
           res.send(500);
       }
   });
});

app.listen(process.argv[2]);