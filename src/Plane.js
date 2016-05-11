'use scrict';

function Plane(){}

Plane.prototype.land = function(airport){
	airport.clearForLanding(this);
	this._currentAirport = airport;

};
Plane.prototype.takeOff = function(){
	this._currentAirport.clearForTakeOff();
};