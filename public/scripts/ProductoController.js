(function() {

    'use strict';

    angular
        .module('almacenApp')
        .controller('ProductoController', ProductoController);

    function ProductoController($http) {

        var vm = this;

        vm.productos;
        vm.error;

        vm.loading = false;

        vm.getProductos = function() {

            // This request will hit the index method in the AuthenticateController
            // on the Laravel side and will return the list of users
            $http.get('api/producto').then(function (response) {
                // console.log(response);
                var data = response.data;
                // console.log(data);
                var status = response.status;
                var statusText = response.statusText;
                var headers = response.headers;
                var config = response.config;
                vm.productos = data;
                vm.loading = true;
                console.log(data);
            }).catch(function onError(response) {
                // Handle error
                console.log(response);
                var data = response.data;
                console.log(data);
                var status = response.status;
                var statusText = response.statusText;
                var headers = response.headers;
                var config = response.config;
            });
        }


        vm.getProductos();


    }

})();