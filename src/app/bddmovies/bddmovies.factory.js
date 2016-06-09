angular.module('projetCineFilms')
  .factory('DataFilm', function ($firebaseArray, $q, SERVER_URL) {

////////////////////////////////////////////
///////////////// Load BDD /////////////////
////////////////////////////////////////////


    var bddRef = new Firebase(SERVER_URL);
    var datas = [];
    var bddLoaded = $q.defer();
    var accessBdd = function(){
      datas = $firebaseArray(bddRef);
      datas.$loaded(function(){
        bddLoaded.resolve(true);
      });
    };
    accessBdd();


////////////////////////////////
///////////// CRUD /////////////
////////////////////////////////

    function setDatas(){
      datas.$add();
    }

    function getList (){
      console.log(datas);
      return datas;
    }

    function showFilm(id){
      var filmToShow;
      for(var i = 0; i < datas.length; i++){
        if(datas[i].name == id){
          filmToShow = datas[i];
        }
      }
      return filmToShow;
    }

    function saveFilm(film){
      datas.$save(film);
    }

    function deleteFilm(id){
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

    var fileInput = $('#file-upload');
    var fileToUpload = null;

    fileInput.change(function(){
      var file = $(this).get(0).files[0];
      var reader = new FileReader(file);

      reader.addEventListener('load', function(){
        fileToUpload = reader.result;
      }, false);

      if(file) {
        reader.readAsDataURL(file);}
    });

    function createFilm(film){
      console.log(fileToUpload);
      var dateRealase = film.releaseDate.getTime();
      var myNewFilm = {
        "actors": {
          "name": film.actors
        },
        "name": film.name,
        "rating": film.rating,
        "realisator": film.realisator,
        "releaseDate": dateRealase,
        "affichefile": fileToUpload
      };

      datas.$add(myNewFilm).then(function (){
        console.log('The new film is now saved in the database !');
      });
    }

    return {
      connection: datas,
      listFilms: function(){ return datas;},
      hasLoaded: function(){ return bddLoaded.promise;},
      loadDatas: setDatas,
      getList: getList,
      details: showFilm,
      newFilm: createFilm,
      updateFilm: saveFilm,
      eraseFilm: deleteFilm
    }
  });
