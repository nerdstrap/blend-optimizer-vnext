'use strict';

module.exports = function (app) {

	var _ = require('lodash');
	var mockRepository = require('../../models/mockRepository');

	function _renderView(viewName, req, res, next) {

		var options = {};

		mockRepository['appSettings'](options, function (errAppSettings, dataAppSettings) {
			if (errAppSettings) {
				throw errAppSettings;
			}

			mockRepository['alerts'](options, function (errAlerts, dataAlerts) {
				if (errAlerts) {
					throw errAlerts;
				}

				mockRepository['plants'](options, function (errPlants, dataPlants) {
					if (errPlants) {
						throw errPlants;
					}

					mockRepository[viewName](options, function (errView, dataView) {
						if (errView) {
							throw errView;
						}

						var context = _.extend({}, dataAppSettings, dataAlerts, dataPlants, dataView);
						res.render(viewName, context);
					});
				});
			});
		});

	}

	return {

		optimizerMaintenance: function (req, res, next) {
			_renderView('optimizerMaintenance', req, res, next);
		},

		techAdmin: function (req, res, next) {
			_renderView('techAdmin', req, res, next);
		},

		masterRules: function (req, res, next) {
			_renderView('masterRules', req, res, next);
		},

		globalRules: function (req, res, next) {
			_renderView('globalRules', req, res, next);
		},

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

			var options = {};

			mockRepository['appSettings'](options, function (errAppSettings, dataAppSettings) {
				if (errAppSettings) {
					throw errAppSettings;
				}

				mockRepository['alerts'](options, function (errAlerts, dataAlerts) {
					if (errAlerts) {
						throw errAlerts;
					}

					mockRepository['plants'](options, function (errPlants, dataPlants) {
						if (errPlants) {
							throw errPlants;
						}

						mockRepository['lotPreferences'](options, function (errLotPreferences, dataLotPreferences) {
							if (errLotPreferences) {
								throw errLotPreferences;
							}

							var materialCategories = _.uniqBy(_.map(dataLotPreferences.availableLots, function (availableLot) {
								return {
									'type': availableLot.type,
									'badge': availableLot.badge
								};
							}), function (materialCategory) {
								return materialCategory.type;
							});

							var materialTypes = _.uniqBy(_.map(dataLotPreferences.availableLots, function (availableLot) {
								return {
									'sku': availableLot.sku
								};
							}), function (materialType) {
								return materialType.sku;
							});

							var context = _.extend(
								{
									'materialCategories': materialCategories,
									'materialTypes': materialTypes
								},
								dataAppSettings, dataAlerts, dataPlants, dataLotPreferences);
							res.render('lotPreferences', context);
						});
					});
				});
			});

		},

		draftBlend: function (req, res, next) {
			var options = {};

			mockRepository['appSettings'](options, function (errAppSettings, dataAppSettings) {
				if (errAppSettings) {
					throw errAppSettings;
				}

				mockRepository['alerts'](options, function (errAlerts, dataAlerts) {
					if (errAlerts) {
						throw errAlerts;
					}

					mockRepository['plants'](options, function (errPlants, dataPlants) {
						if (errPlants) {
							throw errPlants;
						}

						var dataSetName = 'draftBlend';
						if (req.query.v) {
							dataSetName += '_v' + req.query.v
						}
						options.dataSetName = dataSetName;

						mockRepository['draftBlend'](options, function (errDraftBlend, dataDraftBlend) {
							if (errDraftBlend) {
								throw errDraftBlend;
							}

							var materialCategories = _.uniqBy(_.map(dataDraftBlend.availableLots, function (availableLot) {
								return {
									'type': availableLot.type,
									'badge': availableLot.badge
								};
							}), function (materialCategory) {
								return materialCategory.type;
							});

							var materialTypes = _.uniqBy(_.map(dataDraftBlend.availableLots, function (availableLot) {
								return {
									'sku': availableLot.sku
								};
							}), function (materialType) {
								return materialType.sku;
							});

							var context = _.extend(
								{
									'materialCategories': materialCategories,
									'materialTypes': materialTypes
								},
								dataAppSettings, dataAlerts, dataPlants, dataDraftBlend);
							res.render('draftBlend', context);
						});
					});
				});
			});
		},

		finalizeBlend: function (req, res, next) {
			_renderView('finalizeBlend', req, res, next);
		},

		blendSummary: function (req, res, next) {
			_renderView('blendSummary', req, res, next);
		}
	};

};
