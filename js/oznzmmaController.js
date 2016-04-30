angular
	.module('oznzmma')
	.controller('oznzmmaController', function($scope, countryThemeFactory, p4pListFactory) {

$scope.countries;
$scope.p4pList;



p4pListFactory.getP4P().success(function(data) {

			$scope.p4pList = data;

		}).error(function(error) {

			console.log(error);

		});



countryThemeFactory.getCountries().success(function(data) {

			$scope.countries = data;

		}).error(function(error) {

			console.log(error);

		});


	});