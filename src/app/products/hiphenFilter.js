/*jslint browser: true, devel: true, nomen: true, plusplus: true, vars: true, white: true */
/*global angular*/

angular.module("OnlineStore")

.filter("hyphen", function()
{
    return function(str)
    {
        return str.replace(/\s+/g, '-');
    };
});
