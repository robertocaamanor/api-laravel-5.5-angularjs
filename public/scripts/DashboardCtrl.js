(function() {
    
        'use strict';
    
        angular
            .module('almacenApp')
            .controller('DashboardCtrl', DashboardCtrl);
    
        function DashboardCtrl($http, $scope, $rootScope, $filter) {
            $scope.countProductos = function(){
                $scope.loading = true;
                $http.get('api/producto').then(function(response){
                    var data = response.data;
                    $scope.productos = data;
                    $scope.loading = false;
                });
            }
            $scope.countProductos();
            $scope.countVentas = function(){
                $scope.loading = true;
                $http.get('api/ventas').then(function(response){
                    var data = response.data;
                    $scope.ventas = data;
                    $scope.loading = false;
                });
            }
            $scope.countVentas();
            $scope.precios = function(array){
                $scope.loading = true;
                var total = 0;
                $http.get('api/ventas').then(function(response){
                    var data = response.data;
                    var i;
                    $scope.ventas = data;
                    $scope.loading = false;
                    for(i=0; i<data.length; i++){
                        total += parseInt(data[i].precio_venta);
                    }
                    $scope.precio_ventas = total;
                });
            }
            $scope.precios();
            $scope.productosConBajoStock = function(){
                $scope.loading = true;
                $http.get('api/producto').then(function(response){
                    var data = response.data;
                    $scope.productos_stock = data;                    
                    $scope.loading = false;
                });
                
            }
            $scope.productosConBajoStock();
        }
    
    })();