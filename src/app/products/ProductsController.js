/*jslint browser: true, devel: true, nomen: true, plusplus: true, vars: true, white: true */
/*global angular*/

angular.module("OnlineStore")

.controller("ProductsController",
            ["$scope", "$routeParams", "PRODUCT_CATEGORIES", "PRODUCTS", "$http",
            function($scope, $routeParams, PRODUCT_CATEGORIES, PRODUCTS, $http)
            {
                $scope.category_id = $routeParams.category_id;
                $scope.categories  = PRODUCT_CATEGORIES;
                //$scope.products    = PRODUCTS;

                $http.get("data/cistus.json").success(function(data) { $scope.products = data; }).error(function(err){ alert(err);});
            }
]);
