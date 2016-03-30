$(document).ready(function () {

	$('.collapse-ibox-link').click(function (e) {
		var ibox = $(e.target).closest('div.ibox');
		var button = $(e.target).closest('i');
		var content = ibox.find('div.ibox-content');
		content.slideToggle(200);
		button.toggleClass('fa-chevron-up').toggleClass('fa-chevron-down');
		ibox.toggleClass('').toggleClass('border-bottom');
		setTimeout(function () {
			ibox.resize();
			ibox.find('[id^=map-]').resize();
		}, 50);
	});

	$('.collapse-lot-link').click(function (e) {
		var lot = $(e.target).closest('div.lot');
		var button = $(e.target).closest('i');
		var content = lot.find('div.lot-content');
		content.slideToggle(200);
		button.toggleClass('fa-chevron-up').toggleClass('fa-chevron-down');
		lot.toggleClass('').toggleClass('border-bottom');
		setTimeout(function () {
			lot.resize();
			lot.find('[id^=map-]').resize();
		}, 50);
	});

	$('.chosen-select').chosen(
		{
			'disable_search': true
		}
	);

	var elems = Array.prototype.slice.call(document.querySelectorAll('.js-switch'));
	elems.forEach(function (html) {
		var switchery = new Switchery(html);
	});

});
