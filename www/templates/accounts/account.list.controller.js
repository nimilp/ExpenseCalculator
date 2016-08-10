'use strict';
(function () {
  angular.module('account.module')
  .controller('accountlistcontroller',['$scope','cardServices','$ionicActionSheet','$timeout', function ($scope,$cardServices,$ionicActionSheet,$timeout){

    var success = function (response){

      $scope.cards= response.data.cards;
    }
    var error = function(error){
      console.log('Error while getting accounts '+error);
    }

    $cardServices.getCards(success,error);

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
