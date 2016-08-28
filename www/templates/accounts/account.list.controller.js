'use strict';
(function () {
  angular.module('account.module')
  .controller('accountlistcontroller',['$scope','cardServices','$ionicActionSheet','$timeout','$rootScope','$ionicLoading', function ($scope,$cardServices,$ionicActionSheet,$timeout,$rootScope,$ionicLoading){

    var success = function(cards){
      console.log(cards);
      $scope.cards = cards;
    }
    $scope.refresh = function(){
      $cardServices.getCards().then(success)
      .finally(function() {
       // Stop the ion-refresher from spinning
       $scope.$broadcast('scroll.refreshComplete');
     });;
    }
    console.log($rootScope.message);
    if($rootScope.message === 'Done'){
      $rootScope.message = '';
      $ionicLoading.show({ template: 'Item Added!', noBackdrop: true, duration: 2000 });
    }
    $cardServices.getCards().then(success);

    $scope.showContextMenu = function(id){

      var hideSheet = $ionicActionSheet.show({
      'destructiveText':'Delete',
      'titleText':'Delete Expenses',
      'cancelText':'Cancel',
      'cancel':function(){

      },
      'destructiveButtonClicked':function(){
        //console.log(index+' on delete click');
        console.log(id);
        return true;
      },
      'cancelOnStateChange':'true'

    });

  }

  }]);


})();
