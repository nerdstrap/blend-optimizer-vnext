$(document).ready(function () {

	$('#finalizeBlend').click(function (e) {
		if (e) {
			e.preventDefault();
		}
		window.location.href = 'finalize-blend';
	});

	var includedLots = document.getElementById('includedLots1');
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
