'use strict';
var bodyParser = require('body-parser');
var express = require('express');
var app = express();

var urlencodedParser = bodyParser.urlencoded({ extended: false });
require('./routes')(app, urlencodedParser);


// config
app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);

app.set('view engine', 'ejs');

var server = app.listen(7070, function () {
   var host = server.address().address;
   var port = server.address().port;
});
