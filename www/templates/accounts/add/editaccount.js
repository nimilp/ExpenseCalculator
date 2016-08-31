'use strict';
(function () {
  angular.module('account.module')
  .controller('account.edit.controller',['$scope','cardServices','$stateParams','$ionicLoading','$state','$ionicHistory', function ($scope,$cardServices,$stateParams,$ionicLoading,$state,$ionicHistory){

    var id = $stateParams.id;
  //  id= parseInt(id);
    var success = function(card){
      $scope.card = card

    }
  //  debugger;
    //var getCard = function(id){

      $cardServices.getCard(id).then(success);
  //

    $scope.save = function(card){
      console.log(card)
      if(card.valid){
        //console.log(card.name);
        $cardServices.saveOrUpdateCard(card).then(function(response){
          console.log(response);
          //$ionicHistory.goBack();//
          $ionicHistory.nextViewOptions({disableBack:true});
          $state.go('app.accounts',{success:response.success});
          //$rootScope.message = 'Done';
        });
      }
    }

  }]);
})();
