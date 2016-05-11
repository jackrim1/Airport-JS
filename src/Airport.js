'use strict';

function Airport(weather = new Weather) {
	this._hangar = [];
	this._weather = weather;
}
Airport.prototype.planes = function() {
	return this._hangar;
};
Airport.prototype.clearForLanding = function(plane) {
	if(this._weather.isStormy()) { 
		throw Error('Cannot land in a storm');
	}
	this._hangar.push(plane);
};
Airport.prototype.clearForTakeOff = function(plane) {
	if(this._weather.isStormy()) { 
		throw Error('Cannot take off in a storm');
	}
	this._hangar.pop(plane);
};


