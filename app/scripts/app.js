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
    'ngTouch',
    'ngMaterial'
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
  })
.constant('WEATHER_API_URL', 'http://api.openweathermap.org/');
