'use strict';

module.exports = function (app) {

	var mockRepository = require('../../models/mockRepository');

	return {

		blendSpecs: function (req, res, next) {

			var templateName = 'blendSpecs';

			var options = {
				plantId: req.params.plantId
			};
			mockRepository.getBlendSpecs(options, function (err, data) {
				if (err) {
					throw err;
				}

				var context = data;
				res.render(templateName, context);
			});

		},

		createBlend: function (req, res, next) {

			var templateName = 'createBlend';

			var options = {
				plantId: req.params.plantId
			};
			mockRepository.getCreateBlend(options, function (err, data) {
				if (err) {
					throw err;
				}

				var context = data;
				res.render(templateName, context);
			});

		},

		dashboard: function (req, res, next) {

			var templateName = 'dashboard';

			var options = {
				plantId: req.params.plantId
			};
			mockRepository.getDashboard(options, function (err, data) {
				if (err) {
					throw err;
				}

				var context = data;
				res.render(templateName, context);
			});

		},

		draftBlend: function (req, res, next) {
			var templateName = 'draftBlend';

			var options = {
				plantId: req.params.plantId
			};
			mockRepository.getDraftBlend(options, function (err, data) {
				if (err) {
					throw err;
				}

				var context = data;
				res.render(templateName, context);
			});
		},

		finalizeBlend: function (req, res, next) {
			var templateName = 'finalizeBlend';

			var options = {
				plantId: req.params.plantId
			};
			mockRepository.getFinalizeBlend(options, function (err, data) {
				if (err) {
					throw err;
				}

				var context = data;
				res.render(templateName, context);
			});
		},

		index: function (req, res, next) {

			var templateName = 'index';

			var options = {
				plantId: req.params.plantId
			};
			mockRepository.getIndex(options, function (err, data) {
				if (err) {
					throw err;
				}

				var context = data;
				res.render(templateName, context);
			});

		},

		kitchenSink: function (req, res, next) {

			var templateName = 'kitchenSink';

			var options = {
				plantId: req.params.plantId
			};
			mockRepository.getKitchenSink(options, function (err, data) {
				if (err) {
					throw err;
				}

				var context = data;
				res.render(templateName, context);
			});

		},

		lotMaintenance: function (req, res, next) {
			var templateName = 'lotMaintenance';

			var options = {
				plantId: req.params.plantId
			};
			mockRepository.getLotMaintenance(options, function (err, data) {
				if (err) {
					throw err;
				}

				var context = data;
				res.render(templateName, context);
			});
		},

		lotPreferences: function (req, res, next) {

			var templateName = 'lotPreferences';

			var options = {
				plantId: req.params.plantId
			};
			mockRepository.getLotPreferences(options, function (err, data) {
				if (err) {
					throw err;
				}

				var context = data;
				res.render(templateName, context);
			});
		}
	};

};
