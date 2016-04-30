angular
	.module('oznzmma')
	.factory('countryThemeFactory', function($http) {

		function getCountries(){
			return $http.get('data/countries.json');
		}

		return{
			getCountries: getCountries
		}


	});


