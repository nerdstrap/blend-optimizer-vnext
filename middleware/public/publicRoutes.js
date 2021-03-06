'use strict';

module.exports = function (app) {

	var controller = require('./publicController')(app);

	app.get('/', controller.index);

	app.get('/dashboard', controller.dashboard);

	app.get('/optimizer-maintenance', controller.optimizerMaintenance);
	app.get('/oracle-item-categories', controller.oracleItemCategories);
	app.get('/oracle-department-attributes', controller.oracleDepartmentAttributes);
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
	
	app.get('/tech-admin', controller.techAdmin);

	app.get('/operations-admin', controller.operationsAdmin);
	app.get('/lot-maintenance', controller.lotMaintenance);
	app.get('/user-permissions', controller.userPermissions);
	app.get('/broadcast-messages', controller.broadcastMessages);
};
