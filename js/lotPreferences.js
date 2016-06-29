$(document).ready(function () {

	$('#generate-draft-blend-button').click(function (e) {
		if (e) {
			e.preventDefault();
		}
		window.location.href = 'draft-blend';
	});

	var availableLots = document.getElementById('availableLots');
	Sortable.create(availableLots, {
		handle: ".lot-heading",
		animation: 0,
		group: 'availableLots',
		sort: true
	});

	var excludedLots = document.getElementById('excludedLots');
	Sortable.create(excludedLots, {
		handle: ".lot-heading",
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

	if ($(excludedLots).children('li').length) {
		$('.sortable-empty').addClass('hidden');
	} else {
		$('.sortable-empty').removeClass('hidden');
	}

	$('#excludedSKUs').on('change', function (evt, params) {
		var $availableLotsList = $('#availableLots');
		var $excludedLotsList = $('#excludedLots');

		if (params.selected) {
			$availableLotsList.find("." + params.selected).appendTo($excludedLotsList);
			$availableLotsList.sortable().sort();
		}

		if (params.deselected) {
			$excludedLotsList.find("." + params.deselected).appendTo($availableLotsList);
		}
	});

});
