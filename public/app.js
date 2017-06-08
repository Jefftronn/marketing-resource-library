(function() {

	// Initialize Firebase
  var config = {
    apiKey: "AIzaSyAgyr95NqrVhhK2wOQaZdYX-5GTJqPgbjg",
    authDomain: "marketing-resource-library.firebaseapp.com",
    databaseURL: "https://marketing-resource-library.firebaseio.com",
    projectId: "marketing-resource-library",
    storageBucket: "marketing-resource-library.appspot.com",
    messagingSenderId: "51428464407"
  };
  firebase.initializeApp(config);

	angular.module('mrlApp', ['ui.router', 'firebase'])

	.config(function($stateProvider, $urlRouterProvider) {

		$stateProvider

		.state('Welcome', {
			url: '/welcome',
			templateUrl: 'js/welcome/welcome.html'
		})

		.state('Login', {
			url: '/login',
			templateUrl: 'js/login/login.html',
      controller: 'loginController'
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

}());