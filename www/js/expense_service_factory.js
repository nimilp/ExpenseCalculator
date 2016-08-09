"use strict";
(
  function(){
  angular.module('expense.service.factory',[])
  .factory('cardServices',['$http',function($http){
    var cardServices = {};
    var baseUrl = '';
    cardServices.getCards = function(success, error){
      return $http({
        method:'GET',
        url:baseUrl+'/jsons/cards.json'
      }).then(success,error);

    }
    return cardServices;
  }])

})();
