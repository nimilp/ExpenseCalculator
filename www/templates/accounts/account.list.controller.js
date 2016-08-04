(function () {
    angular.module('account.module')
    .controller('accountlistcontroller',['$scope','cardServices', function ($scope,$cardServices){

    success = function (response){
      $scope.cards= response.data.cards;
    }
    var error = function(error){
      console.log('Error while getting accounts '+error);
    }

     $cardServices.getCards(success,error);
  //  $scope.data = success();
      //console.log($scope.data);
    }]);
})();
