describe('Filter: temperatureFilter', function () {

  'use strict';

  var $filter;

  beforeEach(module('prudentialApp'));

  beforeEach(inject(function (_$filter_) {
    $filter = _$filter_;
  }));

  it('should throw an exception if a string is passed', function () {
    var filterTemperature = $filter('temperature');
    expect(function(){filterTemperature('someText', 'F')}).toThrow(new Error('Input is not a number'));
  });

  it('should return temperature in fahrenheit if F is passed ', function () {
    var filterTemperature = $filter('temperature');
    expect(filterTemperature(21, 'F')).toBe('70° F');
  });

  it('should convert Celsius to fahrenheit', function () {
    var filterTemperature = $filter('temperature');
    expect(filterTemperature(21, 'F')).toBe('70° F');
  });

  it('should return formatted temperatue in Celsius', function () {
    var filterTemperature = $filter('temperature');
    expect(filterTemperature(110, 'C')).toBe('43° C');
  });


});
