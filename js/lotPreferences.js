$(document).ready(function () {

	$('#draftBlend').click(function (e) {
		if (e) {
			e.preventDefault();
		}
		window.location.href = 'draft-blend';
	});

	var availableLots = document.getElementById('availableLots');
	Sortable.create(availableLots, {
		handle: ".lot-header",
		animation: 0,
		group: 'availableLots',
		sort: true
	});

	var excludedLots = document.getElementById('excludedLots');
	Sortable.create(excludedLots, {
		handle: ".lot-header",
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

	$('#availableLotsPlaceholderListItem').hide();
	$('#excludedLotsPlaceholderListItem', '#ineligibleLotsPlaceholderListItem').show();

});
