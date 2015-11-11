angular.module('userModule').controller('ModalInstanceCtrl', function ($scope, $uibModalInstance, selectedItemforEdit) {
  //alert(item);
  $scope.item = selectedItemforEdit;
  console.log('item:'+JSON.stringify($scope.item));

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
  $scope.dateOptions = {
        changeYear: true,
        changeMonth: true,
        yearRange: '1900:-0',
        dateFormat: 'MMM dd, yyyy'
    };
    
  $scope.saveDetails = function () {
    var users=[];
    console.log('item:'+JSON.stringify($scope.item));
    $scope.item.gender=$.grep($scope.genders, function( item ) {                                 
                                  return item.id==$scope.item.gender.id;
                              })[0];
    $scope.item.designation=$.grep($scope.designations, function( item ) {                                 
                                  return item.id==$scope.item.designation.id;
                              })[0];
    if(!isUndefinedOrNull(localStorage.getItem("Users"))){

       users =JSON.parse(localStorage.getItem("Users"));
      
      if(!isUndefinedOrNull($scope.item.id))
      {  

        /*$scope.user= $.grep(users, function( item ) {
                                  //item=$scope.item;
                                  return item.id==$scope.item.id;
                              });*/
        removeItem(users,'id',$scope.item.id);
       //if(!isUndefinedOrNull($scope.user))
          users.push($scope.item);
      }
      else
       {
        $scope.item.id=$scope.item.fname.substring(0,3)+'qburst'+Math.floor((Math.random()*6)+1);
        users.push($scope.item);
      }
    }
    else
       {
        //if()
        $scope.item.id=$scope.item.fname.substring(0,3)+'qburst'+Math.floor((Math.random()*6)+1);
        users.push(item);
       }
    localStorage.setItem("Users",JSON.stringify(users));
    console.log("Saved details are:"+JSON.stringify(users));
    $uibModalInstance.close(users);
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
});