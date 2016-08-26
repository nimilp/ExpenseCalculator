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
    cardServices.getCard = function(id){
      return $http({
        method:'GET',
        url:baseUrl+'/jsons/cards.json'
      }).then(function (response){
        var cards = response.data.cards;
        for(var i = 0;i<cards.length;i++){
          if(id === cards[i].id){
            return cards[i];
          }
        }
        //return response.data.cards;
      },error);
    }
    cardServices.saveOrUpdateCard = function(card){
      var _self = this;
      if(card.id === -1){
        _self.getCards().push(card);
      }else{
        var existingCard = _self.getCard(card.id);
        existingCard.name = card.name;
        existingCard.description = card.description;
        existingCard.budget = card.budget;
      }
      console.log(existingCard);
      console.log(_self.getCards());
    }
    return cardServices;
  }])

})();
