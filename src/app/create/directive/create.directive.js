'use strict';

angular.module('projetCineFilms')
  .directive('createMovieDir', function(){
    return {
      restrict: 'E',
      templateUrl: 'app/create/directive/create.template.html',
      transclude: true,
      scope: {
        data:'='
      },
      controller: function($scope, $location, Movies, RATING){
        $scope.filmRating = RATING;
        $scope.createMovie = function() {
          Movies.createMovie($scope.movie)
            .then(function(moviedata){
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
