app.controller ('tableController', function($scope) {
	$scope.preferences = [
		{
			id : 1,
			firstName : "Pippa",
			tea : "rooibos",
			pronoun : "she",
			diet : "no gluten"
		},
		{
			id: 2,
			firstName : "Richard",
			tea : "earl grey",
			pronoun : "he",
			diet : "none"
		},
	]
	$scope.sayHello = function() {
		console.log("hello")
	}
	
});