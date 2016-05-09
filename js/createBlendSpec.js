$(document).ready(function () {
	$('.assigned-plant-item').click(function (e) {
		$target = $(e.target);
		$target.toggleClass('active');
	});
});
