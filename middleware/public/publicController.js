'use strict';

module.exports = function (app) {

	var mockRepository = require('../../models/mockRepository');

	function _renderView(viewName, req, res, next) {

		var options = {};

		mockRepository[viewName](options, function (err, data) {
			if (err) {
				throw err;
			}

			var context = data;
			res.render(viewName, context);
		});

	}

	return {

		blendSpecList: function (req, res, next) {
			_renderView('blendSpecList', req, res, next);
		},

		createBlendSpec: function (req, res, next) {
			_renderView('createBlendSpec', req, res, next);
		},

		blendSpec: function (req, res, next) {
			_renderView('blendSpec', req, res, next);
		},

		index: function (req, res, next) {
			_renderView('index', req, res, next);
		},

		kitchenSink: function (req, res, next) {
			_renderView('kitchenSink', req, res, next);
		},

		dashboard: function (req, res, next) {
			_renderView('dashboard', req, res, next);
		},

		lotMaintenance: function (req, res, next) {
			_renderView('lotMaintenance', req, res, next);
		},

		createBlend: function (req, res, next) {
			_renderView('createBlend', req, res, next);
		},

		lotPreferences: function (req, res, next) {
			_renderView('lotPreferences', req, res, next);
		},

		draftBlend: function (req, res, next) {
			_renderView('draftBlend', req, res, next);
		},

		finalizeBlend: function (req, res, next) {
			_renderView('finalizeBlend', req, res, next);
		},

		saveBlend: function (req, res, next) {
			_renderView('saveBlend', req, res, next);
		}
	};

};
