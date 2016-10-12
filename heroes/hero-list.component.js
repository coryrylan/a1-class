(function () {
  'use strict';

  class HeroListController {
    constructor(heroService) {
      this.heroService = heroService
    }

    $onInit() {
      this.heroService.getData().then(heroes => {
        this.heroes = heroes;
      });
    }
  }

  angular.module('app')
    .component('heroList', {
      templateUrl: 'heroes/hero-list.component.html',
      controller: HeroListController
    });
})();