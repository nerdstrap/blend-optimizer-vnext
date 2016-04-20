'use strict';

module.exports = function (app) {

	var controller = require('./publicController')(app);

	app.get('/', controller.index);
	app.get('/kitchen-sink', controller.kitchenSink);

	app.get('/dashboard', controller.dashboard);

	app.get('/optimizer-maintenance', controller.optimizerMaintenance);
	app.get('/oracle-categories', controller.oracleCategories);
	app.get('/department-attributes', controller.departmentAttributes);
	app.get('/tech-admin', controller.techAdmin);
	app.get('/master-rules', controller.masterRules);
	app.get('/global-rules', controller.globalRules);

	app.get('/blend-spec-list', controller.blendSpecList);
	app.get('/blend-spec', controller.blendSpec);
	app.get('/create-blend-spec', controller.createBlendSpec);

	app.get('/create-blend', controller.createBlend);
	app.get('/lot-preferences', controller.lotPreferences);
	app.get('/draft-blend', controller.draftBlend);
	app.get('/finalize-blend', controller.finalizeBlend);
	app.get('/blend-summary', controller.blendSummary);

	app.get('/lot-maintenance', controller.lotMaintenance);
};
