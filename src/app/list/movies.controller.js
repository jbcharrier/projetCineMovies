'use strict';

angular.module('projetCineFilms')
  .controller('MoviesCtrl', function ($scope, Movies) {
    $scope.movies = Movies.getMovies();
  });
