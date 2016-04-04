define([
    './module',
    './namespace'
], function (module, namespace) {
    'use strict';
    var name = namespace + '.indexController';

    var dependencies = ['$scope', '$stateParams', '$state', namespace + '.indexService'];
    var controller = function ($scope, $stateParams, $state, indexService) {

        $scope.speakers = indexService.speakers;
        indexService.getSpeakers();

        $scope.sponsors = indexService.sponsors;
        indexService.getSponsors();
		
        $scope.jobs = indexService.jobs;
        indexService.getJobListings();

         $scope.organisers = indexService.organisers;
         //indexService.getOrganisers();
    };

    module.controller(name, dependencies.concat(controller));

    //return controller function so we can require this function and use it for inheritance.
    return controller;
});