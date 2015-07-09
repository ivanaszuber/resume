/**
 * Created by Ivana on 9.7.2015..
 */
'use strict';

define([

    'angular',
    'angular-couch-potato',
    'angular-ui-router'
], function (ng, couchPotato) {

    var appModule = ng.module('appModule', [
        'scs.couch-potato',
        'ui.router',
        'layoutModule',
        'homePageModule'
    ]);

    couchPotato.configureApp(appModule);

    appModule.config(function ($provide, $httpProvider) {

    });

    appModule.run(function ($couchPotato, $rootScope, $state, $stateParams) {
        appModule.lazy = $couchPotato;
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
    });


    return appModule;
});
