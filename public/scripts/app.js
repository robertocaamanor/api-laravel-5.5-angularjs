(function() {

    'use strict';

    angular
        .module('almacenApp', ['ui.router', 'satellizer'])
        .config(function($stateProvider, $urlRouterProvider, $authProvider) {

            // Satellizer configuration that specifies which API
            // route the JWT should be retrieved from

            // Redirect to the auth state if any other states
            // are requested other than users

            $stateProvider
                .state('productos', {
                    url: '/productos',
                    templateUrl: './views/productosView.html',
                    controller: 'ProductoController'
                });
        });
})();