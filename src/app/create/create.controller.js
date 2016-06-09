'use strict';

angular.module('projetCineFilms')
  .controller('CreateCtrl', function ($scope, DataFilm, RATING) {
    $scope.filmRating = RATING;
    $scope.createFilm = function(film){
      DataFilm.newFilm(film);
    };
  });
