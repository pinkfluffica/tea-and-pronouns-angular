var preferenceStuff = [

]

app.controller ('tableController', function($scope, preference) {
	preference.sayHello();
	$scope.preferences = preferenceStuff;
	preference.getAll()
		.then(function(preferencesData) {
			$scope.preferences = preferencesData;
		});
	
	console.log($scope.preferences)
	$scope.doData = function() {
		var newPerson = {
			id : $scope.preferences.length + 1, 
			firstName: $scope.firstName,
			tea: $scope.tea,
			pronoun: $scope.pronoun,
			diet: $scope.diet
		}
		preference.saveNewPerson(newPerson);
		// $scope.preferences.push(newPerson);
		// console.log($scope.preferences);
		document.getElementById("new-person").reset();
		document.getElementById("success-message").className=("success");
		return false;
	}
	
});