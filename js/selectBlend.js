var SelectBlend = function () {
	return {
		render: function () {
			var deferred = $.Deferred();

			var $contentContainer = $('#content');
			$.when($.get('templates/selectBlend.mustache.html'), $.get('data/selectBlend.json')).then(function (contentTemplateData, contentJsonData) {
				var contentTemplate = contentTemplateData[0];
				var contentJson = contentJsonData[0];
				$contentContainer.append(Mustache.render($(contentTemplate).filter('#selectBlendTemplate').html(), contentJson));

				deferred.resolve();
			});

			return deferred.promise();
		}
	};
}();
