(function() {

    'use strict';

    angular
        .module('almacenApp')
        .controller('ProductoController', ProductoController);

    function ProductoController($http, $scope, $rootScope, $filter) {
        $scope.productos = [];
        $scope.loading = false;
        $scope.configTable = {
            itemsPerPage: 10,
            fillLastPage: true
        }
        $scope.getProductos = function(){
            $scope.loading = true;
            $http.get('api/producto').then(function(response){
                var data = response.data;
                $scope.productos = data;
                $scope.loading = false;
            });
        }
        $scope.openModalCrearProducto = function(){
            $('#modalCrearProducto').modal();
            $scope.nombre = '';
            $scope.tipo = '';
            $scope.precio = '';
            $scope.stock = '';
            $scope.descripcion = '';
        }
        $scope.agregarProducto = function(){
            $scope.loading = true;
            $http.post('api/producto', {
                nombre: $scope.nombre,
                tipo: $scope.tipo,
                precio: $scope.precio,
                stock: $scope.stock,
                descripcion: $scope.descripcion
            }).then(function(response){
                console.log($scope.productos);
                $scope.productos.unshift(response.data);
                $('#modalCrearProducto').modal('hide');
            });
            $scope.getProductos();
        }
        $scope.getProductos();
        $scope.openModalEditarProducto = function(producto){
            $('#modalEditarProducto').modal();
            $scope.nombre = producto.nombre;
            $scope.tipo = producto.tipo;
            $scope.precio = producto.precio;
            $scope.stock = producto.stock;
            $scope.descripcion = producto.descripcion;
            $scope.id = producto.id;
        }
        $scope.editarProducto = function(){
            $scope.loading = true;
            $http.put('api/producto/' + $scope.id, {
                nombre: $scope.nombre,
                tipo: $scope.tipo,
                precio: $scope.precio,
                stock: $scope.stock,
                descripcion: $scope.descripcion
            }).then(function(response) {
                $('#modalEditarProducto').modal('hide');
            });
            $scope.getProductos();
        }
        $scope.eliminarProducto = function(productoId){
            console.log(productoId);
            $http.delete('api/producto/' + productoId)
            .then(function(){
            });
            $scope.getProductos();
        }
    }

})();