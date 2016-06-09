'use strict';

angular.module('projetCineFilms')
.directive('testAuthent', function () {
  return {
    restrict: 'A',
    controller: function(user) {
      user.validConnection();
    }
  }
});
