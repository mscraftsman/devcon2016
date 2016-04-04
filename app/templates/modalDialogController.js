define([
    './module',
    './namespace'
], function (module, namespace) {
    'use strict';
    var name = namespace + '.modalDialogController';

    var dependencies = ['$scope', '$modalInstance'];
    var controller = function ($scope, $modalInstance) {

        $scope.ok = function () {
            $modalInstance.close();
        };

        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };
    };

    module.controller(name, dependencies.concat(controller));

    //return controller function so we can require this function and use it for inheritance.
    return controller;
});