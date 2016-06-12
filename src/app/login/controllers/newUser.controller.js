'use strict';

angular.module('projetCineFilms')
  .controller('createUserCtrl', function ($scope, $location, NewUser) {
    $scope.createNewUser = NewUser.createnewuser;
  });
