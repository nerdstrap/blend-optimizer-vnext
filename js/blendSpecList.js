$(document).ready(function () {

	$('#newBlendSpec').click(function (e) {
		if (e) {
			e.preventDefault();
		}
		window.location.href = 'create-blend-spec';
	});

	$('#editBlendSpec').click(function (e) {
		if (e) {
			e.preventDefault();
		}
		window.location.href = 'blend-spec';
	});

});
