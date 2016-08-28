"use strict";
(
  function(){
  angular.module('expense.service.factory',[])
  .factory('cardServices',['$http',function($http){
    var cardServices = {};
    var baseUrl = 'http://localhost:8081/ip/mytask/accounts';

    var error = function(error){
      console.error('Error while getting accounts '+error);
    }
    cardServices.getCards = function(){
      return $http({
        method:'GET',
        url:baseUrl
      }).then(function (response){
        console.log(response);
        return response.data;
      },error);

    }
    cardServices.getCard = function(id){
      return $http({
        method:'GET',
        url:baseUrl+'/'+id
      }).then(function (response){
        // var cards = response.data.cards;
        // for(var i = 0;i<cards.length;i++){
        //   if(id === cards[i].id){
        //     return cards[i];
        //   }
        // }
        return response.data;
      },error);
    }
    cardServices.saveOrUpdateCard = function(card){
      var _self = this;
      if(card.id === -1){
        return insertCard(card);
      }else{
        return updateCard(card);
      }

    }
    var insertCard = function(card){
      return $http({
        method:'POST',
        url:baseUrl,
        data:card
      }).then(function (response){
        console.log(response)

        //return response.data.cards;
      },error)
    };

    var updateCard = function(card){
      return $http({
        method:'PUT',
        url:baseUrl,
        data:card
      }).then(function (response){
        console.log(response)

        //return response.data.cards;
      },error)
    };

    return cardServices;
  }])

})();
