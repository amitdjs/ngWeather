'use strict';

/**
 * @ngdoc overview
 * @name prudentialApp
 * @description
 * # prudentialApp
 *
 * Main module of the application.
 */
angular
  .module('prudentialApp', [
    'ngAnimate',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
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
