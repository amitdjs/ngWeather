'use strict';

describe('Factory: RestCallFactory', function () {

  // load the controller's module
  beforeEach(module('prudentialApp'));

  var  pruRestCallFactory;

  // Initialize the controller and a mock scope
  beforeEach(inject(function(_RestCallFactory_) {
    pruRestCallFactory = _RestCallFactory_;
  }));


  it('should initialize selected day index', inject(function (){
    pruRestCallFactory.get();
    expect(pruRestCallFactory).toBeDefined();
  }));

  it('should make $HTTP call when get is called', inject(function ($http){
    spyOn($http, 'get').and.callThrough();
    pruRestCallFactory.get('url');
    expect($http.get).toHaveBeenCalledWith('https://api.openweathermap.org/url');
  }));


});
