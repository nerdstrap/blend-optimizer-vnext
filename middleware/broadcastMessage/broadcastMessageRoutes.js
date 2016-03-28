'use strict';

module.exports = function (app) {

	var controller = require('./broadcastMessageController')(app);

	app.get('/api/broadcastMessage', controller.getBroadcastMessage);
};
