'use strict';

// Setting up route
angular.module('test').config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {
		// Redirect to home view when route not found
		$urlRouterProvider.otherwise('/');

		// Home state routing
		$stateProvider.
		state('test', {
			url: '/test',
			templateUrl: 'modules/test/views/test.client.view.html'
		});
	}
]);