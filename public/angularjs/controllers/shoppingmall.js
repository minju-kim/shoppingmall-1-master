//두번째 인자를 안 주면 새로 만들지 않고 찾는다.
//추가하는 앵귤러 모듈은 두 번째 인자를 주지 않는다.
angular.module('shoppingMall')
	.constant('dataUrl', 'http://localhost/products') //여기서 product까지 적어서 오류내면 404 에러 메시지를 볼 수 있다
  .controller('shoppingMallController', function($scope, $http, dataUrl) {

	  $scope.data = {};

	  $http.get(dataUrl)
		  .success(function(data) {
			  $scope.data.products = data;
		  })
		  .error(function(err) {
			  $scope.data.error = err;
		  });

  });