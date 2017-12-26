(function() {

    'use strict';

    angular
        .module('almacenApp')
        .controller('TipoProductoCtrl', TipoProductoCtrl);

    function ProductoController($http, $scope, $rootScope, $filter) {
        $scope.tipoProducto = [];
        $scope.loading = false;
        $scope.configTable = {
            itemsPerPage: 10,
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
        $scope.getTipoProducto();        
    }

})();