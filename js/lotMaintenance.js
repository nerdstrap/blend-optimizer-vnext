$(document).ready(function () {

	var availableLots = document.getElementById('availableLots');
	Sortable.create(availableLots, {
		animation: 0,
		group: 'availableLots',
		sort: true,

		onAdd: function (evt) {
			var itemEl = evt.item;
			var toList = evt.to;
			var toListItems = $(toList).children('li.sortable-placeholder').remove();
			var fromList = evt.from;
		}
	});

	var ineligibleLots = document.getElementById('ineligibleLots');
	Sortable.create(ineligibleLots, {
		animation: 0,
		group: 'availableLots',
		sort: true,

		onAdd: function (evt) {
			var itemEl = evt.item;
			var toList = evt.to;
			var toListItems = $(toList).children('li.sortable-placeholder').remove();
			var fromList = evt.from;
		}
	});

	var priorityLots = document.getElementById('priorityLots');
	Sortable.create(priorityLots, {
		animation: 0,
		group: 'availableLots',
		sort: true,

		onAdd: function (evt) {
			var itemEl = evt.item;
			var toList = evt.to;
			var toListItems = $(toList).children('li.sortable-placeholder').remove();
			var fromList = evt.from;
		}
	});
	
});
