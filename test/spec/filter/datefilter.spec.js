describe('Filter: dateFilter', function () {

  'use strict';

  var $filter;

  beforeEach(module('prudentialApp'));

  beforeEach(inject(function (_$filter_) {
    $filter = _$filter_;
  }));

  it('should return date in time format as passed', function () {
    var filterTime = $filter('moment');
    expect(filterTime('2018-03-15 06:00:00', 'format', 'MMM DD, YYYY')).toEqual('Mar 15, 2018');
  });

  it('should return date andtime in time format as passed', function () {
    var filterTime = $filter('moment'),
    time = new Date(),
    expectedDateTime = ('0' + time.getDate()).slice(-2) + '/' + ('0' +
      (time.getMonth()+1)).slice(-2) + '/'  +
      time.getFullYear() +' ' + ('0' + (time.getHours())).slice(-2) + ':' + ('0' + (time.getMinutes())).slice(-2);;
    expect(filterTime(time, 'format', 'DD/MM/YYYY HH:mm')).toEqual(expectedDateTime);
  });
});
