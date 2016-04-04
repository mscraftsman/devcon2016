define([
        'angular',
        'app',
        './module.require'
], function (angular, app, Templates) {
    'use strict';

    var loReturn = app.config([
        '$stateProvider',
        '$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('home', {
                    url: '/',
                    templateUrl: 'app/templates/frontpage.html',
                    controller: Templates + '.indexController'
                })

                .state('register', {
                    url: '/register',
                    templateUrl: 'app/templates/registration.html'
                })

                .state('press', {
                    url: '/press',
                    templateUrl: 'app/templates/press.html'
                })

                .state('propose', {
                    url: '/submit',
                    templateUrl: 'app/sessions/session.submit.html'
                });
        }
    ]);

    return loReturn;
});