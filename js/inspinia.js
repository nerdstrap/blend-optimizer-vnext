/*
 *
 *   INSPINIA - Responsive Admin Theme
 *   version 2.4
 *
 */

var Inspinia = function () {
	return {
		init: function () {
			$('.collapse-link').click(function (e) {
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

			$('.close-link').click(function (e) {
				var content = $(e.target).closest('div.ibox');
				content.remove();
			});
		}
	};
}();


