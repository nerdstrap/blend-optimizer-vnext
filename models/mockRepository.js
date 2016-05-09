'use strict';

var mockData = [];

mockData['appSettings'] = require('./mockData/appSettings.json');
mockData['alerts'] = require('./mockData/alerts.json');
mockData['plants'] = require('./mockData/plants.json');

mockData['index'] = require('./mockData/index.json');

mockData['dashboard'] = require('./mockData/dashboard.json');

mockData['optimizerMaintenance'] = require('./mockData/optimizerMaintenance.json');
mockData['oracleItemCategories'] = require('./mockData/oracleItemCategories.json');
mockData['oracleDepartmentAttributes'] = require('./mockData/oracleDepartmentAttributes.json');
mockData['masterRules'] = require('./mockData/masterRules.json');
mockData['globalRules'] = require('./mockData/globalRules.json');
mockData['blendSpecList'] = require('./mockData/blendSpecList.json');
mockData['blendSpec'] = require('./mockData/blendSpec.json');
mockData['createBlendSpec'] = require('./mockData/createBlendSpec.json');

mockData['createBlend'] = require('./mockData/createBlend.json');
mockData['lotPreferences'] = require('./mockData/lotPreferences.json');
mockData['draftBlend'] = require('./mockData/draftBlend/draftBlend.json');
mockData['draftBlend_v1'] = require('./mockData/draftBlend/draftBlend_v1.json');
mockData['draftBlend_v2'] = require('./mockData/draftBlend/draftBlend_v2.json');
mockData['draftBlend_v3'] = require('./mockData/draftBlend/draftBlend_v3.json');
mockData['draftBlend_v10'] = require('./mockData/draftBlend/draftBlend_v10.json');
mockData['draftBlend_v11'] = require('./mockData/draftBlend/draftBlend_v11.json');
mockData['draftBlend_v12'] = require('./mockData/draftBlend/draftBlend_v12.json');
mockData['finalizeBlend'] = require('./mockData/finalizeBlend.json');
mockData['blendSummary'] = require('./mockData/blendSummary.json');
mockData['techAdmin'] = require('./mockData/techAdmin.json');

mockData['operationsAdmin'] = require('./mockData/operationsAdmin.json');
mockData['lotMaintenance'] = require('./mockData/lotMaintenance.json');
mockData['userPermissions'] = require('./mockData/userPermissions.json');
mockData['broadcastMessages'] = require('./mockData/broadcastMessages.json');

module.exports = {

	appSettings: function (options, callback) {
		if (callback) {
			callback(null, mockData['appSettings']);
		}
	},

	alerts: function (options, callback) {
		if (callback) {
			callback(null, mockData['alerts']);
		}
	},

	plants: function (options, callback) {
		if (callback) {
			callback(null, mockData['plants']);
		}
	},

	index: function (options, callback) {
		if (callback) {
			callback(null, mockData['index']);
		}
	},

	dashboard: function (options, callback) {
		if (callback) {
			callback(null, mockData['dashboard']);
		}
	},

	lotMaintenance: function (options, callback) {
		if (callback) {
			callback(null, mockData['lotMaintenance']);
		}
	},

	optimizerMaintenance: function (options, callback) {
		if (callback) {
			callback(null, mockData['optimizerMaintenance']);
		}
	},

	oracleItemCategories: function (options, callback) {
		if (callback) {
			callback(null, mockData['oracleItemCategories']);
		}
	},

	oracleDepartmentAttributes: function (options, callback) {
		if (callback) {
			callback(null, mockData['oracleDepartmentAttributes']);
		}
	},

	techAdmin: function (options, callback) {
		if (callback) {
			callback(null, mockData['techAdmin']);
		}
	},

	masterRules: function (options, callback) {
		if (callback) {
			callback(null, mockData['masterRules']);
		}
	},

	globalRules: function (options, callback) {
		if (callback) {
			callback(null, mockData['globalRules']);
		}
	},

	blendSpecList: function (options, callback) {
		if (callback) {
			callback(null, mockData['blendSpecList']);
		}
	},

	blendSpec: function (options, callback) {
		if (callback) {
			callback(null, mockData['blendSpec']);
		}
	},

	createBlendSpec: function (options, callback) {
		if (callback) {
			callback(null, mockData['createBlendSpec']);
		}
	},

	createBlend: function (options, callback) {
		if (callback) {
			callback(null, mockData['createBlend']);
		}
	},

	operationsAdmin: function (options, callback) {
		if (callback) {
			callback(null, mockData['operationsAdmin']);
		}
	},

	lotPreferences: function (options, callback) {
		if (callback) {
			callback(null, mockData['lotPreferences']);
		}
	},

	userPermissions: function (options, callback) {
		if (callback) {
			callback(null, mockData['userPermissions']);
		}
	},

	broadcastMessages: function (options, callback) {
		if (callback) {
			callback(null, mockData['broadcastMessages']);
		}
	},

	draftBlend: function (options, callback) {
		if (callback) {
			callback(null, mockData[options.dataSetName]);
		}
	},

	finalizeBlend: function (options, callback) {
		if (callback) {
			callback(null, mockData['finalizeBlend']);
		}
	},

	blendSummary: function (options, callback) {
		if (callback) {
			callback(null, mockData['blendSummary']);
		}
	}
};
