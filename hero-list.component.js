(function () {
  'use strict';

  class HeroListController {
    sayHello(hero) {
      alert(`${hero.name}'s favorite color is ${hero.color}`);
    }
  }

  angular.module('app')
    .component('heroList', {
      templateUrl: 'hero-list.component.html',
      controller: HeroListController,
      bindings: {
        heroes: '=',
        searchValue: '='
      }
    });
})();