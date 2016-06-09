'use strict';

angular.module('projetCineFilms')
.controller('loginCtrl', function ($scope, $location, user) {

  if(user.isConnected()){
    $location.path('/');
  }

  var initUser = {
    email : '',
    password : ''
  };

  $scope.user = angular.copy(initUser);

  $scope.reset = function () {
    $scope.user = angular.copy(initUser);
  };

  $scope.connect = function (email, password) {
    user.connect(email, password);
  };
});
