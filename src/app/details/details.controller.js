'use strict';

angular.module('projetCineFilms')
  .controller('DetailsCtrl', function ($scope, DataFilm, $routeParams) {

    DataFilm.hasLoaded().then(function(){
      $scope.film = DataFilm.details($routeParams.id);
    }, function(){
      alert('BDD unable to load !');
    });
  });
