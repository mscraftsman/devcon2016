define([
	'angular',
	'app',
    './extras/routes',
    './sessions/routes',
    './speakers/routes',
    './sponsors/routes',
    './venues/routes',
    './templates/routes'
],
function (angular, app) {
    'use strict';

    var loReturn = app.config([
        '$stateProvider',
        '$urlRouterProvider',
        '$locationProvider',
        function ($stateProvider, $urlRouterProvider, $locationProvider) {
            $urlRouterProvider
                .when('', '/')
                .otherwise('/');

            $stateProvider
                .state('home2', {
                    url: '/2',
                    templateUrl: 'app/templates/frontpage.html'
                });

            // use the HTML5 History API
            // $locationProvider
            //     .html5Mode(true);
        }
    ]);

    return loReturn;
});
