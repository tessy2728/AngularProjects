'use strict';
angular.module('homeModule',[]);
angular.module('userModule',[]);
angular.module('UserPortalApp',['ui.router','ui.bootstrap','homeModule','userModule'])
.config(function($stateProvider,$urlRouterProvider){
	$urlRouterProvider.otherwise('/dashboard/home');
	$stateProvider
	      .state('dashboard', {
	    		abstract:true,
	        	url: '/dashboard',
	        	templateUrl : 'common_components/views/dashboard.html',
				 controller:'dashboardCtrl'
	       	})
	      .state('dashboard.home', {
				url: '/home',
				templateUrl : 'homeModule/views/home.html',
				controller:'homeCtrl' 
			})
	      .state('dashboard.usermanagement', {
				url: '/usermanagement',
				templateUrl : 'userModule/views/list_users.html',
				controller:'manageUsersCtrl' 
			});
});