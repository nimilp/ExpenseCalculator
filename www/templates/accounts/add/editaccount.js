'use strict';
(function () {
  angular.module('account.module')
  .controller('account.edit.controller',['$scope','cardServices','$stateParams', function ($scope,$cardServices,$stateParams){

    var id = $stateParams.id;
    id= parseInt(id);
    var success = function(card){
      $scope.card = card
      // for(var i = 0;i<response.length;i++){
      //   if(id === response[i].id){
      //     $scope.card= response[i];
      //   }
      // }
    }
  //  debugger;
    var getCard = function(id){

      $cardServices.getCard(id).then(success);
    };
    getCard(id);

    $scope.save = function(card){
      console.log(card)
      if(card.valid){
        //console.log(card.name);
        $cardServices.saveOrUpdateCard(card);
      }
    }

  }]);
})();
