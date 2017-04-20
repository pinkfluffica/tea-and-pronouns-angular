var app = angular.module ('teaPronouns', ['ngRoute']);

app.config(function ($routeProvider) {
	 $routeProvider
	 .when('/', {
	 	controller: 'tableController',
	 	templateUrl: 'views/table.html'

	 })
	 .when('/new', {
	 	controller: 'tableController',
	 	templateUrl: 'views/newperson.html'
	 })
	 .otherwise({ 
      redirectTo: '/' 
    });
});