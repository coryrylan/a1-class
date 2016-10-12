(function () {
  'use strict';

  class HomeController { }

  angular.module('app')
    .component('appHome', {
      templateUrl: 'home/home.component.html',
      controller: HomeController
    });
})();