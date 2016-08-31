'use strict';
(function () {
  angular.module('account.module')
  .controller('accountlistcontroller',['$scope','cardServices','$ionicActionSheet','$timeout','$stateParams','$ionicLoading','$ionicHistory', function ($scope,$cardServices,$ionicActionSheet,$timeout,$stateParams,$ionicLoading,$ionicHistory){

    var success = function(cards){
      console.log(cards);
      $scope.cards = cards;
      if($stateParams.success === 'true'){
        // $rootScope.message = '';
        //$ionicHistory.removeBackView();
        console.log($stateParams);
        $ionicLoading.show({ template: 'Item Added!', noBackdrop: true, duration: 2000 });
      }
    }
    $scope.refresh = function(){
      $cardServices.getCards().then(success)
      .finally(function() {
       // Stop the ion-refresher from spinning
       $scope.$broadcast('scroll.refreshComplete');
     });;
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
        $cardServices.deleteCard(id).then(function(response){
          console.log(id+' deleted');
        })
        return true;
      },
      'cancelOnStateChange':'true'

    });

  }

  }]);


})();
