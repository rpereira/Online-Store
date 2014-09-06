/*jslint browser: true, devel: true, nomen: true, plusplus: true, vars: true, white: true */
/*global angular*/

angular.module("OnlineStore")

.factory("ProductsService", ["$resource", function($resource)
{
    return $resource("/products/:category_id/:product_id.json", {},
    {
        query: { method: "GET", params: { category_id: "vinho", product_id: "cistus" }, isArray: true }
    });
}]);
