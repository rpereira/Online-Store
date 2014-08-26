/*jslint browser: true, devel: true, nomen: true, plusplus: true, vars: true, white: true */
/*global angular*/

angular.module("OnlineStore")

.controller("NavbarCtrl", ["$scope", "$location", function($scope, $location)
{
    $scope.isActive = function(view_location)
    {
        return view_location === $location.path();
    };
}]);
