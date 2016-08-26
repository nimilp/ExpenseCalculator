// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
(function () {angular.module('ExpenseCalculator', ['ionic','ngMessages','ExpenseCalculator.routes','ExpenseCalculator.maincontroller','expense.module','budget.module','account.module','expense.service.factory'])
.constant('$ionicConfigLoading',{
  template:'<h3><icon ios="ion-ios7-reloading" android="ion-loading-c" default="ion-refreshing"></icon></h3>Loading...'
})

.run(function($ionicPlatform,$rootScope,$ionicLoading) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  })
  $rootScope.$on('loading:show',function(){
      $ionicLoading.show({
          template:'<p>Loading...</p><ion-spinner></ion-spinner>'
      })
  })
  $rootScope.$on('loading:hide',function(){
      $ionicLoading.hide()
  })
  ;
})
.config(function($httpProvider){
    $httpProvider.interceptors.push(function($rootScope){
        return{
            request: function(config){

                if(config.url.indexOf('/jsons/')!=-1){
                  console.log(config.url);
                  $rootScope.$broadcast('loading:show')
                }
                return config
            },
            response: function(response){
              console.log(response);
                $rootScope.$broadcast('loading:hide')
                return response
            }
        }
    })
})
})();
