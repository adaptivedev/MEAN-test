// Code goes here

var myApp = angular.module('logApp', []);
 
myApp.controller('LogCtrl', ['$scope', '$http', function($scope, $http){
    $scope.spicy = 'very';
    
    $scope.log1 = function() {
        $scope.spice = 'log1';
    };
    
    $scope.log2 = function() {
        $scope.spice = 'log2';
    };
    
    $scope.log3 = function() {
	  //$scope.spice = ' starting ajax ';
	  for(var i=0; i<3; i++)
	  {
		$scope.spice = 'tryingAjax';
		//$http({method: 'GET', url: 'README.md'}).
		//$http({method: 'GET', url: 'http://localhost/sites/justhubit.com/nodejs/web.js'}).
		$http({method: 'GET', url: 'http://localhost/nodejs/'}).
		success(function(data, status, headers, config) {
		  $scope.spice = data;
		  //$scope.spice = 'ajaxSuccess';
		  // this callback will be called asynchronously
		  // when the response is available
		}).
		error(function(data, status, headers, config) {
		  $scope.spice = 'ajaxError';
		  // called asynchronously if an error occurs
		  // or server returns response with an error status.
		});    
	  }
	}
    
}]);