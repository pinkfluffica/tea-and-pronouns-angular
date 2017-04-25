app.factory('preference', function($http) {
	

	return {
		sayHello: function() {
			console.log('Hello');
		},
		getAll: function() {
			var promise = $http.get('/api/preferences')
				.then(function(response) {
					return response.data;
				});
			return promise;
		},
		saveNewPerson: function(newPerson) {
			$http.post('/api/preferences', newPerson)
		}

	}
})