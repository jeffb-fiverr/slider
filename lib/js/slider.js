const utils = require('./utils/viewUtils');
const log = utils.log;

function SampleFunction() {

	function privateFunc(name = 'Jeff Borders') {
		console.log(`hello, ${name}.`);
	}

	return {
		init: () => {
			privateFunc();
		}
	}
};

module.exports = SampleFunction;