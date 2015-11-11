angular.module('settingsModule').controller('settingsCtrl',function($scope,$rootScope){

	$scope.initializeView=function(){
		$scope.permission_types=[{id:3,name:'View'},{id:1,name:"Add"},{id:2,name:'Edit'},{id:4,name:'Settings'}];
		$scope.user_types=[
	{
		id:1,
		name:'Admin',
		desc:'Add permission',
		add_permission:true,
		edit_permission:true,
		view_permission:true,
		settings_permission:true
	},
	{
		id:2,
		name:'Moderator',
		desc:'Add permission',
		add_permission:true,
		edit_permission:true,
		view_permission:true,
		settings_permission:false
	},
	{
		id:3,
		name:'Normal User',
		desc:'Edit permission',
		add_permission:false,
		edit_permission:false,
		view_permission:true,
		settings_permission:false
	}
	]
		$scope.selectUserType=function(user_type){
			$rootScope.selected_user=user_type;
	
		}
	}
});