'use strict';

angular.module('projetCineFilms')
  .controller('CreateCtrl', function ($scope, DataFilm) {
    $scope.createFilm = function(film){
      DataFilm.newFilm(film);
    };
    $scope.filmRating = [
      {label: "*", value: "Nanar"},
      {label: "**", value: "Bof"},
      {label: "***", value: "Pas mal"},
      {label: "****", value: "Top"},
      {label: "*****", value: "Chef d'oeuvre"}];
  });
