var DraftBlend = function () {
	return {
		render: function () {
			var deferred = $.Deferred();

			var $contentContainer = $('#content');
			$.when($.get('templates/draftBlend.mustache.html'), $.get('data/draftBlend.json')).then(function (contentTemplateData, contentJsonData) {
				var contentTemplate = contentTemplateData[0];
				var contentJson = contentJsonData[0];
				$contentContainer.append(Mustache.render($(contentTemplate).filter('#draftBlendTemplate').html(), contentJson));

				deferred.resolve();
			});

			return deferred.promise();
		}
	};
}();
