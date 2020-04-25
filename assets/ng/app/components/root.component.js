(function ()
{
	angular.module('bootstrap.component', [
		"index.page.component",
		"list.page.component",
		"application.services"
	])
	.component('root.component', //root
	{
		templateUrl:  "root.html",
		controller:[RootController]
	});
})();

	function RootController() {
	}

	RootController.prototype = {
		$onInit: function() {}
	};