/*jslint browser: true, devel: true, nomen: true, plusplus: true, vars: true, white: true */
/*global angular*/

angular.module("OnlineStore", ["ngRoute"])

.config(["$routeProvider", function($routeProvider)
{
    "use strict";

    $routeProvider
        .when("/home",
        {
            templateUrl : "home/home.tpl.html"
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
            name : "Vinhos"/*,
            img  : "http://www.cafeportugal.pt/resources/3/image/amendoamoncorvo002.JPG"*/
        },
        {
            name : "Azeite"/*,
            img  : "/src/assets/img/home/azeite.jpg"*/
        },
        {
            name : "Queijo"/*,
            img  : "http://1.bp.blogspot.com/-mPlqP23acfM/UbdinxrHmVI/AAAAAAAAOi4/_JpaTeqXRzM/s1600/FLOR+DA+CARDANHA.jpg"*/
        },
        {
            name : "Pão"/*,
            img  : "http://2.bp.blogspot.com/-PU5YgNAHeNs/TweJScFDKyI/AAAAAAAADyY/sng5WNQoIJw/s1600/carvi%25C3%25A7ais+p%25C3%25A3o.jpg"*/
        },
        {
            name : "Fumeiro"/*,
            img  : "http://jornal.netbila.net/images/stories/imagens/2011/gastronomia/o_que_se_come/alheiras.jpg"*/
        },
        {
            name : "Mel"/*,
            img  : "http://www.mulhernamoda.com/wp-content/uploads/2013/09/beneficios-do-mel_02.jpg"*/
        },
        {
            name : "Licor"/*,
            img  : "http://armazemdabebida.com.br/loja/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/l/i/licor-43-1.jpg"*/
        },
        {
            name : "Artesanato"/*,
            img  : "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQK8K_ZYecOKyb4RILtuTk034jFQGLHFKWyxnjnSD6mURmr7Nhjpg"*/
        }
    ]
)

/**
 * Products categories list.
 */
.constant("PRODUCTS", [

    /* Vinhos */
    {
        category    : "vinho",
        name        : "Cistus Tinto",
        description : "bla bla bla",
        retailer    : "Quinta do Vale da Perdiz – Sociedade Agrícola, Lda."
    },
    {
        category    : "vinho",
        name        : "Cistus Tinto Reserve",
        description : "bla bla bla",
        retailer    : "Quinta do Vale da Perdiz – Sociedade Agrícola, Lda."
    },

    /* Azeite */
    {
        category    : "azeite",
        name        : "Azeite",
        description : "bla bla bla",
        retailer    : "Bazar Regional"
    },
    {
        category    : "azeite",
        name        : "Azeite",
        description : "bla bla bla",
        retailer    : "Arte Sabor e Douro"
    },

    /* CHEESE */
    {
        category    : "queijo",
        name        : "Queijo de Cabra",
        description : "bla bla bla",
        retailer    : "Bazar Regional"
    },
    {
        category    : "queijo",
        name        : "Queijo de Cabra Curado",
        description : "bla bla bla",
        retailer    : "Bazar Regional"
    },
    {
        category    : "queijo",
        name        : "Queijo de Ovelha",
        description : "bla bla bla",
        retailer    : "Bazar Regional"
    },
    {
        category    : "queijo",
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
