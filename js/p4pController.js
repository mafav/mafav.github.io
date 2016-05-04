angular
	.module('oznzmma')
	.controller('p4pController', function($scope, $http, countryThemeFactory, p4pListFactory) {

$scope.p4pList;

$scope.$emit('LOAD');

p4pListFactory.getP4P().success(function(data) {

			$scope.p4pList = data;

						$scope.$emit('UNLOAD');


		}).error(function(error) {

			console.log(error);

		});


	});