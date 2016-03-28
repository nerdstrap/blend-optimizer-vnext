$(document).ready(function () {

	$('.chosen-select').chosen();

	$('#saveBlend').click(function (e) {
		if (e) {
			e.preventDefault();
		}
	});

	$('#printBlend').click(function (e) {
		if (e) {
			e.preventDefault();
		}
	});

});
