'use strict';

if (!process.env.NODE_ENV) {
	process.env.NODE_ENV = 'development';
}

var path = require('path');
var glob = require('glob');
var express = require('express');
var expressHandlebars = require('express-handlebars');
var i18n = require('i18n');
var handlebarsIntl = require('handlebars-intl');
var nconf = require('nconf');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var favicon = require('serve-favicon');

nconf.argv().env();
nconf.file({file: path.join(__dirname, 'config', 'global.' + process.env.NODE_ENV + '.json')});

// minimal config
i18n.configure({
	locales: ['en', 'fr'],
	cookie: 'locale',
	directory: __dirname + "/locales"
});

var app = express();
var availableLocales = glob.sync('*.json', {
	cwd: './locales/'
}).map(function (file) {
	return path.basename(file, '.json');
});
app.set('available locales', availableLocales);
app.set('default locale', 'en');

var hbs = expressHandlebars.create({
	defaultLayout: 'default',
	extname: 'hbs',
	helpers: {
		block: function (name) {
			var blocks = this._blocks;
			var content = blocks && blocks[name];

			return content ? content.join('\n') : null;
		},

		contentFor: function (name, options) {
			var blocks = this._blocks || (this._blocks = {});
			var block = blocks[name] || (blocks[name] = []);

			block.push(options.fn(this));
		},

		json: function (object) {
			return JSON.stringify(object);
		}
	}
});

app.use(function (req, res, next) {
	hbs.handlebars.registerHelper('i18n', function () {
		var args = Array.prototype.slice.call(arguments);
		var options = args.pop();
		return i18n.__.apply(options.data.root, args);
	});
	next();
});

app.use(i18n.init);

app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');

handlebarsIntl.registerWith(hbs.handlebars);
app.use(require('./middleware/intl/intl'));

app.use(favicon(__dirname + '/img/favicon.png'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));
app.use('/css', express.static(__dirname + '/css'));
app.use('/img', express.static(__dirname + '/img'));
app.use('/js', express.static(__dirname + '/js'));

var publicRoutes = require('./middleware/public/publicRoutes')(app);
var alertRoutes = require('./middleware/alert/alertRoutes')(app);
var broadcastMessageRoutes = require('./middleware/broadcastMessage/broadcastMessageRoutes')(app);

app.use(morgan('dev'));

app.use(bodyParser.urlencoded({'extended': 'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));

var port = process.env.PORT || nconf.get('server:port');
var server = app.listen(port, function () {
	console.log('blend-optimizer-vnext started and listening on port: %s', port);
});
