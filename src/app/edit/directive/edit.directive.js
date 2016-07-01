'use strict';

angular.module('projetCineFilms')
  .directive('editMovieDir', function(){
    return {
      restrict: 'E',
      templateUrl: 'app/edit/directive/edit.template.html',
      transclude: true,
      scope: {
        data:'='
      },
      controller: function($scope, $location, $routeParams, $firebaseArray, Movies, RATING) {

        $scope.filmRating = RATING;

        Movies.getMovie($routeParams.id).then(function(movie) {
          $scope.movie = movie[0];
        });


        $scope.addActor = function() {
          $scope.movie.actors.push({});
        };

        $scope.removeActor = function(index) {
          console.log(index);
          $scope.movie.actors.splice(index, 1);
        };

        $scope.saveMovie = function(movie) {
          Movies.updateMovie(movie);
        };

      },
      link: function (scope) {
        var fileInput = $('#file-upload');

        fileInput.change(function() {
          var file = $(this).get(0).files[0];
          var fileReader = new FileReader(file);

          fileReader.addEventListener('load', function() {
            scope.movie.img = fileReader.result;
          }, false);

          if (file) {
            fileReader.readAsDataURL(file);
          }
        });
      }
    }
  });
