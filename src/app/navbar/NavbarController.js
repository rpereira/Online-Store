/*jslint browser: true, devel: true, nomen: true, plusplus: true, vars: true, white: true */
/*global angular*/

angular.module("OnlineStore")

.controller("NavbarController", ["$scope", "$location", "PRODUCT_CATEGORIES", function($scope, $location, PRODUCT_CATEGORIES)
{
    $scope.isActive = function(view_location)
    {
        return view_location === $location.path();
    };

    $scope.categories = PRODUCT_CATEGORIES;
}]);
