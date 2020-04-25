(function ()
{
	angular.module("index.page.component", [
		"application.services",
		"datatable.component",
		"chip.component"
	])
	.component("index.component", {
		templateUrl:"pages/index/index.html",
		scope: {

		},
		bindToController: true,
		controller:["peopleService", "$state", "$scope", IndexController]
	});

	function IndexController(peopleService, $state, $scope) 
	{
		this.listOfCars = [
			{id:1,name:"Ferrari"},
			{id:2,name:"Buggati"},
			{id:3,name:"Mercedes"},
			{id:4,name:"Porsche"},
			{id:5,name:"Lamborghini"},
			{id:6,name:"Massarati"},
			{id:7,name:"Rolce Royce"},
			{id:8,name:"Vulcan"},
			{id:9,name:"Tesla"},
			{id:10,name:"doğan"},
			{id:11,name:"panzer"},
			{id:12,name:"tank"},
			{id:13,name:"Uçak"},
			{id:14,name:"Martı"},
			{id:15,name:"Çok uzun bir araba"},
			{id:16,name:"Model x"},
			{id:17,name:"Peugoet 3008"},
			{id:18,name:"Opel"},
			{id:19,name:"Seat"},
			{id:20,name:"Walkswagen"},
			{id:21,name:"Golf"},
			{id:22,name:"Polo"},
			{id:23,name:"Passat"},
			{id:24,name:"Astra"},
			{id:25,name:"Mini Cooper"},
			{id:26,name:"BMW"},
			{id:27,name:"Traktör"},
			{id:28,name:"Kaykay"},
			{id:29,name:"Bisiklet"}
		]
		this.listOfSelected = []
		this.onContainerChange = function()
		{
			console.log("container changed")
		}
	}

	IndexController.prototype = {
		$onInit: function() {
		}
	};
})();