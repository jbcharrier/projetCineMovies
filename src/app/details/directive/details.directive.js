'use strict';

angular.module('projetCineFilms')
  .directive('detailsFilmDir', function(){
    return {
      restrict: 'E',
      templateUrl: 'app/details/directive/details-template.html',
      controller: function($scope, DataFilm, $routeParams){

        DataFilm.hasLoaded().then(function(){
          $scope.film = DataFilm.details($routeParams.id);
        }, function(){
          alert('BDD unable to load !');
        });
      }
    }
  });
