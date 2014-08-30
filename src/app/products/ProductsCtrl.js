/*jslint browser: true, devel: true, nomen: true, plusplus: true, vars: true, white: true */
/*global angular*/

angular.module("OnlineStore")

.controller("ProductsCtrl",
            ["$scope", "PRODUCTS",
            function($scope, PRODUCTS)
            {
                $scope.products = PRODUCTS;
            }
]);
