$(document).ready(function () {

	var masterRules = document.getElementById('masterRules');
	Sortable.create(masterRules, {
		animation: 0,
		group: 'masterRules',
		sort: true
	});

});
