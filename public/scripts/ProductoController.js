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
            vm.loading = true;
            $http.get('api/producto').then(function (response) {
                // console.log(response);
                var data = response.data;
                // console.log(data);
                var status = response.status;
                var statusText = response.statusText;
                var headers = response.headers;
                var config = response.config;
                vm.productos = data;
                console.log(data);
                vm.loading = false;
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
        vm.openModalCrearProducto = function (){
            $("#modalCrearProducto").modal();
        }

        vm.agregarProducto = function() {
            vm.loading = true;
            $http.post('api/producto', {
                nombre: vm.nombre,
                tipo: vm.tipo,
                precio: vm.precio,
                stock: vm.stock,
                descripcion: vm.descripcion
            }).then(function (response) {
                console.log(vm.productos);
                // vm.tasks.push(response.data);
                vm.productos.unshift(response.data);
                console.log(vm.tasks);
                vm.producto = '';
                $("#modalCrearProducto").modal('hide');
                vm.getProductos();
                // alert(data.message);
                // alert("Task Created Successfully");
            }).catch(function () {
                console.log("error");
            });
        };
        vm.editarProducto = function() {
            $http.put('api/producto', {
                nombre: vm.nombre,
                tipo: vm.tipo,
                precio: vm.precio,
                stock: vm.stock,
                descripcion: vm.descripcion
            }).then(function(response){

            }).catch(function (){
                console.log("error");
            });
        }

    }

})();