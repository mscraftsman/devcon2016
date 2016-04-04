define([
        'angular',
        'app',
        './module.require'
],
    function (angular, app, Extras) {
        'use strict';

        var loReturn = app.config([
            '$stateProvider',
            function ($stateProvider) {
                $stateProvider
                    .state('extras', {
                        url: '/extras',
                        templateUrl: 'app/extras/extra.html',
                        controller: Extras + '.extraController'
                    });
            }
        ]);

        return loReturn;
    });