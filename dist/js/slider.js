'use strict';

var utils = require('./utils/viewUtils');
var log = utils.log;

function SampleFunction() {

	function privateFunc() {
		var name = arguments.length <= 0 || arguments[0] === undefined ? 'Jeff Borders' : arguments[0];

		console.log('hello, ' + name + '.');
	}

	return {
		init: function init() {
			privateFunc();
		}
	};
};

module.exports = SampleFunction;