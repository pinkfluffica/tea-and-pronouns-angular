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
			firstName: $scope.firstName,
		}
		$scope.preferences.push(newPerson);
		
		console.log($scope.preferences)
	}
	
});