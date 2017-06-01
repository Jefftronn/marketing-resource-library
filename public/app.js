angular.module('mrlApp', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider) {

	$stateProvider

	.state('Welcome', {
		url: '/welcome',
		templateUrl: 'js/welcome/welcome.html'
	})

	.state('Aca', {
		url: '/aca',
		templateUrl: 'js/aca/aca.html'
	})

	.state('AdminDashboard', {
		url: '/adminDashboard',
		templateUrl: 'js/adminDashboard/adminDashboard.html'
	})

	$urlRouterProvider.otherwise('/welcome');

});