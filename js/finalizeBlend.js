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

	var doughnutChartDataset = _.map(_doughnutDataset, function (_dataset) {
		var type = _dataset.type;
		if (!_doughnutDatasetOptions.hasOwnProperty(type)) {
			type = 'default';
		}
		return _.extend({}, _dataset, _doughnutDatasetOptions[type]);
	});

	var _doughnutChart = document.getElementById('doughnutChart').getContext("2d");
	var myDoughnutChart = new Chart(_doughnutChart).Doughnut(doughnutChartDataset, _doughnutOptions);

	$('#blendSummary').click(function (e) {
		if (e) {
			e.preventDefault();
		}
		window.location.href = 'blend-summary';
	});

});
