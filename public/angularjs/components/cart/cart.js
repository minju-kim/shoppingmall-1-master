angular.module('cart', []) //새로 만들 때는 두 번째 인자로 빈 배열을 준다. 다른 모듈에 의존성이 있을 때는 배열 안에 참조 모듈 이름을 넣으면 된다.
    .factory('cart', function(){ //cart 서비스를 만든다.
        var cartData = [];
        return {
            addProduct: function(id, name, price){
                var existingItem = false;
                for(var i=0;i<cartData.length;i++){
                    if (cartData[i].id === id) {
                        cartData[i].count++;
                        existingItem = true;
                        break;
                    }
                }

                if(!existingItem) {
                    cartData.push({
                        "id" : id,
                        "name" : name,
                        "price" : price,
                        "count" : 1
                    });
                }
            },
            removeProduct: function(id){
                for(var i=0;i<cartData.length;i++){
                    if (cartData[i].id === id){
                        cartData[i].splice(i, 1);
                        break;
                    }
                }
            },
            getProducts: function(){
                return cartData;
            }
        };
    })
    .directive('cartSummary', function(cart){
        return {
            restrict: 'E', //E(element) 또는 EA(element or attribute)로 적을 수 있다.
            templateUrl: 'angularjs/components/cart/cartsummary.html',
            controller: function($scope){ //dependency injection. 서비스가 필요하면 인자를 기술하면 된다.
                var cartData = cart.getProducts();
                $scope.totalPrice = function(){
                    var total = 0;
                    for(var i=0;i<cartData.length;i++) {
                        total += cartData[i].price * cartData[i].count
                    }
                    return total;
                };
                $scope.itemCount = function(){
                    var total = 0;
                    for(var i=0;i<cartData.length;i++) {
                        total += cartData[i].count
                    }
                    return total;
                }
            }
        }
    }) //사용자 정의 태그. 복잡한 로직들을 줄여주는 효과가 있다.

