'use strict';

module.exports = function(app) {
	// Root routing
	var test = require('../../app/controllers/test.server.controller');
	app.route('/test').get(test.index);
};