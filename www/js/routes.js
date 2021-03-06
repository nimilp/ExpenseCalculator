(function () {angular.module('starter.routes',[])
.config(function($stateProvider,$urlRouterProvider){
    $stateProvider.state('app',{
        url:'/app',
        templateUrl:'templates/menu.html',
        controller:'HomeController',
        abstract:true
    })
    .state('app.home',{
           url:'/home',
           views:{
               'mainContent':{
                   templateUrl:'templates/home/home.html',
                   controller:'HomeController'
                }
           }
    })
    .state('app.listexpenses',{
        url:'/expenseslist',
        views:{
            'mainContent':{
                templateUrl:'templates/expenses/expenselist.html',
                controller:'ExpenseListController'
            }
        
        }
    })
    .state('app.categories',{
          url:'/categorylist',
          views:{
              'mainContent':{
                templateUrl:'templates/categories/CategoryList.html',
                controller:'categorylistcontroller'
              }
           }
           })
    .state('app.accounts',{
        url:'/accounts',
        views:{
            'mainContent':{
                templateUrl:'templates/accounts/accountlist.html',
                controller:'accountlistcontroller'
            }
    }
    });
    
    $urlRouterProvider.otherwise('app/home');
});
            })();