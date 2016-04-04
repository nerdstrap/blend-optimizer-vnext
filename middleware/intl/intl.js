'use strict';

var path = require('path');

module.exports = function (req, res, next) {
	var app = req.app;
	var availableLocales = app.get('available locales');
	var defaultLocale = app.get('default locale');

	// Use content negotiation to find the best locale.
	var locale = req.acceptsLanguages(availableLocales) || defaultLocale;
	var messages = require(path.join('../../locales', locale));

	var handlebarsData = res.locals.data || (res.locals.data = {});

	handlebarsData.intl = {
		locales: [locale],
		messages: messages
	};

	next();
};
