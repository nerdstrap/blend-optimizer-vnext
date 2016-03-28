'use strict';

module.exports = function (app) {

	var controller = require('./publicController')(app);

	app.get('/blend-specs', controller.blendSpecs);
	app.get('/create-blend', controller.createBlend);
	app.get('/dashboard', controller.dashboard);
	app.get('/draft-blend', controller.draftBlend);
	app.get('/finalize-blend', controller.finalizeBlend);
	app.get('/', controller.index);
	app.get('/kitchen-sink', controller.kitchenSink);
	app.get('/lot-maintenance', controller.lotMaintenance);
	app.get('/lot-preferences', controller.lotPreferences);
};
