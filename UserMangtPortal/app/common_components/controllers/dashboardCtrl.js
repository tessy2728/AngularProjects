angular.module('UserPortalApp').controller('dashboardCtrl',function($scope,$rootScope,$location){
	
	$scope.initialize=function(){
		var height=screen.height-85-40-40;
		$('#content_part').css('height',height);
		$('.content_body').css({'height':height},{'overflow-y':'auto'},{'overflow-x':'hidden'});
		console.log('screen height:'+height);
        //$scope.currentPath = $location.path();
	}
	$scope.$parent.myScrollOptions = {
        snap: false,
        onScrollEnd: function ()
        {
            alert('finshed scrolling');
        }
    };

    // expose refreshiScroll() function for ng-onclick or other meth
    $scope.refreshiScroll = function ()
    {
        $scope.$parent.myScroll['wrapper'].refresh();
    };
});