/*jslint browser: true, devel: true, nomen: true, plusplus: true, vars: true, white: true */
/*global angular*/

angular.module("OnlineStore")

.controller("HomeCtrl",
            ["$scope",
            function($scope)
            {
                $scope.categories = ["ola", "ole", "oli"];
            }
]);