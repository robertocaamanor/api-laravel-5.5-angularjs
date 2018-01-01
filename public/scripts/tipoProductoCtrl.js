(function() {

    'use strict';

    angular
        .module('almacenApp')
        .controller('TipoProductoCtrl', TipoProductoCtrl);

    function TipoProductoCtrl($http, $scope, $rootScope, $filter) {
        $scope.tipoProducto = [];
        $scope.loading = false;
        $scope.configTable = {
            itemsPerPage: 5,
            fillLastPage: true
        }
        $scope.getTipoProducto = function(){
            $scope.loading = true;
            $http.get('api/tipo-producto').then(function(response){
                var data = response.data;
                $scope.tipoProducto = data;
                $scope.loading = false;
            });
        }
        $scope.crearTipoProducto = function(){
            $scope.loading = true;
            $http.post('api/tipo-producto', {
                tipo: $scope.tipoProductoText
            }).then(function(response){
                console.log($scope.productos);
                $scope.tipoProducto.unshift(response.data);
                $scope.tipoProductoText = '';
            });
            $scope.getTipoProducto();
        }
        $scope.openModalEditarTipoProducto = function(tipoProducto){
            $('#modalEditarTipoProducto').modal();
            $scope.tipo = tipoProducto.tipo;
            $scope.id = tipoProducto.id;
        }
        $scope.editarTipoProducto = function(){
            $scope.loading = true;
            $http.put('api/tipo-producto/' + $scope.id, {
                tipo: $scope.tipo
            }).then(function(response){
                $('#modalEditarTipoProducto').modal('hide');
                $scope.tipo = '';
            });
            $scope.getTipoProducto();
        }
        $scope.eliminarProducto = function(tipoProductoId){
            console.log(tipoProductoId);
            $http.delete('api/tipo-producto/' + tipoProductoId)
            .then(function(){
            });
            $scope.getTipoProducto();
        }
        $scope.getTipoProducto();        
    }

})();