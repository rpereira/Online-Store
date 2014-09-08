/*jslint browser: true, devel: true, nomen: true, plusplus: true, vars: true, white: true */
/*global angular*/

angular.module("OnlineStore")

.controller("DetailsController", ["$scope", "$routeParams", "$http", function($scope, $routeParams, $http)
{
    $scope.category_id = $routeParams.category_id;
    $scope.product_id = $routeParams.product_id;

    $http
        .get("products/" + $scope.category_id + "/" + $scope.product_id + ".json")
        .then(function(res)
        {
            $scope.product = res.data;
        });
}]);
