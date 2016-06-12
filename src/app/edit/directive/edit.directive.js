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
      controller: function($scope, $location, $routeParams, Movies, RATING) {
        $scope.filmRating = RATING;
        $scope.movie = Movies.details($routeParams.id);
        $scope.saveMovie = function() {
          Movies.updateMovie($scope.movie)
            .then(function(movie){
            })
            .catch(function(){
            })
        }
      },
      link: function (scope, element) {
        var fileInput = element.find('#file-upload');
        var fileToUpload = null;

        fileInput.bind('change', function (fileUpload) {
          var file = fileUpload.target.files[0];
          var fileReader = new FileReader();
          fileReader.onload = function (file) {
            fileToUpload = file.target.result;
            scope.movie.img = file.target.result;
          };
          if (file) {
            fileReader.readAsDataURL(file);
          }
        });
      }
    }
  });
