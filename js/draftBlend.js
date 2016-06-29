$(document).ready(function () {

	var radarChartData = {};

	radarChartData.labels = _labels;

	radarChartData.datasets = _.map(_datasets, function (_dataset) {
		var type = _dataset.type;
		if (!_datasetOptions.hasOwnProperty(type)) {
			type = 'default';
		}
		return _.extend({}, _dataset, _datasetOptions[type]);
	});

	var _radarChart = document.getElementById('radarChart').getContext("2d");
	var myRadarChart = new Chart(_radarChart).Radar(radarChartData, _options);

	$('.toggle-radar-dataset').on('click', function (evt, params) {
		var checkedDatasetIds = $('.toggle-radar-dataset:checked').map(function () {
			return $(this).attr('data-id');
		}).get();

		if (checkedDatasetIds.length === 1 && checkedDatasetIds[0] === 'ABCD-0000') {
			$('.toggle-radar-dataset').prop('checked', true);
			checkedDatasetIds = $('.toggle-radar-dataset:checked').map(function () {
				return $(this).attr('data-id');
			}).get();
		}

		var _filteredDatasets = _.filter(_datasets, function (_dataset) {
			return checkedDatasetIds.indexOf(_dataset.id) !== -1;
		});

		var _newRadarChartData = {};

		_newRadarChartData.labels = _labels;

		_newRadarChartData.datasets = _.map(_filteredDatasets, function (_filteredDataset) {
			var type = _filteredDataset.type;
			if (!_datasetOptions.hasOwnProperty(type)) {
				type = 'default';
			}
			return _.extend({}, _filteredDataset, _datasetOptions[type]);
		});

		myRadarChart.destroy();
		myRadarChart = new Chart(_radarChart).Radar(_newRadarChartData, _options);
	});

	$('#finalizeBlend').click(function (e) {
		if (e) {
			e.preventDefault();
		}
		window.location.href = 'finalize-blend';
	});

	$('#deviateBlend').click(function (e) {
		if (e) {
			e.preventDefault();
		}
		window.location.href = 'draft-blend?v=11';
	});

	$('#reoptimizeBlend').click(function (e) {
		if (e) {
			e.preventDefault();
		}
		var $target = $(e.target);
		var href = 'draft-blend?v=' + $target.attr('data-href');
		window.location.href = href;
		window.location.href = href;
	});

	$('.reset-blend').click(function (e) {
		if (e) {
			e.preventDefault();
		}
		window.location.href = 'draft-blend';
	});

	$('.material-category-slider').each(function (index, element) {

		var $element = $(element);

		var deviationLow = parseInt($element.attr('data-deviationlow'), 10);
		var low = parseInt($element.attr('data-low'), 10);
		var high = parseInt($element.attr('data-high'), 10);
		var deviationHigh = parseInt($element.attr('data-deviationhigh'), 10);

		var pipsValues;
		var startValues;
		if (deviationLow && deviationHigh) {
			pipsValues = [deviationLow, low, high, deviationHigh];
			startValues = [deviationLow, deviationHigh];
		} else {
			pipsValues = [low, high];
			startValues = [low, high];
		}

		var slider = noUiSlider.create(element, {
			start: startValues,
			behaviour: 'drag',
			connect: true,
			range: {
				'min': 0,
				'max': 100
			},
			pips: {
				mode: 'values',
				values: pipsValues,
				density: 4
			}
		});

		var snapValues = [
			document.getElementById($element.attr('data-snapvaluelower')),
			document.getElementById($element.attr('data-snapvalueupper'))
		];

		element.noUiSlider.on('update', function (values, handle) {
			snapValues[handle].value = values[handle];
		});

		element.noUiSlider.on('change', function (values, handle) {
			if (handle === 0) {
				if (deviationLow) {
					if (values[handle] < deviationLow) {
						element.noUiSlider.set([deviationLow, values[1]]);
					}
				} else {
					if (values[handle] < low) {
						element.noUiSlider.set([low, values[1]]);
					}
				}
			}
			if (handle === 1) {
				if (deviationHigh) {
					if (values[handle] > deviationHigh) {
						element.noUiSlider.set([values[0], deviationHigh]);
					}
				} else {
					if (values[handle] > high) {
						element.noUiSlider.set([values[0], high]);
					}
				}
			}
			$('#deviateBlendForm, #finalizeBlendForm').addClass('hidden');
			$('#reoptimizeBlendForm').removeClass('hidden');
		});

	});

	$('.included-lot-list-group').each(function (index, element) {

		var $element = $(element);

		Sortable.create(element, {
			handle: ".lot-header",
			animation: 0,
			group: 'availableLots',
			sort: true,

			onAdd: function (evt) {
				var itemEl = evt.item;
				var toList = evt.to;
				var toListItems = $(toList).children('li.original').remove();
				var fromList = evt.from;
				$('#deviateBlendForm, #finalizeBlendForm').addClass('hidden');
				$('#reoptimizeBlendForm').removeClass('hidden');
			}
		});

	});

	var availableLots = document.getElementById('availableLots');
	Sortable.create(availableLots, {
		handle: ".lot-header",
		animation: 0,
		group: 'availableLots',
		sort: true
	});

	$('.btn-filter-material-category').click(function (e) {
		if (e) {
			e.preventDefault();
		}

		var activeMaterialCategories = [];
		var $target = $(e.target);
		if ($target.is('.focus') && !$target.is('.active')) {
			activeMaterialCategories.push($target.attr('data-materialcategory'));
		}

		$('#material-categories-filter').find('.btn-group > button.active').each(function (index, element) {
			var $element = $(element);
			if ($element.is('.active') && !$element.is('.focus')) {
				activeMaterialCategories.push($element.attr('data-materialcategory'));
			}
		});

		if (activeMaterialCategories.length) {
			var filter = "." + activeMaterialCategories.join(',.');
			$('#availableLots').children('li').hide().filter(filter).show();
		} else {
			$('#availableLots').children('li').show()
		}
	});

	$('.included-lot-slider').each(function (index, element) {

		var $element = $(element);

		var low = parseInt($element.attr('data-low'), 10);
		var high = parseInt($element.attr('data-high'), 10);

		var pipsValues = [low, high];

		var slider = noUiSlider.create(element, {
			start: [low, high],
			behaviour: 'drag',
			connect: true,
			range: {
				'min': 0,
				'max': 100
			},
			pips: {
				mode: 'values',
				values: pipsValues,
				density: 4
			}
		});

		var snapValues = [
			document.getElementById($element.attr('data-snapvaluelower')),
			document.getElementById($element.attr('data-snapvalueupper'))
		];

		element.noUiSlider.on('update', function (values, handle) {
			snapValues[handle].value = values[handle];
		});

		element.noUiSlider.on('change', function (values, handle) {
			if (handle === 0) {
				if (values[handle] < low) {
					element.noUiSlider.set([low, values[1]]);
				}
			}
			if (handle === 1) {
				if (values[handle] > high) {
					element.noUiSlider.set([values[0], high]);
				}
			}
			$('#deviateBlendForm, #finalizeBlendForm').addClass('hidden');
			$('#reoptimizeBlendForm').removeClass('hidden');
		});

	});

});
