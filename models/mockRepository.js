'use strict';

var _ = require('lodash');

var blendSpecsMockData = require('./mockData/blendSpecs.json');
var createBlendMockData = require('./mockData/createBlend.json');
var dashboardMockData = require('./mockData/dashboard.json');
var draftBlendMockData = require('./mockData/draftBlend.json');
var finalizeBlendMockData = require('./mockData/finalizeBlend.json');
var indexMockData = require('./mockData/index.json');
var kitchenSinkMockData = require('./mockData/kitchenSink.json');
var lotMaintenanceMockData = require('./mockData/lotMaintenance.json');
var lotPreferencesMockData = require('./mockData/lotPreferences.json');
var saveBlendMockData = require('./mockData/saveBlend.json');

function _getBlendSpecs(options, callback) {
	if (callback) {
		callback(null, blendSpecsMockData);
	}
}

function _getCreateBlend(options, callback) {
	if (callback) {
		callback(null, createBlendMockData);
	}
}

function _getDashboard(options, callback) {
	if (callback) {
		callback(null, dashboardMockData);
	}
}

function _getDraftBlend(options, callback) {
	if (callback) {
		callback(null, draftBlendMockData);
	}
}

function _getFinalizeBlend(options, callback) {
	if (callback) {
		callback(null, finalizeBlendMockData);
	}
}

function _getIndex(options, callback) {
	if (callback) {
		callback(null, indexMockData);
	}
}

function _getKitchenSink(options, callback) {
	if (callback) {
		callback(null, kitchenSinkMockData);
	}
}

function _getLotMaintenance(options, callback) {
	if (callback) {
		callback(null, lotMaintenanceMockData);
	}
}

function _getLotPreferences(options, callback) {
	if (callback) {
		callback(null, lotPreferencesMockData);
	}
}

function _getSaveBlend(options, callback) {
	if (callback) {
		callback(null, saveBlendMockData);
	}
}

module.exports = {

	getCreateBlend: function (options, callback) {
		_getCreateBlend(options, function (err, data) {
			callback(err, data);
		});
	},

	getBlendSpecs: function (options, callback) {
		_getBlendSpecs(options, function (err, data) {
			callback(err, data);
		});
	},

	getDashboard: function (options, callback) {
		_getDashboard(options, function (err, data) {
			callback(err, data);
		});
	},

	getDraftBlend: function (options, callback) {
		_getDraftBlend(options, function (err, data) {
			callback(err, data);
		});
	},

	getFinalizeBlend: function (options, callback) {
		_getFinalizeBlend(options, function (err, data) {
			callback(err, data);
		});
	},

	getIndex: function (options, callback) {
		_getIndex(options, function (err, data) {
			callback(err, data);
		});
	},

	getKitchenSink: function (options, callback) {
		_getKitchenSink(options, function (err, data) {
			callback(err, data);
		});
	},

	getLotMaintenance: function (options, callback) {
		_getLotMaintenance(options, function (err, data) {
			callback(err, data);
		});
	},

	getLotPreferences: function (options, callback) {
		_getLotPreferences(options, function (err, data) {
			callback(err, data);
		});
	},

	getSaveBlend: function (options, callback) {
		_getSaveBlend(options, function (err, data) {
			callback(err, data);
		});
	}
};
