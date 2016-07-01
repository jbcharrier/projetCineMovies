angular
  .module('projetCineFilms')
  .factory('Movies', function ($firebaseArray, $q, SERVER_URL) {


    var bddRef = new Firebase(SERVER_URL);
    var moviesList = $firebaseArray(bddRef);


    function getMovies() {
      return moviesList;
    }


    function getMovie(id) {
      return moviesList.$loaded()
      .then(function(data) {
        console.log('data', data);
        var myMovie = [];
        data.map(function(element) {
          if(element.name == id){
            myMovie.push(element);
          }
        });
        return myMovie;
      })
      .catch(function(error) {
        console.log('error', error);
      });
    }


    function updateMovie(id) {
      moviesList.$save(id)
      .then(function(movie) {
        console.log('movie', movie);
      })
      .catch(function(error) {
        console.log('error', error);
      });
    }


    function deleteMovie(movie) {
      return moviesList.$remove(movie)
      .then(function() {
        console.log('The film is now removed from database !');
      })
      .catch(function(error) {
        console.log('error', error)
      });
    }


    function createMovie(movie) {
      return moviesList.$add(
        {
        "name": movie.name,
        "realisator": movie.realisator,
        "actors": movie.actors,
        "img": movie.img,
        "releaseDate": movie.releaseDate.getTime(),
        "rating": movie.rating
        }
      )
      .then(function(movie) {
        console.log('movie', movie);
      })
      .catch(function(error) {
        console.log('error', error);
      });
    }


    return {
      getMovies: getMovies,
      getMovie: getMovie,
      updateMovie: updateMovie,
      deleteMovie: deleteMovie,
      createMovie: createMovie
    }
  });
