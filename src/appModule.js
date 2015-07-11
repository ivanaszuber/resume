/**
 * Created by Ivana on 9.7.2015..
 */
'use strict';

define([

    'angular',
    'angular-couch-potato',
    'angular-ui-router',
    'jquery.migrate',
    'browser-selector',
    'jquery.easing',
    'jquery.prettyPhoto',
    'jquery.validate',
    'jquery.address',
    'jquery.isotope',
    'jquery.circliful',
    'wow',
    'jquery.circliful',
    'script'

], function (ng, couchPotato) {

    var appModule = ng.module('appModule', [
        'scs.couch-potato',
        'ui.router',
        'layoutModule',
        'homePageModule'
    ]);

    couchPotato.configureApp(appModule);

    appModule.config(function ($stateProvider) {
        $stateProvider
            .state('home', {
                url:'/',
                views: {
                    root: {
                        templateUrl: 'interfaces/management/manageView.html'
                    }
                }
            })
    });

    appModule.run(function ($couchPotato, $rootScope, $state, $stateParams) {
        appModule.lazy = $couchPotato;
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
    });


    return appModule;
});
