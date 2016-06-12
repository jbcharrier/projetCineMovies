'use strict';

angular.module('projetCineFilms')
  .directive('moviesDir', function(){
    return {
      restrict: 'E',
      templateUrl: 'app/list/directive/movies-template.html',
      scope: {
        data:'='
      },
      controller: function($scope, Movies, $routeParams){
        $scope.movies = Movies.getMovies();
        $scope.delete = Movies.eraseMovie($routeParams.id);
      }
    }
  });
