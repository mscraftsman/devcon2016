define([
        'angular',
        'app',
        './module.require'
],
    function (angular, app, Sponsors) {
        'use strict';

        var loReturn = app.config([
            '$stateProvider',
            function ($stateProvider) {
                $stateProvider
                    .state('sponsors2', {
                        url: '/sponsors2',
                        templateUrl: 'app/sponsors/sponsor.list.html',
                        controller: Sponsors + '.sponsorController'
                    })
                    .state('sponsors', {
                        url: '/sponsors',
                        templateUrl: 'app/sponsors/sponsor.html',
                        controller: Sponsors + '.sponsorController'
                    });
            }
        ]);

        return loReturn;
    });