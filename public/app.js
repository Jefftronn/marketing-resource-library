angular.module('mrlApp', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider) {

	$stateProvider

	.state('Welcome', {
		url: '/welcome',
		templateUrl: 'js/welcome/welcome.html'
	})

	.state('Login', {
		url: '/login',
		templateUrl: 'js/login/login.html'
	})

	.state('Aca', {
		url: '/aca',
		templateUrl: 'js/aca/aca.html'
	})

	.state('AdminDashboard', {
		url: '/adminDashboard',
		templateUrl: 'js/adminDashboard/adminDashboard.html'
	})

	.state('UserDashboard', {
		url: '/userDashboard',
		templateUrl: 'js/userDashboard/userDashboard.html'
	})

	.state('Create', {
		url: '/create',
		templateUrl: 'js/create/create.html'
	})

	$urlRouterProvider.otherwise('/userDashboard');

});