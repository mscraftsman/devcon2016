require.config({
    urlArgs : 'bust=v1' + (new Date().getTime()),
    waitSeconds : 20, //make sure it is enough to load all scripts
    paths : {
        'angular' : '../Scripts/angular/1.2.28/angular.min',
        'uirouter': '../Scripts/angular/angular-ui/0.2.8/angular-ui-router.min',
        'gmap': '../Scripts/angular/angular-google-maps/2.0.12/angular-google-maps.min',
        'lodash': '../Scripts/lodash/lodash',
        'jquery': '../Scripts/jquery/jquery.min',
        'bootstrap': '../Scripts/bootstrap/bootstrap-3.3.1.min',
		'uibootstrap': '../Scripts/angular/ui-bootstrap-tpls-0.12.1.min',
        'custom': '../Scripts/devcon'
    },
    shim : {
        'angular' : {
            exports : 'angular',
            deps : ['jquery']
        },
        'uirouter': {
            deps: ['angular']
        },
        'bootstrap': {
            deps: ['jquery']
        },
        'uibootstrap': {
            deps: ['angular', 'bootstrap']
        },
        'custom': {
            deps: ['jquery']
        },
        'lodash': {
            exports: 'lodash'
        },
        'gmap': {
            deps: ['angular', 'lodash']
        }
    }
});

require([
	'./namespace',
	'./app',
	'./routes'
],
function (namespace) {
	angular.element(document).ready(function() {
		 angular.bootstrap(document, [namespace]);
   });
});