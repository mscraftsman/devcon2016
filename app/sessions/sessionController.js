define([
    './module',
    './namespace'
], function (module, namespace) {
    'use strict';
    var name = namespace + '.sessionController';

    var dependencies = ['$scope', '$stateParams', '$state', '$modal', namespace + '.sessionService'];
    var controller = function ($scope, $stateParams, $state, $modal, sessionService) {

        $scope.scrollTo = false;
        $scope.days = [{ id: 1, name: "Thursday" }, { id: 2, name: "Friday" }, { id: 3, name: "Saturday" }]
        $scope.entries = sessionService.entries;
        $scope.selected = {};

        var dayId = "1";
        if ($stateParams.dayId) {
            dayId = $stateParams.dayId;
        }
        sessionService.getList(dayId);

        $scope.getTimes = function () {
            var indexTimes = [];

            angular.forEach($scope.entries, function (item) {
                if (indexTimes.indexOf(item.gsx$time.$t) == -1) {
                    indexTimes.push(item.gsx$time.$t);
                }
            });

            return indexTimes;
        }

        $scope.getEntries = function (entries, expected) {
            var result = [];

            angular.forEach(entries, function (entry, key) {
                if (angular.equals(expected, entry.gsx$time.$t)) {
                    result.push(entry);
                }
            });

            return result;
        }

        $scope.getSpan = function (expected) {
            var span = 4;
            angular.forEach($scope.entries, function (entry) {
                if (angular.equals(expected, entry.gsx$time.$t)) {
                    span--;
                }
            })
            return span;
        }

        var modalOptions = {
            closeButtonText: 'OK',
            entry: [],
            modalFade: true,
            resolve: {
                //entry: function () {
                //    return $scope.entries[index];
                //}
            },
            size: 'lg',
            templateUrl: "app/templates/modalDialog.html"
        };

        if (!modalOptions.controller) {
            modalOptions.controller = function ($scope, $modalInstance) {
                $scope.modalOptions = modalOptions;
                $scope.ok = function (result) {
                    $modalInstance.close(result);
                };
                $scope.close = function (result) {
                    $modalInstance.dismiss('cancel');
                };
            }
        }

        $scope.showDetails = function (entry) {
            if (entry.gsx$abstract.$t) {
                modalOptions.entry = entry;
                var instance = $modal.open(modalOptions);
            }
        };

        $scope.propose = function () {
            $scope.scrollTo = true;
            $state.go('.propose', $stateParams);
        };

        $scope.done = function () {
            $scope.scrollTo = false;
            $state.go('^', $stateParams);
        };
    };

    module.controller(name, dependencies.concat(controller));

    //return controller function so we can require this function and use it for inheritance.
    return controller;
});