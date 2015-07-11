/**
 * Created by Ivana on 9.7.2015..
 */
define(['appModule'], function(module){

    "use strict";

    return module.registerDirective('smartInclude', function () {
            return {
                replace: true,
                restrict: 'A',
                templateUrl: function (element, attr) {
                    return attr.smartInclude;
                },
                compile: function(element){
                    element[0].className = element[0].className.replace(/placeholder[^\s]+/g, '');
                }
            };
        }
    );

});
