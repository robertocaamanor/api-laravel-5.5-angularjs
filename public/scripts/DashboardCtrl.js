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
        }
    
    })();