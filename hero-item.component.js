(function () {
  'use strict';

  class HeroItemController {
    sayHello(hero) {
      alert(`${hero.name}'s favorite color is ${hero.color}`);
    }
  }

  angular.module('app')
    .component('heroItem', {
      templateUrl: 'hero-item.component.html',
      controller: HeroItemController,
      bindings: {
        hero: '<',
        onHeroSelect: '&'
      }
    });
})();