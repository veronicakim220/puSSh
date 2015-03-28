'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', ['$scope',function($scope) {
	$scope.tab = 1;
	$scope.total = 0;
	$scope.increment = 1;
	$scope.pushValue = $scope.increment;
	$scope.items = {
		item1 : {
			sell: true,
			value: 5,
			price: 5,
			msg: true,
			bought: 0		
		},
		item2 : {
			sell: true,
			value: 3,
			price: 3,
			msg: true,
			bought: 0				
		},
		item3 : {
			sell: true,
			value: 4,
			price: 4,
			msg: true,
			bought: 0				
		},
		item4 : {
			sell: true,
			value: 2,
			price: 2,
			msg: true,
			bought: 0				
		}
	}
	$scope.canBuy = function(selectedItem) {
		if ($scope.total - selectedItem.price >= 0){
			return true;
		} else {
			return false;
		};
	}
	$scope.click = function() {
		$scope.total += $scope.pushValue;
	}
	$scope.check = function(selectedItem) {
		$scope.total = $scope.total - selectedItem.price;
		selectedItem.bought++;
		$scope.pushValue = $scope.increment+ $scope.items.item1.value*$scope.items.item1.bought + $scope.items.item2.value*$scope.items.item2.bought + $scope.items.item3.value*$scope.items.item3.bought + $scope.items.item4.value*$scope.items.item4.bought;
		// angular.forEach($scope.items, function(item){
		// 	if($scope.total-item.price >= 0){
		// 		item.msg = false;
		// 		item.sell = true;
		// 	} else {
		// 		item.msg = true;
		// 		item.sell = false;
		// 	}
		// });
	}
}]);