angular
	.module('oznzmma')
	.controller('oznzmmaController', function($scope, $http, countryThemeFactory, p4pListFactory) {

$scope.countries;
$scope.$on('LOAD', function(){$scope.loading=true});
$scope.$on('UNLOAD', function(){$scope.loading=false});

$scope.insertStatic = function(){
	console.log("clicked");
	$http.post('/oznzmma/php/insert_static.php').success(function(data){

		console.log("executed successfully");

		}).error(function(data){

				console.log("didn't work");
		});



}


countryThemeFactory.getCountries().success(function(data) {

			$scope.countries = data;

		}).error(function(error) {

			console.log(error);

		});


	});