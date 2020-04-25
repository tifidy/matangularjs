(function ()
{
	angular.module('application.component', [
			"ui.router",//ui-router
			"componentPartials",//compiled component templates
			"bootstrap.component"//pageComponents,
			
		])
	.config(_config)
})();

function _config($httpProvider,$stateProvider, $locationProvider, $provide, $urlRouterProvider)
{
	var states = [
		{		
			name:"index",
			abstract: true,
			component:"root.component"	
	  	},
		{
			name:"index.page",
			url:"/",
			component:"index.component"
	    },
		{		
			name:"list",
			abstract: true,
			component:"root.component"	
	  	},
		{
			name:"list.page",
			url:"/list",
			component:"list.component"
	    },

	];

	states.forEach(function(state) 
	{
		$stateProvider.state(state);
	});
	$locationProvider.html5Mode(true);  
	//$urlRouterProvider.deferIntercept();
	$urlRouterProvider.when("","/");
	//$httpProvider.interceptors.push("httpInterceptor");
}