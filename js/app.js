var App = function () {
	return {
		render: function ($pageRenderDeferred) {
			var $appRenderDeferred = $.Deferred();

			var bodyContainer = $('body');
			$.get('templates/app.mustache.html', function (appTemplateData, textStatus, jqXhr) {
				var appTemplate = appTemplateData;
				bodyContainer.prepend(Mustache.render($(appTemplate).filter('#appTemplate').html()));

				if ($pageRenderDeferred) {
					$pageRenderDeferred().done(function () {
						Inspinia.init();
						$appRenderDeferred.resolve();
					});
				} else {
					Inspinia.init();
					$appRenderDeferred.resolve();
				}
			});

			return $appRenderDeferred.promise();
		}
	};
}();
