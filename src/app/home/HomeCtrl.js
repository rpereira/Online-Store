/*jslint browser: true, devel: true, nomen: true, plusplus: true, vars: true, white: true */
/*global angular*/

angular.module("OnlineStore")

.controller("HomeCtrl", ["$scope", "PRODUCT_CATEGORIES", function($scope, PRODUCT_CATEGORIES)
{
    $scope.categories = PRODUCT_CATEGORIES;
}]);
