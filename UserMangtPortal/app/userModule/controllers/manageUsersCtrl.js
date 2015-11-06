angular.module('userModule').controller('manageUsersCtrl',function($scope,$uibModal, $log){
	
	$scope.initializeView=function(){
			console.log('manageuserctrl');
		$scope.selectedItem={};
		$scope.users=[{
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
	
 		$scope.empFields=['Emp ID','FirstName','Last Name','DOB','Gender','Designation','Salary'];
 		console.log(JSON.stringify($scope.empFields));
	}
	$scope.items = ['item1', 'item2', 'item3'];

	$scope.open = function (size) {
		//alert('hi');
		//alert("$scope.selectedItem;"+JSON.stringify($scope.selectedItem));
	$scope.animationsEnabled = true;
    var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'userModule/views/modal_add_user.html',
      controller: 'ModalInstanceCtrl',
      size: size,
      resolve: {
        item: function () {
          return $scope.selectedItem;
        }
      }
    });

    modalInstance.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
	}
$scope.toggleRadioBtn=function(item){
	if ($('input#checkitem').is(':checked')) {
    	$scope.selectedItem=item;
    } 
}

});