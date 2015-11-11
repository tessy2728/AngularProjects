angular.module('userModule').controller('manageUsersCtrl',function($scope,$uibModal, $log){
	
	$scope.initializeView=function(){
			console.log('manageuserctrl');
		//$scope.selectedItem={};
		
		var mode="add";
		$scope.empFields=['Emp ID','FirstName','Last Name','DOB','Gender','Designation','Salary'];
 		console.log(JSON.stringify($scope.empFields));
 		if(isUndefinedOrNull(JSON.parse(localStorage.getItem("Users")))){
 			$scope.users=[];
 		}
 		else
			$scope.users=JSON.parse(localStorage.getItem("Users"));
		console.log(JSON.stringify($scope.users));
		
		/*$scope.users=[{
			id:"c123",
			fname:"Tessy",
			lname:"Thomas",
			dob:"06-04-1989",
			gender:{id:1,name:"Female"},
			designation:{
				id:1,
				name:"Software Engineer"
			},
			salary:35000

		},
		{
			id:"c124",
			fname:"Testo",
			lname:"Thomas",
			dob:"06-04-1989",
			gender:{id:2,name:"Male"},
			designation:{
				id:1,
				name:"Software Engineer"
				},
			salary:35000

		},
		{
			id:"c125",
			fname:"Tessa",
			lname:"Thomas",
			dob:"06-04-1989",
			gender:{id:1,name:"Female"},
			designation:{
				id:1,
				name:"Software Engineer"
				},
			salary:35000

		},
		{
			id:"c123",
			fname:"Tessy",
			lname:"Thomas",
			dob:"06-04-1989",
			gender:{id:1,name:"Female"},
			designation:{
				id:1,
				name:"Software Engineer"
				},
			salary:35000

		},
		{
			id:"c124",
			fname:"Testo",
			lname:"Thomas",
			dob:"06-04-1989",
			gender:{id:2,name:"Male"},
			designation:{
				id:1,
				name:"Software Engineer"
				},
			salary:35000

		},
		{
			id:"c125",
			fname:"Tessa",
			lname:"Thomas",
			dob:"06-04-1989",
			gender:{id:1,name:"Female"},
			designation:{
				id:1,
				name:"Software Engineer"
				},
			salary:35000

		},
		{
			id:"c123",
			fname:"Tessy",
			lname:"Thomas",
			dob:"06-04-1989",
			gender:{id:2,name:"Male"},
			designation:{
				id:1,
				name:"Software Engineer"
				},
			salary:35000

		},
		{
			id:"c124",
			fname:"Testo",
			lname:"Thomas",
			dob:"06-04-1989",
			gender:{id:1,name:"Female"},
			designation:{
				id:1,
				name:"Software Engineer"
				},
			salary:35000

		},
		{
			id:"c123",
			fname:"Tessy",
			lname:"Thomas",
			dob:"06-04-1989",
			gender:{id:1,name:"Female"},
			designation:{
				id:1,
				name:"Software Engineer"
				},
			salary:35000

		},
		{
			id:"c124",
			fname:"Testo",
			lname:"Thomas",
			dob:"06-04-1989",
			gender:{id:2,name:"Male"},
			designation:{
				id:1,
				name:"Software Engineer"
				},
			salary:35000

		},
		{
			id:"c125",
			fname:"Tessa",
			lname:"Thomas",
			dob:"06-04-1989",
			gender:{id:1,name:"Female"},
			designation:{
				id:2,
				name:"Test Engineer"
				},
			salary:35000

		}
		];
	*/
	console.log($scope.users.length);

 		
	}
	$scope.$parent.myScrollOptions = {
        snap: false,
        onScrollEnd: function ()
        {
            alert('finshed scrolling');
        }

    };



	$scope.items = ['item1', 'item2', 'item3'];

	$scope.open = function (mode) {
		//alert('hi');
		//alert("$scope.selectedItem;"+JSON.stringify($scope.selectedItem));
		
		if(mode == 2 && isUndefinedOrNull($scope.selectedItem)){

		}
		else{
				if(mode == 1){
					//$scope.selectedItem={};
					$('input[name=optradio]').attr('checked',false);
					console.log('$scope.selectedItem:'+JSON.stringify($scope.selectedItem));
				$scope.animationsEnabled = true;
    			var modalInstance = $uibModal.open({
      				animation: $scope.animationsEnabled,
      				templateUrl: 'userModule/views/modal_add_user.html',
      				controller: 'ModalInstanceCtrl',
      				resolve: {
        				selectedItemforEdit: function () {
          					return {};
        				}
        			}
      			});	
      			modalInstance.result.then(function (selectedItem) {
     $scope.safeApply(function(){
     	$scope.users = selectedItem;
     	$('input[name=optradio]').attr('checked',false);
     	$scope.selectedItem={};
     	    console.log("Saved details $scope.users are:"+JSON.stringify($scope.users));
     });
    
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
				}
				//console.log('$scope.selectedItem:'+JSON.stringify($scope.selectedItem));
				else{
					$scope.animationsEnabled = true;
    			var modalInstance = $uibModal.open({
      				animation: $scope.animationsEnabled,
      				templateUrl: 'userModule/views/modal_add_user.html',
      				controller: 'ModalInstanceCtrl',
      				resolve: {
        				selectedItemforEdit: function () {
          					return $scope.selectedItem;
        				}
        			}
      			});
      			modalInstance.result.then(function (selectedItem) {
     $scope.safeApply(function(){
     	$scope.users = selectedItem;
     	$('input[name=optradio]').attr('checked',false);
     	$scope.selectedItem={};
     	    console.log("Saved details $scope.users are:"+JSON.stringify($scope.users));
     });
    
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });	
      			}		
    		}
	
    	
	
	}
	$scope.refresh = function(){
		alert('refreshed');
		console.log('refresh clicked');
	}
	// expose refreshiScroll() function for ng-onclick or other meth
    $scope.refreshiScroll = function ()
    {
    	 //alert('refreshed');
        $scope.$parent.myScroll['wrapper'].refresh();
        $scope.$parent.myScroll['wrapper'].scrollTo(0, 0);
    };
$scope.toggleRadioBtn=function(item){
	if ($('input#checkitem').is(':checked')) {
    	$scope.selectedItem=item;
    } 
}
$scope.safeApply = function( fn ) {
  		    var phase = this.$root.$$phase;
  		    if(phase == '$apply' || phase == '$digest') {
  		        if(fn) {
  		            fn();
  		        }
  		    } else {
  		        this.$apply(fn);
  		    }
  		};

});