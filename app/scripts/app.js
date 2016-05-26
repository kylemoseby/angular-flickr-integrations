'use strict';

/**
 * @ngdoc overview
 * @name flickrportfolioApp
 * @description
 * # flickrportfolioApp
 *
 * Main module of the application.
 */
angular
  .module('flickrportfolioApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'API'
  ])
  .config(function ($routeProvider) {
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
