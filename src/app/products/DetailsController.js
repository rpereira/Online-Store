/*jslint browser: true, devel: true, nomen: true, plusplus: true, vars: true, white: true */
/*global angular*/

angular.module("OnlineStore")

.controller("DetailsController",
            ["$scope", "$routeParams",
            function($scope, $routeParams)
            {
                $scope.product_id = $routeParams.product_id;
            }
]);
