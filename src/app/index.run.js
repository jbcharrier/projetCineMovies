(function() {
  'use strict';

  angular
    .module('projetCineFilms')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
