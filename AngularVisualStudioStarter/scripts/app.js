(function () {

	'use strict';

	var aspNetApp = angular.module('aspNetApp')
		.config(['$locationProvider','$routeProvider', function ($routeProvider) {
			$routeProvider
			.when('/Account/Login', {
				templateUrl: '/views/home/login.html',
				controller: 'accountController'
			})
			.when('/home/index', {
				templateUrl: '/views/home/index.html',
				controller: 'homeController'
			})
			.otherwise({
				redirectTo: '/Account/Login'
			});
		}]);
})();