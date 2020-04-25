/*(function ()
{

	angular
		.module("webGuvercin", [
			//"ngRoute", 
			"ui.router",
			"ngCookies", 
			"ngAnimate", 
			"toaster", 
			"angularytics", 
			"componentPartials"
		]).config(_config)
		.run(function (Angularytics,$rootScope,$templateCache)
		{
			$rootScope.$on("$routeChangeStart",
				function (event, next, current)
				{
					if (typeof current !== "undefined")
					{

						$templateCache.remove(current.templateUrl);
					}
				}
			);
			Angularytics.init();
		});

	function _config (
		$httpProvider,
		$stateProvider, 
		$locationProvider, 
		$provide, 
		AngularyticsProvider
		)
	{

		AngularyticsProvider.setEventHandlers(["Console", "GoogleUniversal", "Optimizely"]);

		$provide.decorator("$exceptionHandler", ["$delegate",
			function ($delegate)
			{
				return function (ex, cause)
				{
					$("#technicalProblemScreen").removeClass("hidden");
					$B().Modal().open("technical-problem-screen");

					playMedia($(".crashAudio")[0]);

					setTimeout(function ()
					{
						$(".crashAudio")[0].pause();
					}, 2000);
					setTimeout(function ()
					{

						window.location.href = "index.html?cachePrevent=" + new Date().getTime();
					}, 10000);
					$delegate(ex, cause);
				};
			}
		]);



	var states = [
		{		
			name:"index",
			abstract: true,
	    	templateUrl: 'assets/ng/components/layouts/index.layout.html' 		
	  	},
		{
			name:"index.components",
			url:"/",
		    views: {		
				'Acomponent': 
				{		
					templateUrl: "AModule/a.html",		
					controller: "AController"		
				},		
				'Bcomponent': 
				{		 
					templateUrl: "BModule/b.html",	
					controller: function($scope){ console.log("Bcomponent") }		
				},		
				'Ccomponent': 
				{		
					templateUrl: "CModule/c.html",		
					controller: function($scope){ console.log("Ccomponent") }		
				},		
				'Dcomponent':
				{		
					templateUrl: "DModule/d.html",		
					controller: function($scope){ console.log("Ccomponent") }		
				}
			}
	    },
		{		
			name:"list",
			abstract: true,
	    	templateUrl: 'assets/ng/components/layouts/list.layout.html' 		
	  	},
		{
			name:"list.components",
			url:"/list",
		    views: {		
				'TableComponent': 
				{		
					templateUrl: "TableComponent/table.html",		
					controller: function($scope){ console.log("Table Component Loaded") }		
				},
				'Acomponent': 
				{		
					templateUrl: "AModule/a.html",		
					controller: function($scope){ console.log("Acomponent") }		
				},		
				'Bcomponent': 
				{		 
					templateUrl: "BModule/b.html",	
					controller: function($scope){ console.log("Bcomponent") }		
				},	
			}
	    }
	];

	states.forEach(function(state) 
	{
		$stateProvider.state(state);
	});
	$locationProvider.html5Mode(true);  

	$httpProvider.interceptors.push("httpInterceptor");

	}

})();*/