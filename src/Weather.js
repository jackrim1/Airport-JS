'use strict';

function Weather() {
	this._PROB_OF_STORMY = 0.25
}

Weather.prototype.isStormy = function () {
	return (this._PROB_OF_STORMY > Math.random())
};

