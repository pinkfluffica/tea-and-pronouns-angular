var preferenceStuff = [
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

app.controller ('tableController', function($scope) {
	$scope.preferences = preferenceStuff
	console.log($scope.preferences)
	$scope.doData = function() {
		var newPerson = {
			id : $scope.preferences.length + 1, 
			firstName: $scope.firstName,
			tea: $scope.tea,
			pronoun: $scope.pronoun,
			diet: $scope.diet
		}
		$scope.preferences.push(newPerson);
		console.log($scope.preferences);

	}
	
});