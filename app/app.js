define([
		'angular',
		'uirouter',
        'gmap',
        'bootstrap',
		'uibootstrap',
        'custom',
        './namespace',
        './templates/module.require',
        './sessions/module.require',
        './speakers/module.require',
        './sponsors/module.require',
        './venues/module.require',
        './extras/module.require'
],
    function (
		angular,
		uirouter,
        gmap,
        bootstrap,
		uibootstrap,
        custom,
        namespace,
        Templates,
        Sessions,
        Speakers,
        Sponsors,
        Venues,
        Extras
	) {
        'use strict';
        var app = angular.module(namespace,
		[
		   'ui.router',
           'uiGmapgoogle-maps',
		   'ui.bootstrap',
           Sessions,
           Speakers,
           Sponsors,
           Venues,
           Extras,
           Templates
		]).run(function () {
		});
        return app;
    });
