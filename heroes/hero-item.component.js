(function () {
  'use strict';

  class HeroItemController { }

  angular.module('app')
    .component('heroItem', {
      templateUrl: 'heroes/hero-item.component.html',
      controller: HeroItemController,
      bindings: {
        hero: '<',
        // onHeroSelect: '&'
      }
    });
})();