'use strict';

angular.module('projetCineFilms')
  .controller('CreateCtrl', function($scope, $location, Movies, RATING) {


    $scope.filmRating = RATING;
    $scope.movie = {};
    $scope.movie.actors = [{}];
    $scope.movie.img = null;

    $scope.addNewActor = function() {
      $scope.movie.actors.push({});
    };

    $scope.removeActor = function(index) {
      $scope.movie.actors.splice(index, 1);
    };

    $scope.createMovie = function() {
      Movies.createMovie($scope.movie)
        .then(function(moviedata){
        })
        .catch(function(){
        })
    };

    var fileInput = $('#file-upload');

    fileInput.change(function() {
      var file = $(this).get(0).files[0];
      var fileReader = new FileReader(file);

      fileReader.addEventListener('load', function() {
        $scope.movie.img = fileReader.result;
      }, false);

      if (file) {
        fileReader.readAsDataURL(file);
      }
    });
  });
