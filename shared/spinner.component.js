(function () {
  'use strict';

  class SpinnerController { }

  angular.module('app')
    .component('appSpinner', {
      templateUrl: 'shared/spinner.component.html',
      controller: SpinnerController
    });
})();