'use strict';
(function () {
  angular.module('account.module')
  .controller('account.edit.controller',['$scope','cardServices','$stateParams', function ($scope,$cardServices,$stateParams){
    $scope.save = function(card){
      console.log(card)
      if(card.valid){
        //console.log(card.name);
      }
    }

  }]);
})();
