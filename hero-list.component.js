(function () {
  'use strict';

  angular.module('app')
    .component('heroList', {
      templateUrl: 'hero-list.component.html',
      bindings: {
        heroes: '<',
        searchValue: '<'
      }
    });
})();