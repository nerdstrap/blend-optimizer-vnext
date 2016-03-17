'use strict';

if (!process.env.NODE_ENV) {
	process.env.NODE_ENV = 'development';
}

var path = require('path');
var express = require('express');
var nconf = require('nconf');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var favicon = require('serve-favicon');

nconf.argv().env();
nconf.file({file: path.join(__dirname, 'config', 'global.' + process.env.NODE_ENV + '.json')});

var app = express();
app.use('/bower_components', express.static(__dirname + '/bower_components'));
app.use('/css', express.static(__dirname + '/css'));
app.use('/img', express.static(__dirname + '/img'));
app.use('/js', express.static(__dirname + '/js'));
app.use('/data', express.static(__dirname + '/data'));
app.use('/templates', express.static(__dirname + '/templates'));
app.use('/', express.static(__dirname + '/views'));

app.use(morgan('dev'));

app.use(bodyParser.urlencoded({'extended': 'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));

var port = process.env.PORT || nconf.get('server:port');
var server = app.listen(port, function () {
	console.log('blend-optimizer-vnext started and listening on port: %s', port);
});
