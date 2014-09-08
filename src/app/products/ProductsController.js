/*jslint browser: true, devel: true, nomen: true, plusplus: true, vars: true, white: true */
/*global angular*/

angular.module("OnlineStore")

.controller("ProductsController",
            ["$scope", "$routeParams", "$http", "PRODUCT_CATEGORIES",
            function($scope, $routeParams, $http, PRODUCT_CATEGORIES)
            {
                $scope.category_id = $routeParams.category_id;
                $scope.categories  = PRODUCT_CATEGORIES;

                $http
                    .get("products/" + $scope.category_id + ".json", { cache: true })
                    .then(function(res)
                    {
                        $scope.products = res.data;
                    });
            }
]);
