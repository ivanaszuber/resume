/**
 * Created by Ivana on 9.7.2015..
 */
define([
    'angular',
    'angular-couch-potato',
    'angular-ui-router'
], function (ng, couchPotato) {

    "use strict";

    var layoutModule = ng.module('layoutModule', ['ui.router']);

    couchPotato.configureApp(layoutModule);

    layoutModule.config(function ($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('app', {
                abstract: true,
                views: {
                    root: {
                        templateUrl: 'components/layout/layoutView.html',
                        controllerAs:'layoutController'
                    }
                }
            });

        $urlRouterProvider.otherwise('/');

    });

    layoutModule.run(function ($couchPotato) {
        layoutModule.lazy = $couchPotato;
    });

    return layoutModule;

});
