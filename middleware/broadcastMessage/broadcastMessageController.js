'use strict';

module.exports = function (app) {

	var broadcastMessageData = require('./broadcastMessageData.json');

	return {

		getBroadcastMessage: function (req, res, next) {
			res.json(broadcastMessageData);
		}
		
	};

};
