'use strict';

angular.module('projetCineFilms')
.directive('topMenu', function () {
  return {
    templateUrl: 'app/components/topmenu/menu.html',
    restrict: 'E',
    controller : function($scope, user) {

      $scope.$watch(function(){
        return user.isConnected();
      }, function(){
        $scope.user = user.get();
      });

      $scope.isConnected = function () {
        return user.isConnected();
      };

      $scope.disconnect = function () {
        user.disconnect();
      }
    }
  };
});
