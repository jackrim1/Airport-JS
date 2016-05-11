'use strict',

describe('Feature Test:', function() {
	var plane;
	var airport;

	beforeEach(function(){
		plane = new Plane();
		airport = new Airport();
	});

	describe('under normal conditions', function(){
		beforeEach(function(){
			spyOn(Math, 'random').and.returnValue(1);
	});
		it('planes are being instructed to land at the airport', function() {
			plane.land(airport);
			expect(airport.planes()).toContain(plane);
		});
		it('planes are being instructed to take off from an airport', function() {
			plane.land(airport);
			plane.takeOff();
			expect(airport.planes()).not.toContain(plane);
		});
		it("doesn\'t allow a plane to take off in a storm", function() {
			plane.land(airport);
			spyOn(airport._weather, 'isStormy').and.returnValue(true);
			expect(function(){plane.takeOff()}).toThrowError('Cannot take off in a storm');
		});
	});
	
	describe('under stormy conditions', function(){

		it("doesn\'t allow a plane to land in a storm", function() {
			spyOn(Math, 'random').and.returnValue(0);
			expect(function(){plane.land(airport)}).toThrowError('Cannot land in a storm');
		});
	});
});