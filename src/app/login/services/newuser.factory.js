'use strict';

angular.module('projetCineFilms')
  .factory('NewUser', function ($location, authRef) {
    

    function createnewuser (email, password) {
      console.log(authRef);
      authRef.$createUser({
        email: email,
        password: password
      }).then(function(userData) {
        console.log('User created with uid : ' + userData.uid);
      }).catch(function(error) {
        console.log('User not created : ' + error);
      });
      $location.path('/login');
    };

    return {
      createnewuser: createnewuser
    }
  });
