(function ()
{
	angular.module("datatable.component",[])
	.component("tableDynamic", {
		templateUrl:"shared/datatable/data-table.html",
		scope: {

		},
		transclude: {
			
		},
		controller:DataTableController
	});
})();

	function DataTableController() {
		console.log("data table")
	}

	DataTableController.prototype = {
		$onInit: function() {
			console.log("init")
		}
	};