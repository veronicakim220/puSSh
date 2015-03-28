'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', ['$scope',function($scope) {
	$scope.tab = 2;
	$scope.counter = 1;
	$scope.click = function(multiplier) {
		$scope.counter += multiplier;
	}
}]);