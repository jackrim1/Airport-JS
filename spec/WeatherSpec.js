'use strict';

describe('Weather',function(){
  var weather
  beforeEach(function(){
    weather = new Weather()
	})
  it('can forecast stormy weather', function(){
  	spyOn(Math, 'random').and.returnValue(0);
  	expect(weather.isStormy()).toBeTruthy();
  });
  it('can forecast clear skies', function(){
  	spyOn(Math, 'random').and.returnValue(1);
  	expect(weather.isStormy()).toBeFalsy();
  });
});
