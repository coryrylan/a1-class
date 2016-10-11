(function () {
  "use strict";

  class ErrorController {
    constructor() {
      this.show = true;
    }

    close() {
      this.show = false;
    }
  }

  angular.module('app')
    .component('appError', {
      transclude: true,
      templateUrl: "error.component.html",
      controller: ErrorController
    });
})();
