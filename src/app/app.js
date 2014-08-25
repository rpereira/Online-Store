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
        {
            name : "All products",
            id   : ''
        },
        {
            name : "Wines",
            id   : 'wine'
        },
        {
            name : "Olive Oil",
            id   : 'olive_oil'
        },
        {
            name : "Cheese",
            id   : 'cheese'
        },
        {
            name : "Bread",
            id   : 'bread'
        },
        {
            name : "Fumeiro",
            id   : 'fumeiro'
        }
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
    },

    /* CHEESE */
    {
        category    : "cheese",
        name        : "Queijo de Cabra",
        description : "bla bla bla",
        retailer    : "Bazar Regional"
    },
    {
        category    : "cheese",
        name        : "Queijo de Cabra Curado",
        description : "bla bla bla",
        retailer    : "Bazar Regional"
    },
    {
        category    : "cheese",
        name        : "Queijo de Ovelha",
        description : "bla bla bla",
        retailer    : "Bazar Regional"
    },
    {
        category    : "cheese",
        name        : "Queijo de Ovelha Curado",
        description : "bla bla bla",
        retailer    : "Bazar Regional"
    },

    /* FUMEIRO */
    {
        category    : "fumeiro",
        name        : "Alheira",
        description : "bla bla bla",
        retailer    : "Bazar Regional"
    },
    {
        category    : "fumeiro",
        name        : "Alheira Salpicão",
        description : "bla bla bla",
        retailer    : "Arte Sabor e Douro"
    },
    {
        category    : "fumeiro",
        name        : "Alheira Bacalhau",
        description : "bla bla bla",
        retailer    : "Arte Sabor e Douro"
    },
    {
        category    : "fumeiro",
        name        : "Presunto",
        description : "bla bla bla",
        retailer    : "Arte Sabor e Douro"
    },
    {
        category    : "fumeiro",
        name        : "Presunto Curado",
        description : "bla bla bla",
        retailer    : "Arte Sabor e Douro"
    }
]);
