'use strict';

var mockData = [];

mockData['appSettings'] = require('./mockData/appSettings.json');
mockData['alerts'] = require('./mockData/alerts.json');
mockData['plants'] = require('./mockData/plants.json');

mockData['index'] = require('./mockData/index.json');
mockData['kitchenSink'] = require('./mockData/kitchenSink.json');

mockData['dashboard'] = require('./mockData/dashboard.json');

mockData['lotMaintenance'] = require('./mockData/lotMaintenance.json');

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

	kitchenSink: function (options, callback) {
		if (callback) {
			callback(null, mockData['kitchenSink']);
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

	lotPreferences: function (options, callback) {
		if (callback) {
			callback(null, mockData['lotPreferences']);
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
