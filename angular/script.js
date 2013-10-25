// Code goes here

var myApp = angular.module('logApp', []);
 
myApp.controller('LogCtrl', ['$scope', '$http', function($scope, $http){
    $scope.logdata = 'log-stuff';
    
    $scope.log1 = function() {
        $scope.logdata = 'log1';
    };
    
    $scope.log2 = function() {
        $scope.logdata = 'log2';
    };
    
    $scope.log3 = function() {
    	//for(i=0; i<10000; i++) {
    		//$scope.logdata = "calling getUrl i="+i;
			getUrl(0);
		//}
	};

	function getUrl(i) {
		//$scope.logdata = 'tryingAjax: i=' + i;
		$http({method: 'GET', url: 'http://localhost/nodejs/'}).
		success(function(data, status, headers, config) {
		  $scope.logdata = data;
		  // this callback will be called asynchronously
		  // when the response is available
		  //$scope.logdata = data + ': ajaxSuccess: i=' + i;
		  getUrl(i);
		}).
		error(function(data, status, headers, config) {
		  $scope.logdata = 'ajaxError';
		  // called asynchronously if an error occurs
		  // or server returns response with an error status.
		});    
    };
}]);