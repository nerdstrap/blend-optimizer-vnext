//$(function () {
//
//	Morris.Area({
//		element: 'morris-area-chart',
//		data: [{period: 'BaseLine', low: 2666, actual: null, high: 2647},
//			{period: 'Melt', low: 2778, actual: 2294, high: 2441},
//			{period: 'IZOD', low: 4912, actual: 1969, high: 2501},
//			{period: 'Density', low: 3767, actual: 3597, high: 5689},
//			{period: 'NCLS', low: 6810, actual: 1914, high: 2293},
//			{period: 'Contamination', low: 5670, actual: 4293, high: 1881},
//			{period: 'Rheology', low: 4820, actual: 3795, high: 1588},
//			{period: 'Viscosity', low: 15073, actual: 5967, high: 5175}],
//		xkey: 'spec',
//		ykeys: ['low', 'actual', 'high'],
//		labels: ['low', 'actual', 'high'],
//		pointSize: 2,
//		hideHover: 'auto',
//		resize: true,
//		lineColors: ['#87d6c6', '#54cdb4', '#1ab394'],
//		lineWidth: 2,
//		pointSize: 1
//	});
//});

Morris.Area({
	element: 'morris-area-chart',
	data: [{period: '2010 Q1', low: .2, actual: .4, high: .9},
		{period: '2010 Q2', low: .3, actual: .4, high: .6},
		{period: '2010 Q3', low: .3, actual: .3, high: .5},
		{period: '2010 Q4', low: .1, actual: .2, high: .9},
		{period: '2011 Q1', low: .1, actual: .1, high: .9},
		{period: '2011 Q2', low: .2, actual: .2, high: .4},
		{period: '2011 Q3', low: .3, actual: .8, high: .9},
		{period: '2011 Q4', low: .3, actual: .7, high: .9},
		{period: '2012 Q1', low: .3, actual: .6, high: .9},
		{period: '2012 Q2', low: .3, actual: .5, high: .7}],
	xkey: 'period',
	ykeys: ['low', 'actual', 'high'],
	labels: ['low', 'actual', 'high'],
	pointSize: 2,
	hideHover: 'auto',
	resize: true,
	lineColors: ['#ed5565', '#54cdb4', '#f8ac59'],
	lineWidth: 2,
	pointSize: 1,
});
