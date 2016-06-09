'use strict';

angular.module('projetCineFilms')
  .directive('listFilmDir', function(){
    return {
      restrict: 'E',
      templateUrl: 'app/list/directive/list-template.html',
      controller: function($scope, DataFilm, $routeParams){

        DataFilm.hasLoaded().then(function(){
          $scope.films = DataFilm.listFilms();
        }, function(){
          alert('BDD unable to load');
        });

        $scope.delete = DataFilm.eraseFilm($routeParams.id);
      }
    }
  });
