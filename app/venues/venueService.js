define([
    './module',
    './namespace'
], function (module, namespace) {
    'use strict';
    var name = namespace + ".venueService";

    //here list dependencies, e.g. if you need constants then add "namespace + '.foobarConstants'" and declare them in the folder.
    var dependencies = ['$log', '$http'];
    var service = function ($log, $http) {
        return {};
    };

    module.factory(name, dependencies.concat(service));
});