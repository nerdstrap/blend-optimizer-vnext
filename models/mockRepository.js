'use strict';

var mockData = [];

mockData['index'] = require('./mockData/index.json');
mockData['kitchenSink'] = require('./mockData/kitchenSink.json');

mockData['dashboard'] = require('./mockData/dashboard.json');

mockData['lotMaintenance'] = require('./mockData/lotMaintenance.json');

mockData['blendSpecList'] = require('./mockData/blendSpecList.json');
mockData['blendSpec'] = require('./mockData/blendSpec.json');
mockData['createBlendSpec'] = require('./mockData/createBlendSpec.json');

mockData['createBlend'] = require('./mockData/createBlend.json');
mockData['lotPreferences'] = require('./mockData/lotPreferences.json');
mockData['draftBlend'] = require('./mockData/draftBlend.json');
mockData['finalizeBlend'] = require('./mockData/finalizeBlend.json');

module.exports = {

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
			callback(null, mockData['draftBlend']);
		}
	},

	finalizeBlend: function (options, callback) {
		if (callback) {
			callback(null, mockData['finalizeBlend']);
		}
	}
};
