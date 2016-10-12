(function () {

  class HeroService {
    constructor($http) { 
      this.$http = $http;
    }

    getData() {
      return this.$http.get('http://swapi.co/api/people/')
        .then(response => response.data.results.map(hero => this._setIdHeroId(hero)));
    }

    getById(id) {
      return this.$http.get(`http://swapi.co/api/people/${id}`)
        .then(response => this._setIdHeroId(response.data))
        .then(hero => this._setHeroImage(hero));
    }

    _setIdHeroId(hero) {
      hero.id = hero.url.match(/\d+/)[0];;
      return hero;
    }

    _setHeroImage(hero) {
      hero.img = `assets/${hero.name.replace(/\s+/g, '-').toLowerCase()}.jpg`;
      return hero;
    }
  }

  angular.module('app')
    .service('heroService', HeroService)
})();