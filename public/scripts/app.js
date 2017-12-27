(function() {

    'use strict';

    angular
        .module('almacenApp', ['ui.router', 'satellizer', 'angular-table'])
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
                })
                .state('tipoProducto', {
                    url: '/tipo-productos',
                    templateUrl: './views/tipoProductoView.html',
                    controller: 'TipoProductoCtrl'
                })
                .state('dashboard', {
                    url: '/',
                    templateUrl: './views/dashboardView.html',
                    controller: 'DashboardCtrl'
                });
        });
})();