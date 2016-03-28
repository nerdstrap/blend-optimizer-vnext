'use strict';

module.exports = function (app) {

	var alertData = require('./alertData.json');

	return {

		getAlert: function (req, res, next) {
			res.json(alertData);
		}
	};

};
