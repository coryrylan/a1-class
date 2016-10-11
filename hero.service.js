(function () {

  class HeroService {
    constructor($http) { 
      this.$http = $http;
    }

    getData() {
      return this.$http.get('http://swapi.co/api/people/')
        .then(response => response.data.results);
    }
  }

  angular.module('app')
    .service('heroService', HeroService)
})();