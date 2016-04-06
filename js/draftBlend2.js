$(document).ready(function () {

	var radarChartData = {};

	radarChartData.labels = _labels;

	radarChartData.datasets = _.map(_datasets, function (_dataset) {
		return _.extend({}, _dataset, _datasetOptions[_dataset.key]);
	});

	var _radarChart = document.getElementById('radarChart').getContext("2d");
	var myRadarChart = new Chart(_radarChart).Radar(radarChartData, _options);

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
		window.location.href = 'draft-blend?v=4';
	});

	$('#reoptimizeBlend').click(function (e) {
		if (e) {
			e.preventDefault();
		}
		window.location.href = 'draft-blend?v=2';
	});

	$('.material-category-slider').each(function (index, element) {

		var $element = $(element);

		var deviationLow = parseInt($element.attr('data-deviationlow'), 10);
		var low = parseInt($element.attr('data-low'), 10);
		var high = parseInt($element.attr('data-high'), 10);
		var deviationHigh = parseInt($element.attr('data-deviationhigh'), 10);

		var pipsValues;
		if (deviationLow && deviationHigh){
			pipsValues = [deviationLow, low, high, deviationHigh];
		} else {
			pipsValues = [low, high];
		}

		noUiSlider.create(element, {
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
			},
			format: wNumb({
				decimals: 0,
				postfix: ' %'
			})
		});

	});

	var availableLots = document.getElementById('availableLots');
	Sortable.create(availableLots, {
		handle: ".lot-header",
		animation: 0,
		group: 'availableLots',
		sort: true
	});

	$('.btn-data-toggle-material-category').click(function (e) {
		if (e) {
			e.preventDefault();
		}

		var activeMaterialCategories = [];
		var $target = $(e.target);
		if ($target.is('.focus') && !$target.is('.active')) {
			activeMaterialCategories.push($target.attr('data-materialcategory'));
		}

		$('#materialCategoriesFilter').children('button.active').each(function (index, element) {
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

	// var snapValues = [
	// 	document.getElementById('includedLot1UsageSnapValueLower'),
	// 	document.getElementById('includedLot1UsageSnapValueUpper')
	// ];
	//
	// includedLot1Usage.noUiSlider.on('update', function (values, handle) {
	// 	snapValues[handle].innerHTML = values[handle];
	// });
	//
	// includedLot1Usage.noUiSlider.on('change', function (values, handle) {
	// 	if (values[handle] < 20) {
	// 		includedLot1Usage.noUiSlider.set(20);
	// 	} else if (values[handle] > 80) {
	// 		includedLot1Usage.noUiSlider.set(80);
	// 	}
	// });

});
