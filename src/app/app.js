/*jslint browser: true, devel: true, nomen: true, plusplus: true, vars: true, white: true */
/*global angular*/

angular.module("OnlineStore", ["ngRoute"])

.config(["$routeProvider", function($routeProvider)
{
    "use strict";

    $routeProvider
        .when("/home",
        {
            templateUrl : "home/home.tpl.html",
            controller  : "HomeCtrl"
        })
        .otherwise(
        {
            redirectTo: "/home"
        });
}]);
