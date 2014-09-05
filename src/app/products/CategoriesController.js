/*jslint browser: true, devel: true, nomen: true, plusplus: true, vars: true, white: true */
/*global angular*/

angular.module("OnlineStore")

.controller("CategoriesController",
            ["$scope", "$routeParams", "PRODUCT_CATEGORIES", "PRODUCTS",
            function($scope, $routeParams, PRODUCT_CATEGORIES, PRODUCTS)
            {
                $scope.category_id = $routeParams.category_id;
                $scope.categories  = PRODUCT_CATEGORIES;
                $scope.products    = PRODUCTS;
            }
]);
