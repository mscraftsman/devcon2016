define([
    './module',
    './namespace'
], function (module, namespace) {
    'use strict';
    var name = namespace + '.speakerController';

    var dependencies = ['$scope', '$stateParams', '$state', namespace + '.speakerService'];
    var controller = function ($scope, $stateParams, $state, speakerService) {

        $scope.entries = speakerService.entries;
        $scope.selected = {};

        speakerService.getList();
    };

    module.controller(name, dependencies.concat(controller));

    //return controller function so we can require this function and use it for inheritance.
    return controller;
});