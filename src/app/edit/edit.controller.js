'use strict';

angular.module('projetCineFilms')
  .controller('EditCtrl', function ($scope, $routeParams, DataFilm, RATING) {

    $scope.filmRating = RATING;

    DataFilm.hasLoaded().then(function(){
      $scope.film = DataFilm.details($routeParams.id);
    }, function(){
      alert('BDD unable to load !');
    });

    $scope.saveFilm = function (film) {
      DataFilm.updateFilm(film)
    };

  });
