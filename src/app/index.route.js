(function() {
  'use strict';

  angular
    .module('projetCineFilms')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/list/list.html',
        controller: 'ListCtrl'
      })
      .when('/login', {
        templateUrl: 'app/login/views/authent.html',
        controller: 'loginCtrl'
      })
      .when('/create', {
        templateUrl: 'app/create/create.html',
        controller: 'CreateCtrl'
      })
      .when('/details/:id', {
        templateUrl: 'app/details/details.html',
        controller: 'DetailsCtrl'
      })
      .when('/edit/:id', {
        templateUrl: 'app/edit/edit.html',
        controller: 'EditCtrl'
      })
      .when('/delete/:id', {
        templateUrl: 'app/list/list.html',
        controller: 'ListCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }
})();
