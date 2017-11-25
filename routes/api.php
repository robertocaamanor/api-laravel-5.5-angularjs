<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/productos', 'ProductosController@createProducto');
Route::put('/producto/{id}', 'ProductosController@editProducto');
Route::delete('/producto/{id}', 'ProductosController@deleteProducto');
Route::get('/productos', 'ProductosController@listProducto');