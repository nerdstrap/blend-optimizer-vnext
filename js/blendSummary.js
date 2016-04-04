$(document).ready(function () {

	$('#printBlend').click(function (e) {
		if (e) {
			e.preventDefault();
		}
	});

	$('#quitBlend').click(function (e) {
		if (e) {
			e.preventDefault();
		}
		window.location.href = 'dashboard';
	});

});
