angular.module('customFilters', [])
	.filter('unique', function() {
		return function(data, propName) {
			if (angular.isArray(data) && angular.isString(propName)) {
				var results = [];
				var keys = {};
				for (var i = 0; i < data.length; i++) {
					var value = data[i][propName];
					if (angular.isUndefined(keys[value])) {
						keys[value] = true;
						results.push(value);
					}
				}
				return results;
			} else {
				return data;
			}
		};
	})
	.filter('range', function($filter){//3개를 짤라서 보여주는 필터
		return function(data, page, size){
			if (angular.isArray(data) && angular.isNumber(page) && angular.isNumber(size)){
				var startIndex = (page-1) * size;
				if (data.length < startIndex) {
					return [];
				} else {
					return $filter('limitTo')(data.splice(startIndex), size); //startIndex 가 0이면 전체,
				}
			} else {
				return data;
			}
		}
	})
	.filter('pageCount', function(){//페이지 네비게이터 필터
		return function(data, size){
			if(angular.isArray(data)){
				var results = [];
				for (var i=0 ; i < Math.ceil(data.length / size) ; i++){
					results.push(i);
				}
				return results;
			} else {
				return data;
			}
		}
	});