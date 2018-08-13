var http = require('http');
var path = require('path');
var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');

var port = process.env.PORT || 3000;
var app = express();
var server = http.Server(app);

server.listen(port);

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());


