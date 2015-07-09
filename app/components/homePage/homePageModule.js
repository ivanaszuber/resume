/**
 * Created by Ivana on 9.7.2015..
 */
/**
 * Created by Ivana on 14.5.2015..
 */
define([
    'angular',
    'angular-couch-potato',
    'angular-ui-router'

], function (ng, couchPotato, _) {
    'use strict';

    var homePageModule = ng.module('homePageModule', [
        'ui.router'
    ]);

    couchPotato.configureApp(homePageModule);

    homePageModule.config(function ($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('app.home', {
                url:'/',
                views: {
                    "content": {
                        templateUrl: 'components/homePage/homePageView.html',
                        controllerAs: 'homePageController'
                    }
                }
            })

    });

    homePageModule.run(function ($couchPotato) {
        homePageModule.lazy = $couchPotato;
    });

    return homePageModule;
});