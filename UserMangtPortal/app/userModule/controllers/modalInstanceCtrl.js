angular.module('userModule').controller('ModalInstanceCtrl', function ($scope, $uibModalInstance, item) {
  //alert(item);
  $scope.item = item;
  console.log('item:'+JSON.stringify(item));

  $scope.designations=[{
                        id:1,name:'Software Engineer'
                        } ,
                        {
                        id:2,name:'Test Engineer'
                        },
                        {
                        id:3,name:'Team Lead'
                        },
                        {
                        id:4,name:'CEO'
                        },
                        {
                        id:5,name:'Delivery Manager'
                        },
                        {
                        id:6,name:'Sales Manager'
                        },
                        {
                        id:7,name:'Others'
                        }];
  $scope.genders=[{id:1,name:'Female'},{id:2,name:'Male'}];
  /*$scope.selected = {
    item: $scope.items[0]
  };*/

  $scope.ok = function () {
    $uibModalInstance.close($scope.item);
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
});