$(document).ready(function () {

	$('#saveBlend').click(function (e) {
		if (e) {
			e.preventDefault();
		}
		window.location.href = 'save-blend';
	});

	$('#printBlend').click(function (e) {
		if (e) {
			e.preventDefault();
		}
	});

});
