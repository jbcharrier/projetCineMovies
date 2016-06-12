'use strict';

angular.module('projetCineFilms')
.factory('user', function ($location, authRef, ConnectedUser){
  var user = null;

  function connect(){
    return function (email, password) {
      authRef.$authWithPassword({
        email: email,
        password: password
      }).then(function(authData){
        user = new ConnectedUser(authData.uid, email);
        $location.path('/');
      }).catch(function (error){
        console.error('Authentication failed: ', error);
      });
    };
  }

  return {
    connect: connect(),
    validConnection: function(){
      console.log(user);
      if(!user){
        if(authRef.$getAuth()){
          user = new ConnectedUser(authRef.$getAuth().uid, authRef.$getAuth().password.email);
        }
        else {
          $location.path('/login')
        }
      }
    },
    isConnected: function () {
      if(user) {
        return user.isConnected()
      }
      return false;
    },
    disconnect: function () {
      if(user){
        user.disconnect();
      }
    },
    get: function(){
      return user;
    }
  }
});
