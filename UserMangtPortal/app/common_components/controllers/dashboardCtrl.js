angular.module('UserPortalApp').controller('dashboardCtrl',function($scope){
	
	$scope.initialize=function(){
		var height=screen.height-85-40-40;
		$('#content_part').css('height',height);
		$('.content_body').css({'height':height},{'overflow-y':'auto'},{'overflow-x':'hidden'});
		console.log('screen height:'+height);
	}
});