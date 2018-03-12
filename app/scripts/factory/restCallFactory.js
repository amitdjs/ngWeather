'use strict';

/**
 * @ngdoc function
 * @name prudentialApp.factory:restCallFactory
 * @description wrapper for all rest callss
 */

angular.module('prudentialApp')
.factory('RestCallFactory', ['$http', 'WEATHER_API_URL',
  function ($http, WEATHER_API_URL) {
    return {
      get: function (url, queryParams) {
        let queryParam='';
        angular.forEach(queryParams, function (value, param) {
          queryParam += param + '=' + value + '&';
        });
        let promise = $http.get(WEATHER_API_URL + url + (queryParam && '?' + queryParam.substring(0, queryParam.length-1))).then(function(response) {
          return response.data;
        }, function (error) {
          console.log(error);
          //error
        });
        return promise;
      }
    };
  }
]);
