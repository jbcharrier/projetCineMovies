'use strict';

angular.module('projetCineFilms')
  .directive('detailsMovieDir', function(){
    return {
      restrict: 'E',
      templateUrl: 'app/details/directive/movie-template.html',
      controller: function($scope, Movies, $routeParams) {
        Movies.getMovie($routeParams.id).then(function(movie) {
          $scope.movie = movie[0];
        });
      }
    }
  });
