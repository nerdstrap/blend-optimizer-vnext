$(document).ready(function () {

	$('#finalizeBlend').click(function (e) {
		if (e) {
			e.preventDefault();
		}
		window.location.href = 'finalize-blend';
	});

	var includedLots = document.getElementById('includedLots');
	Sortable.create(includedLots, {
		handle: ".lot-header",
		animation: 0,
		group: 'availableLots',
		sort: true
	});

	var availableLots = document.getElementById('availableLots');
	Sortable.create(availableLots, {
		handle: ".lot-header",
		animation: 0,
		group: 'availableLots',
		sort: true
	});

});
