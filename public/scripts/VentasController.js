(function() {

    'use strict';

    angular
        .module('almacenApp')
        .controller('VentasController', VentasController);

    function VentasController($http, $scope, $rootScope, $filter, $location) {
        $scope.ventas = [];
        $scope.productos = [];
        $scope.loading = false;
        $scope.configTable = {
            itemsPerPage: 10,
            fillLastPage: true
        }
        $scope.getVentas = function(){
            $scope.loading = true;
            $http.get('api/ventas').then(function(response){
                var data = response.data;
                $scope.ventas = data;
                $scope.loading = false;
            });
        }
        $scope.getVentas();
        $scope.getFormasPago = function(){
            $scope.loading = true;
            $http.get('api/tipo-pago').then(function(response){
                var data = response.data;
                $scope.tipoPago = data;
                $scope.loading = false;
            });
        }
        $scope.getFormasPago();
        $scope.getProductos = function(){
            $scope.loading = true;
            $http.get('api/producto').then(function(response){
                var data = response.data;
                $scope.productos = data;
                $scope.loading = false;
            });
        }
        $scope.getProductos();
        $scope.agregarVenta = function(){
            $scope.loading = true;
            $scope.preciototal = parseInt($scope.cantidad) * parseInt($scope.precio);
            $http.post('api/ventas', {
                id_producto: $scope.producto,
                nombre_cliente: $scope.nombre_cliente,
                cantidad: $scope.cantidad,
                precio_venta: $scope.preciototal,
                tipo_pago: $scope.forma_pago
            }).then(function(response){
                $scope.producto = '';
                $scope.nombre_cliente = '';
                $scope.cantidad = '';
                $scope.precio = '';
                $scope.forma_pago = '';
                $location.path('/ventas');
            });
        }
    }

})();