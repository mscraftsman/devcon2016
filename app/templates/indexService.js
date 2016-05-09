define([
    './module',
    './namespace'
], function (module, namespace) {
    'use strict';
    var name = namespace + ".indexService";

    //here list dependencies, e.g. if you need constants then add "namespace + '.foobarConstants'" and declare them in the folder.
    var dependencies = ['$log', '$http'];
    var service = function ($log, $http) {
        var speakers = [];
        var sponsors = [];
        var jobs = [];
        var organisers = [];

        var getSpeakers = function (next) {
            // https://spreadsheets.google.com/feeds/worksheets/1eGVUyO9U_JqSMqF2ZQSCyzRMAxOlplFGJ6L2uwfnoDw/public/full
            var feedUrl = "https://spreadsheets.google.com/feeds/list/1eGVUyO9U_JqSMqF2ZQSCyzRMAxOlplFGJ6L2uwfnoDw/oyw720/public/values?alt=json&callback=JSON_CALLBACK";
            var feedList = [];

            $http.jsonp(feedUrl)
                .success(function (data) {
                    angular.forEach(data.feed.entry, function (entryX) {
                        feedList.push(entryX);
                    });
                    angular.copy(feedList, speakers);

                    //next(data);
                })
                .error(function (data) {
                    next({ error: true, data: data });
                });
        };

        var getSponsors = function (next) {
            var feedUrl = "https://spreadsheets.google.com/feeds/list/1eGVUyO9U_JqSMqF2ZQSCyzRMAxOlplFGJ6L2uwfnoDw/ogt46nu/public/values?alt=json&callback=JSON_CALLBACK";
            var feedList = [];

            $http.jsonp(feedUrl)
                .success(function (data) {
                    angular.forEach(data.feed.entry, function (entryX) {
                        feedList.push(entryX);
                    });
                    angular.copy(feedList, sponsors);

                    //next(data);
                })
                .error(function (data) {
                    next({ error: true, data: data });
                });
        };

        var getJobListings = function (next) {
            // https://spreadsheets.google.com/feeds/worksheets/101kaPStm71ubeSFoSiLyiHOvgESIE2tIA-cJsqHbjxE/public/full
            var feedUrl = "https://spreadsheets.google.com/feeds/list/101kaPStm71ubeSFoSiLyiHOvgESIE2tIA-cJsqHbjxE/oe9z42b/public/values?alt=json&callback=JSON_CALLBACK";
            var feedList = [];

            $http.jsonp(feedUrl)
                .success(function (data) {
                    angular.forEach(data.feed.entry, function (entryX) {
                        if (entryX.gsx$approved.$t === "1") {
                            feedList.push(entryX);
                        }
                    });
                    angular.copy(feedList, jobs);

                    //next(data);
                })
                .error(function (data) {
                    next({ error: true, data: data });
                });
        };

        var getOrganisers = function (next) {
            var feedUrl = "https://spreadsheets.google.com/feeds/list/1eGVUyO9U_JqSMqF2ZQSCyzRMAxOlplFGJ6L2uwfnoDw/oxe5fi5/public/values?alt=json&callback=JSON_CALLBACK";
            var feedList = [];

            $http.jsonp(feedUrl)
                .success(function (data) {
                    angular.forEach(data.feed.entry, function (entryX) {
                        feedList.push(entryX);
                    });
                    angular.copy(feedList, organisers);

                    //next(data);
                })
                .error(function (data) {
                    next({ error: true, data: data });
                });
        };

        return {
            getSpeakers: getSpeakers,
            getSponsors: getSponsors,
            getJobListings: getJobListings,
            getOrganisers: getOrganisers,
            speakers: speakers,
            sponsors: sponsors,
            jobs: jobs,
            organisers: organisers
        };
    };

    module.factory(name, dependencies.concat(service));
});