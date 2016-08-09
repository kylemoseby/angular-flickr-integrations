'use strict';

angular
  .module('demoApp', [
    'ngAnimate',
    'ngRoute',
    'ngSanitize',
    'ngMaterial',
    'mkm.flickr'
  ])
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
