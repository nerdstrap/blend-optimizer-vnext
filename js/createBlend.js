$(document).ready(function () {

	$('.chosen-select').chosen();

	$('#goToLotPreferences').click(function (e) {
		if (e) {
			e.preventDefault();
		}
		window.location.href = 'lot-preferences';
	});

});
