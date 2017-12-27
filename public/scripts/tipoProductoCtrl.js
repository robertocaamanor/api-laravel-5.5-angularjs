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
                tipo: $scope.tipo
            }).then(function(response){
                console.log($scope.productos);
                $scope.tipoProducto.unshift(response.data);
                $scope.tipo = '';
            });
            $scope.getTipoProducto();
        }
        $scope.getTipoProducto();        
    }

})();