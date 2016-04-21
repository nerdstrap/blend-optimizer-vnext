$(document).ready(function () {

	setTimeout(function () {
		toastr.options = {
			"closeButton": true,
			"debug": false,
			"newestOnTop": false,
			"progressBar": true,
			"positionClass": "toast-bottom-left",
			"preventDuplicates": false,
			"onclick": null,
			"showDuration": "300",
			"hideDuration": "1000",
			"timeOut": "5000",
			"extendedTimeOut": "1000",
			"showEasing": "swing",
			"hideEasing": "linear",
			"showMethod": "fadeIn",
			"hideMethod": "fadeOut"
		};
		toastr['warning']('Alert from Blend Optimizer vNext!', 'Alert');

	}, 1300);

	var barChartData = {};

	barChartData.labels = _labels;

	barChartData.datasets = _.map(_datasets, function (_dataset) {
		var type = _dataset.type;
		if (!_datasetOptions.hasOwnProperty(type)) {
			type = 'default';
		}
		return _.extend({}, _dataset, _datasetOptions[type]);
	});

	var _barChart = document.getElementById('barChart').getContext("2d");
	var myBarChart = new Chart(_barChart).Bar(barChartData, _options);

	var reservedDoughnutChartDataset = _.map(_doughnutDatasets.reserved, function (_dataset) {
		var type = _dataset.type;
		if (!_doughnutDatasetOptions.hasOwnProperty(type)) {
			type = 'default';
		}
		return _.extend({}, _dataset, _doughnutDatasetOptions[type]);
	});

	var _reservedDoughnutChart = document.getElementById('reservedDoughnutChart').getContext("2d");
	var myReservedDoughnutChart = new Chart(_reservedDoughnutChart).Doughnut(reservedDoughnutChartDataset, _doughnutOptions);

	var actualDoughnutChartDataset = _.map(_doughnutDatasets.actual, function (_dataset) {
		var type = _dataset.type;
		if (!_doughnutDatasetOptions.hasOwnProperty(type)) {
			type = 'default';
		}
		return _.extend({}, _dataset, _doughnutDatasetOptions[type]);
	});

	var _actualDoughnutChart = document.getElementById('actualDoughnutChart').getContext("2d");
	var myActualDoughnutChart = new Chart(_actualDoughnutChart).Doughnut(actualDoughnutChartDataset, _doughnutOptions);

	var targetDoughnutChartDataset = _.map(_doughnutDatasets.target, function (_dataset) {
		var type = _dataset.type;
		if (!_doughnutDatasetOptions.hasOwnProperty(type)) {
			type = 'default';
		}
		return _.extend({}, _dataset, _doughnutDatasetOptions[type]);
	});

	var _targetDoughnutChart = document.getElementById('targetDoughnutChart').getContext("2d");
	var myTargetDoughnutChart = new Chart(_targetDoughnutChart).Doughnut(targetDoughnutChartDataset, _doughnutOptions);
});
