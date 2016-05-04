angular
	.module('oznzmma')
	.factory('p4pListFactory', function($http) {

		function getP4P(){

			var load = $http.get('/oznzmma/php/getFighters.php');
			return load;
		}

		return{
			getP4P: getP4P
		}


	});


