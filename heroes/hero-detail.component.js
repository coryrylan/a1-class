(function () {
  'use strict';

  class HeroDetailController {
    constructor($routeParams, heroService) {
      heroService.getById($routeParams.heroId).then(hero => {
        this.hero = hero;
      });
    }
  }

  angular.module('app')
    .component('heroDetail', {
      templateUrl: 'heroes/hero-detail.component.html',
      controller: HeroDetailController
    });
})();