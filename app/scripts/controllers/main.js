'use strict';

/**
 * @ngdoc function
 * @name prudentialApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the prudentialApp
 */
angular.module('prudentialApp')
  .controller('MainCtrl', function () {
    this.dailyWeather = [{
      weatherIcon: '',
      data: { first: 'text', last:'text' }
      }, {
      weatherIcon: '',
      data: { first: 'text2', last:'text2' }
      }, {
      weatherIcon: '',
      data: { first: 'text3', last:'text3' }
      }];

    this.selectedDayIndex = undefined;
    this.selectUserIndex = function (index) {
      if (this.selectedDayIndex !== index) {
        this.selectedDayIndex = index;
      }
      else {
        this.selectedDayIndex = undefined;
      }
    };
  });
