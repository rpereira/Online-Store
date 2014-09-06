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
}])

/**
 * Products categories list.
 */
.constant("PRODUCT_CATEGORIES",
    [
        {
            name : "Vinho",
            id   : "vinho"
        },
        {
            name : "Azeite",
            id   : "azeite"
        },
        {
            name : "Queijo",
            id   : "queijo"
        },
        {
            name : "Fumeiro",
            id   : "fumeiro"
        },
        {
            name : "Mel",
            id   : "mel"
        },
        {
            name : "Licor",
            id   : "licor"
        },
        {
            name : "Artesanato",
            id   : "artesanato"
        }
    ]
)

/**
 * Products categories list.
 */
.constant("PRODUCTS", [

    /* Vinhos */
    {
        id          : "vinho",
        name        : "Cistus Tinto",
        description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, minima!",
        retailer    : "Quinta do Vale da Perdiz – Sociedade Agrícola, Lda."
    },
    {
        id          : "vinho",
        name        : "Cistus Tinto Reserve",
        description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, minima!",
        retailer    : "Quinta do Vale da Perdiz – Sociedade Agrícola, Lda."
    },

    /* Azeite */
    {
        id          : "azeite",
        name        : "Azeite Virgem",
        description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, minima!",
        retailer    : "Bazar Regional"
    },
    {
        id          : "azeite",
        name        : "Azeite Extra Virgem",
        description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, minima!",
        retailer    : "Arte Sabor e Douro"
    },

    /* Queijo */
    {
        id          : "queijo",
        name        : "Queijo de Cabra",
        description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, minima!",
        retailer    : "Bazar Regional"
    },
    {
        id          : "queijo",
        name        : "Queijo de Cabra Curado",
        description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, minima!",
        retailer    : "Bazar Regional"
    },
    {
        id          : "queijo",
        name        : "Queijo de Ovelha",
        description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, minima!",
        retailer    : "Bazar Regional"
    },
    {
        id          : "queijo",
        name        : "Queijo de Ovelha Curado",
        description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, minima!",
        retailer    : "Bazar Regional"
    },

    /* FUMEIRO */
    {
        id          : "fumeiro",
        name        : "Alheira",
        description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, minima!",
        retailer    : "Bazar Regional"
    },
    {
        id          : "fumeiro",
        name        : "Alheira Salpicão",
        description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, minima!",
        retailer    : "Arte Sabor e Douro"
    },
    {
        id          : "fumeiro",
        name        : "Alheira Bacalhau",
        description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, minima!",
        retailer    : "Arte Sabor e Douro"
    },
    {
        id          : "fumeiro",
        name        : "Presunto",
        description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, minima!",
        retailer    : "Arte Sabor e Douro"
    },
    {
        id          : "fumeiro",
        name        : "Presunto Curado",
        description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, minima!",
        retailer    : "Arte Sabor e Douro"
    }
]);
