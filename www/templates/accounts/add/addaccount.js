'use strict';
(function () {
  angular.module('account.module')
  .controller('account.add.controller',['$scope','cardServices','$stateParams','$state','$rootScope','$ionicHistory', function ($scope,$cardServices,$stateParams,$state,$rootScope,$ionicHistory){

    $scope.save = function(card){
      console.log(card)
      if(card.valid){
        card.id=-1;
        //console.log(card.name);
        $cardServices.saveOrUpdateCard(card).then(function(){
          $ionicHistory.nextViewOptions({disableBack:true});
          $state.go('app.accounts',{success:response.success});
        });
      }
    }
  }]);
})();
