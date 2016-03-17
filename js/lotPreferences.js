var LotPreferences = function () {
	return {
		render: function () {
			var deferred = $.Deferred();

			var $contentContainer = $('#content');
			$.when($.get('templates/lotPreferences.mustache.html'), $.get('data/lotPreferences.json')).then(function (contentTemplateData, contentJsonData) {
				var contentTemplate = contentTemplateData[0];
				var contentJson = contentJsonData[0];
				$contentContainer.append(Mustache.render($(contentTemplate).filter('#lotPreferencesTemplate').html(), contentJson));

				deferred.resolve();
			});

			return deferred.promise();
		}
	};
}();
