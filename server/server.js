var express= require('express');
var path = require("path");
var app= express();
var tumblrAPI= require('./tumblrAPI.js');
var port= process.env.PORT || 3000;
var ip= "127.0.0.1";

app.use(express.static(path.join(__dirname, '..')));
app.use(express.static(path.join(__dirname, '../src/styles', 'style.css')));

app.listen(port, function(){console.log('listening on port: ', port)});

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, '..', 'index.html'));
});

app.post('/data', tumblrAPI.tumblrSearch);