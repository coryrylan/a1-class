(function () {
  'use strict';

  class AboutController { }

  angular.module('app')
    .component('appAbout', {
      transclude: true,
      templateUrl: 'about/about.component.html',
      controller: AboutController
    });
})();
