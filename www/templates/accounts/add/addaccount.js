'use strict';
(function () {
  angular.module('account.module')
  .controller('account.add.controller',['$scope','cardServices','$stateParams','$state','$rootScope', function ($scope,$cardServices,$stateParams,$state,$rootScope){

    $scope.save = function(card){
      console.log(card)
      if(card.valid){
        card.id=-1;
        //console.log(card.name);
        $cardServices.saveOrUpdateCard(card).then(function(){
          $state.go('app.accounts');
        });
      }
    }
  }]);
})();
