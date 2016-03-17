var Index = function () {
	return {
		render: function () {
			var deferred = $.Deferred();

			var $contentContainer = $('#content');
			$.when($.get('templates/index.mustache.html'), $.get('data/index.json')).then(function (contentTemplateData, contentJsonData) {
				var contentTemplate = contentTemplateData[0];
				var contentJson = contentJsonData[0];
				$contentContainer.append(Mustache.render($(contentTemplate).filter('#indexTemplate').html(), contentJson));

				deferred.resolve();
			});

			return deferred.promise();
		}
	};
}();
