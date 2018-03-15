  'use strict';

  /**
   * @ngdoc function
   * @name prudentialApp.controller:MainCtrl
   * @description
   * # MainCtrl
   * Controller of the prudentialApp
   */
  angular.module('prudentialApp')
  .controller('MainCtrl', function (RestCallFactory) {
    var that = this, qm = {
      appid: 'cf17d36364a790526fade8fb83873eaf',
      units: 'metric',
      q: 'London,uk',
      mode:'json'
    };
    that.dailyWeather = [];

    that.selectedDayIndex = undefined;
    that.selectUserIndex = function (index) {
      if (that.selectedDayIndex !== index) {
        that.selectedDayIndex = index;
      }
      else {
        that.selectedDayIndex = undefined;
      }
    };

    function handleError(response) {
      that.dailyWeather = [];
      console.log(response);
    }

    function handleSuccess(data) {
      if(!data) {
        handleError();
        return;
      }
      //assuming the response to be for 5 days. Each day has equal number of entries
      var separation = parseInt(data.cnt/5) || 1;
      for(var i = 0; i<data.cnt; i+=separation) {
        //TODO: refactor this
        that.dailyWeather.push(data.list[i]);
      }
      that.selectUserIndex(0);
    }

    RestCallFactory.get('data/2.5/forecast', qm).then(handleSuccess, handleError);

  });
