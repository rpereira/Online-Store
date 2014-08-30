/*jslint browser: true, devel: true, nomen: true, plusplus: true, vars: true, white: true */
/*global angular*/

angular.module("OnlineStore")

.controller("ProductsCtrl",
            ["$scope", "PRODUCTS", "PRODUCT_CATEGORIES",
            function($scope, PRODUCTS, PRODUCT_CATEGORIES)
            {
                $scope.products = PRODUCTS;
                $scope.categories = PRODUCT_CATEGORIES;
            }
]);
