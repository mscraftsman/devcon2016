define([
    './module',
    './namespace'
], function (module, namespace) {
    'use strict';
    var name = namespace + '.sponsorController';

    var dependencies = ['$scope', '$stateParams', '$state', namespace + '.sponsorService'];
    var controller = function ($scope, $stateParams, $state, sponsorService) {

        $scope.entries = sponsorService.entries;
        $scope.selected = {};

        sponsorService.getList();
    };

    module.controller(name, dependencies.concat(controller));

    //return controller function so we can require this function and use it for inheritance.
    return controller;
});