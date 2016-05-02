define([
    './module',
    './namespace'
], function (module, namespace) {
    'use strict';
    var name = namespace + ".sessionService";

    //here list dependencies, e.g. if you need constants then add "namespace + '.foobarConstants'" and declare them in the folder.
    var dependencies = ['$log', '$http'];
    var service = function ($log, $http) {
        var entries = [];

        return {
            getList: function (next) {
                // https://spreadsheets.google.com/feeds/worksheets/1eGVUyO9U_JqSMqF2ZQSCyzRMAxOlplFGJ6L2uwfnoDw/public/full
                var key = "1eGVUyO9U_JqSMqF2ZQSCyzRMAxOlplFGJ6L2uwfnoDw";
                var sheet = "od6";

                switch (next) {
                    case "2":
                        sheet = "otxbfq6";
                        break;
                    case "3":
                        sheet = "o3xkksm";
                        break;
                }
                var feedUrl = "https://spreadsheets.google.com/feeds/list/" + key + "/" + sheet + "/public/values?alt=json&callback=JSON_CALLBACK";
                var feedList = [];

                $http.jsonp(feedUrl)
                    .success(function (data) {
                        angular.forEach(data.feed.entry, function (entryX) {
                            feedList.push(entryX);
                        });
                        angular.copy(feedList, entries);

                        //next(data);
                    })
                    .error(function (data) {
                        next({ error: true, data: data });
                    });
            },
            entries: entries
        };
    };

    module.factory(name, dependencies.concat(service));
});