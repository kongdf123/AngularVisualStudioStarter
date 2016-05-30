(function () {

	'use strict';

	var app = angular.module('aspNetApp', []);
	routeApp.config(['$routeProvider', function ($routeProvider) {
		$routeProvider
		.when('/home/index', {
			templateUrl: 'index.html',
			controller: 'homeController'
		})
		.when('/Account/Login', {
			templateUrl: 'login.html',
			controller: 'accountController'
		})
		.otherwise({
			redirectTo: '/list'
		});

	}]);
})();