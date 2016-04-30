angular
	.module('oznzmma')
	.factory('p4pListFactory', function($http) {

		function getP4P(){
			return $http.get('data/p4p-list.json');
		}

		return{
			getP4P: getP4P
		}


	});


