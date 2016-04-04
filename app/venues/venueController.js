define([
    './module',
    './namespace'
], function (module, namespace) {
    'use strict';
    var name = namespace + '.venueController';

    var dependencies = ['$scope', '$stateParams', '$state', namespace + '.venueService'];
    var controller = function ($scope, $stateParams, $state, venueService) {

        $scope.longitude = "";
        $scope.latitude = "";

    };

    module.controller(name, dependencies.concat(controller));

    //return controller function so we can require this function and use it for inheritance.
    return controller;
});