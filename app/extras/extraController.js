define([
    './module',
    './namespace'
], function (module, namespace) {
    'use strict';
    var name = namespace + '.extraController';

    var dependencies = ['$scope', '$stateParams', '$state', namespace + '.extraService'];
    var controller = function ($scope, $stateParams, $state, extraService) {

        $scope.longitude = "";
        $scope.latitude = "";

    };

    module.controller(name, dependencies.concat(controller));

    //return controller function so we can require this function and use it for inheritance.
    return controller;
});