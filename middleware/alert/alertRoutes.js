'use strict';

module.exports = function (app) {

	var controller = require('./alertController')(app);

	app.get('/api/alert', controller.getAlert);
};
