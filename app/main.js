/**
 * Created by Ivana on 9.7.2015..
 */
// Defer AngularJS bootstrap
window.name = "NG_DEFER_BOOTSTRAP!";

define([
    'require',
    'jquery',
    'angular',
    'domReady',
    'bootstrap',
    'appModule',
    'appIncludes'
], function (require, $, ng, domReady) {
    'use strict';


    domReady(function (document) {
        ng.bootstrap(document, ['appModule'], {
            //strictDi: true
        });
        ng.resumeBootstrap();
    });
});
