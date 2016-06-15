angular.module('projetCineFilms')
  .factory('Movies', function ($firebaseArray, $q, SERVER_URL) {


////////////////////////////////////////////
/////////////////// BDD ////////////////////
////////////////////////////////////////////

    var bddRef = new Firebase(SERVER_URL);
    var datas = $firebaseArray(bddRef);



////////////////////////////////
///////////// CRUD /////////////
////////////////////////////////

    function showMovie(id){
      var filmToShow;
      for(var i = 0; i < datas.length; i++){
        if(datas[i].name == id){
          filmToShow = datas[i];
        }
      }
      return filmToShow;
    }

    function saveMovie(movie){
      datas.$save(movie);
    }

    function eraseMovie(id){
      for(var j = 0; j < datas.length; j++){
        if(datas[j].name == id){
          datas.$remove(datas[j]).then(function (){
            console.log('The film is now removed from database !');
          });
        }
      }
    }



/////////////////////////////////////////////////////////
///////////// Upload de l'affiche et Create /////////////
/////////////////////////////////////////////////////////


    function createMovie(movie){
      var myNewFilm = {
        "name": movie.name,
        "realisator": movie.realisator,
        "actors": movie.actors,
        "img": movie.img,
        "releaseDate": movie.releaseDate.getTime(),
        "rating": movie.rating
      };
      if(!movie.img){
        myNewFilm.affichefile = null;
      }
      return datas.$add(myNewFilm).then(function (movie){
        console.log('The new film is now saved in the database !' + movie);
      })
        .catch(function(error){
        });
    }

    return {
      connection: datas,
      getMovies: function(){ return datas;},
      details: showMovie,
      createMovie: createMovie,
      updateMovie: saveMovie,
      eraseMovie: eraseMovie
    }
  });
