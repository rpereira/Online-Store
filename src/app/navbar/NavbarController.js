/*jslint browser: true, devel: true, nomen: true, plusplus: true, vars: true, white: true */
/*global angular*/

angular.module("OnlineStore")

.controller("NavbarController",
            ["$scope", "$location", "$http", "PRODUCT_CATEGORIES",
            function($scope, $location, $http, PRODUCT_CATEGORIES)
            {
                $scope.categories = PRODUCT_CATEGORIES;

                /**
                 * Sets navabar's active class.
                 */
                $scope.isActive = function(view_location)
                {
                    return view_location === $location.path();
                };

                /**
                 * Access farms data.
                 */
                $http
                    .get("wine_farms/farms.json", { cache: true })
                    .then(function(res)
                    {
                        $scope.farms = res.data;
                    });

            }
]);
