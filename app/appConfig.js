/**
 * Created by Ivana on 9.7.2015..
 */
var require = {
    waitSeconds: 0,
    paths: {

        'jquery': [
            'assets/js/jquery-1.11.1.min'
        ],
        'jquery.easing':'assets/js/jquery.easing-1.3',
        //'jquery.prettyPhoto':'assets/js/jquery.prettyPhoto',
        //'jquery.validate':'assets/js/jquery.validate',
        //'jquery.address':'assets/js/jquery.address-1.5.min',
        //'jquery.isotope':'assets/js/jquery.isotope.min',
        //'jquery.circliful':'assets/js/jquery.circliful.min',
        //'jquery.migrate':'jquery-migrate-1.2.1.min',
        //'script':'assets/js/script',
        'bootstrap': 'bower_components/bootstrap/dist/js/bootstrap',
        'angular': ['bower_components/angular/angular.min'],
        'domReady': ['bower_components/requirejs-domready/domReady'],
        'angular-ui-router': ['bower_components/angular-ui-router/release/angular-ui-router.min'],
        'angular-bootstrap': ['bower_components/angular-bootstrap/ui-bootstrap-tpls.min'],
        'angular-couch-potato': ['bower_components/angular-couch-potato/dist/angular-couch-potato'],
        'lodash': ['bower_components/lodash/dist/lodash.min'],
        'fastclick': ['bower_components/fastclick/lib/fastclick'],
        'modules-includes': 'appIncludes'
    },
    shim: {
        'angular': {'exports': 'angular', deps: ['jquery']},
        'angular-ui-router': {deps: ['angular']},
        'angular-couch-potato': {deps: ['angular']},
        'bootstrap': {deps: ['jquery']},
        //'script': {deps: ['jquery']},
        'jquery.easing': {deps: ['jquery']},
        //'jquery.prettyPhoto': {deps: ['jquery']},
        //'jquery.address': {deps: ['jquery']},
        //'jquery.isotope': {deps: ['jquery']},
        //'jquery.circliful': {deps: ['jquery']},
        //'jquery.migrate': {deps: ['jquery']},
        'modules-includes': {deps: ['angular']}
    },
    priority: [
        'jquery',
        'bootstrap',
        'angular'
    ]
};