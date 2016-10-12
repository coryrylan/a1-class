angular.module('app').config(($routeProvider, $locationProvider) => {
  $routeProvider
    .when('/', {
      template: '<app-home></app-home>',
    })
    .when('/heroes', {
      template: '<hero-list></hero-list>',
    })
    .when('/hero-details/:heroId', {
      template: '<hero-detail></hero-detail>',
    })
    .when('/about', {
      template: '<app-about></app-about>',
    })
    .otherwise({
      redirectTo: '/'
    });
});