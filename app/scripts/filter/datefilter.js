'use strict';

/**
 * @ngdoc function
 * @name prudentialApp.filter:dateFilter
 * @description wrapper for all rest callss
 */

angular.module('prudentialApp')
.filter('moment', function () {
  return function (input, momentFn /*, param1, param2, ...param n */) {
    var args = Array.prototype.slice.call(arguments, 2),
      moment = moment || window.moment,
      momentObj = moment(input);
    return momentObj[momentFn].apply(momentObj, args);
  };
});
