(() => {
  'use strict';

  class AppController {
    constructor(heroService) {
      this.query = '';
      heroService.getData().then(heroes => this.heroes = heroes);
    }
  }

  angular.module('app')
    .component('appRoot', {
      templateUrl: 'app.component.html',
      controller: AppController
    });
})();
