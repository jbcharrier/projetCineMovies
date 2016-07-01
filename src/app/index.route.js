(function() {
  'use strict';

  angular
    .module('projetCineFilms')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider
      .when('/login', {
        templateUrl: 'app/login/views/authent.html',
        controller: 'loginCtrl'
      })
      .when('/createuser', {
        templateUrl: 'app/login/views/createuser.html',
        controller: 'createUserCtrl'
      })
      .when('/movies', {
        templateUrl: 'app/list/movies.html',
        controller: 'MoviesCtrl'
      })
      .when('/movies/:id', {
        templateUrl: 'app/details/movie.html',
        controller: 'MovieCtrl'
      })
      .when('/movies/movie/create', {
        templateUrl: 'app/create/create.html',
        controller: 'CreateCtrl'
      })
      .when('/movies/edit/:id', {
        templateUrl: 'app/edit/edit.html',
        controller: 'EditCtrl'
      })
      .otherwise({
        redirectTo: '/movies'
      });
  }
})();
