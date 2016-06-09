'use strict';

angular.module('projetCineFilms')
  .controller('ListCtrl', function ($scope, DataFilm, $routeParams) {
    
    DataFilm.hasLoaded().then(function(){
      $scope.films = DataFilm.listFilms();
    }, function(){
      alert('BDD unable to load');
    });

    $scope.delete = DataFilm.eraseFilm($routeParams.id);
    
  });
