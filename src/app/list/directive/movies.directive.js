'use strict';

angular.module('projetCineFilms')
  .directive('moviesDir', function(){
    return {
      restrict: 'E',
      templateUrl: 'app/list/directive/movies-template.html',
      scope: {
        movies:'='
      },
      controller: function($scope, Movies){

        $scope.delete = function(movie) {
          Movies.deleteMovie(movie)
          .then(function() {
          })
          .catch(function(error) {
            console.log('error', error);
          });
        }
      }
    }
  });
