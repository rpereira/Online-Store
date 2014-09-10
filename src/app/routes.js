/*jslint browser: true, devel: true, nomen: true, plusplus: true, vars: true, white: true */
/*global angular*/

angular.module("OnlineStore", ["ngRoute"])

.config(["$routeProvider", function($routeProvider)
{
    "use strict";

    $routeProvider

        // Home
        .when("/",
        {
            templateUrl : "src/app/home/home.tpl.html"
        })

        // Wine farms
        .when("/wine_farms/:farm_id",
        {
            templateUrl : "src/app/wine_farms/farm.tpl.html"
        })

        // Products by category
        .when("/categories/:category_id",
        {
            templateUrl : "src/app/products/category-products.tpl.html"
        })

        // Selected product details
        .when("/categories/:category_id/:product_id",
        {
            templateUrl : "src/app/products/details.tpl.html"
        })

        // redirect to home
        .otherwise(
        {
            redirectTo: "/"
        });
}]);
