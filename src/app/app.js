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
}])

/**
 * Products categories list.
 */
.constant("PRODUCT_CATEGORIES",
    [
        "All products",
        "Wines",
        "Olive Oil",
        "Cheese",
        "Bread"
    ]
)

/**
 * Products categories list.
 */
.constant("PRODUCTS", [

    /* WINES */
    {
        category    : "wine",
        name        : "Cistus Tinto",
        description : "bla bla bla",
        retailer    : "Quinta do Vale da Perdiz – Sociedade Agrícola, Lda."
    },
    {
        category    : "wine",
        name        : "Cistus Tinto Reserve",
        description : "bla bla bla",
        retailer    : "Quinta do Vale da Perdiz – Sociedade Agrícola, Lda."
    },

    /* OLIVE OIL */
    {
        category    : "olive_oil",
        name        : "Olive Oil",
        description : "bla bla bla",
        retailer    : "Bazar Regional"
    },
    {
        category    : "olive_oil",
        name        : "Olive Oil",
        description : "bla bla bla",
        retailer    : "Arte Sabor e Douro"
    }
]);
