"use strict";
(
  function(){
  angular.module('expense.service.factory',[])
  .factory('cardServices',['$http',function($http){
    var cardServices = {};
    var baseUrl = '';

    var error = function(error){
      console.error('Error while getting accounts '+error);
    }
    cardServices.getCards = function(){
      return $http({
        method:'GET',
        url:baseUrl+'/jsons/cards.json'
      }).then(function (response){

        return response.data.cards;
      },error);

    }
    return cardServices;
  }])

})();
