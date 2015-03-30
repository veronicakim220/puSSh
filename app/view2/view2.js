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
			value: 150,
			price: 10000,
			msg: true,
			bought: 0		
		},
		item2 : {
			sell: true,
			value: 7,
			price: 700,
			msg: true,
			bought: 0				
		},
		item3 : {
			sell: true,
			value: 4,
			price: 400,
			msg: true,
			bought: 0				
		},
		item4 : {
			sell: true,
			value: 2,
			price: 200,
			msg: true,
			bought: 0				
		}
	}
	$scope.canBuy = function(selectedItem) {
		debugger
		if ($scope.total - selectedItem.price >= 0){
			return true;
		} else {
			return false;
		};
	}
	$scope.click = function() {
		$scope.total += $scope.pushValue;
		//$scope.total = Math.round($scope.total);
	}
	$scope.check = function(selectedItem) {
		$scope.total = $scope.total - selectedItem.price;
		selectedItem.bought++;
		$scope.pushValue = $scope.increment + $scope.items.item1.value*$scope.items.item1.bought + $scope.items.item2.value*$scope.items.item2.bought + $scope.items.item3.value*$scope.items.item3.bought + $scope.items.item4.value*$scope.items.item4.bought;
		
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