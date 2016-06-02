'use strict';

var searchResults = require('./get-search-results');
var hotelResults = require('../week-4/solution').run;

module.exports.run = function(myCallback) {

	var callback = function(results){
		var result; 
		try{
			var result = hotelResults(results);
			myCallback(null, result);
		} catch (e) {
			//console.log(e.stack);
			myCallback(e, null);
		}
		
	}

	searchResults(callback);
}