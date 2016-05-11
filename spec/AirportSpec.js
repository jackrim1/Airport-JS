'use strict';

describe("Airport", function() {
	var airport;
	var plane;
	var weather;
	beforeEach(function() {
		weather = jasmine.createSpyObj('weather', ['isStormy']);
		airport = new Airport(weather);
		plane = jasmine.createSpy('plane');
		
	});

	it("has no planes by default", function(){
		expect(airport.planes()).toEqual([]);
	});
	it('can clear planes for landing', function(){
		airport.clearForLanding(plane);
		expect(airport.planes()).toEqual([plane]);
	});
	it('can clear planes for take off', function(){
		airport.clearForLanding(plane);
		weather.isStormy.and.returnValue(false);
		airport.clearForTakeOff(plane);
		expect(airport.planes()).not.toContain(plane);
	});
	it("doesn\'t allow planes to take off in stormy weather", function(){
		weather.isStormy.and.returnValue(true);
		expect(function(){airport.clearForTakeOff(plane)}).toThrowError('Cannot take off in a storm');
	});
	it("doesn\'t allow planes to land in stormy weather", function() {
		weather.isStormy.and.returnValue(true);
		expect(function(){airport.clearForLanding(plane)}).toThrowError('Cannot land in a storm');
	});
});