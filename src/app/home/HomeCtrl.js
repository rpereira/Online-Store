/*jslint browser: true, devel: true, nomen: true, plusplus: true, vars: true, white: true */
/*global angular*/

angular.module("OnlineStore")

.controller("HomeCtrl",
            ["$scope", "PRODUCT_CATEGORIES", "PRODUCTS",
            function($scope, PRODUCT_CATEGORIES, PRODUCTS)
            {
                $scope.categories = PRODUCT_CATEGORIES;
                $scope.products   = PRODUCTS;

                $scope.predicate = "";
            }
]);
