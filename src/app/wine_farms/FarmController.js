/*jslint browser: true, devel: true, nomen: true, plusplus: true, vars: true, white: true */
/*global angular*/

angular.module("OnlineStore")

.controller("FarmController", ["$scope", "$routeParams", "$http", function($scope, $routeParams, $http)
{
    $scope.farm_id = $routeParams.farm_id;

    $http
        .get("wine_farms/" + $scope.farm_id + ".json", { cache: true })
        .then(function(res)
        {
            $scope.farm = res.data;
        });
}]);
