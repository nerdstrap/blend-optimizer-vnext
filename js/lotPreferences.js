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
		sort: true
	});

	$('#availableLotsPlaceholderListItem').hide();
	$('#excludedLotsPlaceholderListItem', '#ineligibleLotsPlaceholderListItem').show();

});
