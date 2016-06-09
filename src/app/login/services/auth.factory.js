'use strict';

angular.module('projetCineFilms')
.factory('authRef', function ($firebaseAuth, SERVER_URL){
  var ref = new Firebase(SERVER_URL);
  console.log(ref);
  return $firebaseAuth(ref);
});
