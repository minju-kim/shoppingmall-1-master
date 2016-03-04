angular.module('shoppingMall')
	.constant('productListActiveClass', 'btn-primary')
	.constant('productListPageCount', 3)
	.controller('productListController', function($scope, productListActiveClass, productListPageCount) { //constant를 쓰려면 반드시 콜백함수 인자에 넣어야 한다.

		var currentCategory = undefined;

		$scope.currentPage = 1;
		$scope.pageSize = productListPageCount;

		$scope.selectCategory = function(category){
			currentCategory = category;
			$scope.currentPage = 1;
		};

		$scope.selectPage = function(newPage){
			$scope.currentPage = newPage;
		}

		$scope.categoryFilterFn = function(item){
			return currentCategory === undefined || item.category === currentCategory;
		};

		$scope.getCategoryClass = function(category){
			return currentCategory === category ? productListActiveClass: "";
		}

		$scope.getPageClass = function(page){
			return $scope.currentPage === page ? productListActiveClass: "";
		}

	});