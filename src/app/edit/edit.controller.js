'use strict';

angular.module('projetCineFilms')
  .controller('EditCtrl', function ($scope, $routeParams, DataFilm) {


    DataFilm.hasLoaded().then(function(){
      $scope.film = DataFilm.details($routeParams.id);
    }, function(){
      alert('BDD unable to load !');
    });

    $scope.saveFilm = function (film) {
      DataFilm.updateFilm(film)
    };

    $scope.filmRating = [
      {label: "*", value: "Nul"},
      {label: "**", value: "Bof"},
      {label: "***", value: "Pas mal"},
      {label: "****", value: "Top"},
      {label: "*****", value: "Chef d'oeuvre"}];
  });
