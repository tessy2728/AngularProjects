'use strict';
angular.module('homeModule',[]);
angular.module('userModule',[]);
angular.module('settingsModule',[]);
angular.module('UserPortalApp',['ui.router','ui.bootstrap','ng-iscroll','ui.date','ngAnimate','homeModule','userModule','settingsModule'])
.run(function($rootScope) {
    $rootScope.selected_user = {
		id:1,
		name:'Admin',
		desc:'View permission',
		add_permission:true,
		edit_permission:true,
		view_permission:true,
		settings_permission:true
	};
})
.config(function($stateProvider,$urlRouterProvider,$locationProvider){
	$urlRouterProvider.otherwise('/dashboard/Home');
	
	$stateProvider
	      .state('dashboard', {
	    		abstract:true,
	        	url: '/dashboard',
	        	templateUrl : 'common_components/views/dashboard.html',
				 controller:'dashboardCtrl'
	       	})
	      .state('dashboard.Home', {
				url: '/Home',
				templateUrl : 'homeModule/views/home.html',
				controller:'homeCtrl' 
			})
	      .state('dashboard.usermanagement', {
				url: '/usermanagement',
				templateUrl : 'userModule/views/list_users.html',
				controller:'manageUsersCtrl' 
			})
	      .state('dashboard.settings', {
				url: '/settings',
				templateUrl : 'settingsModule/views/setting_permissions.html',
				controller:'settingsCtrl' 
			});
	      // use the HTML5 History API
       // $locationProvider.html5Mode(true);
        /*if(window.history && window.history.pushState){
            //$locationProvider.html5Mode(true); will cause an error $location in HTML5 mode requires a  tag to be present! Unless you set baseUrl tag after head tag like so: <head> <base href="/">

         // to know more about setting base URL visit: https://docs.angularjs.org/error/$location/nobase

         // if you don't wish to set base URL then use this
         $locationProvider.html5Mode({
                 enabled: true,
                 requireBase: false
          });
        }*/
        $locationProvider.html5Mode(true);
        $urlRouterProvider.rule(function ($injector, $location) {
       //what this function returns will be set as the $location.url
        var path = $location.path(), normalized = path.toLowerCase();
        if (path != normalized) {
            //instead of returning a new url string, I'll just change the $location.path directly so I don't have to worry about constructing a new url string and so a new state change is not triggered
            $location.replace().path(normalized);
        }
        //return normalized;


        // because we've returned nothing, no state change occurs
    });
        //$locationProvider.html5Mode({ enabled: true, requireBase: true }).hashPrefix('!');
});