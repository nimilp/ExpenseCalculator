'use strict';
(function () {
  angular.module('account.module')
  .controller('accountlistcontroller',['$scope','cardServices','$ionicActionSheet','$timeout', function ($scope,$cardServices,$ionicActionSheet,$timeout){

    var success = function(cards){
      $scope.cards = cards;
    }

    $cardServices.getCards().then(success);

    $scope.showContextMenu = function(){
      var hideSheet = $ionicActionSheet.show({
      'destructiveText':'Delete',
      'titleText':'Delete Expenses',
      'cancelText':'Cancel',
      'cancel':function(){

      },
      'destructiveButtonClicked':function(index){
        console.log(index+' on delete click');
        return true;
      },
      'cancelOnStateChange':'true'

    });

  }

  }]);


})();
