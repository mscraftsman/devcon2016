define([
        'angular',
        'app',
        './module.require'
],
    function (angular, app, Speakers) {
        'use strict';

        var loReturn = app.config([
            '$stateProvider',
            function ($stateProvider) {
                $stateProvider
                    .state('speakers', {
                        url: '/speakers',
                        templateUrl: 'app/speakers/speaker.list.html',
                        controller: Speakers + '.speakerController'
                    });
            }
        ]);

        return loReturn;
    });