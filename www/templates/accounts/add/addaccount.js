'use strict';
(function () {
  angular.module('account.module')
  .controller('account.add.controller',['$scope','cardServices','$stateParams', function ($scope,$cardServices,$stateParams){
    var cards=[];
    var id = -1;
    var success = function (response){

      cards= response.data.cards;

      for(var i=0;i<cards.length;i++){
        var cardid = cards[i].id;

        if(id === cardid){
          $scope.card = cards[i];
          break;
        }else{
          console.error('what?',cards[i]);
        }
      }
    }
    var error = function(error){
      console.log('Error while getting accounts '+error);
    }
    console.log(id)
    id = $stateParams.id;
    id = id === 'undefined'?-1:parseInt(id);
    if(id>-1){
      $cardServices.getCards(success,error);
    }

    $scope.saveOrUpdate = function($scope){
      var card = $scope.submitCard.card.id;
      console.log(cards);
    }

  }]);
})();
