<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Ventas extends Model
{
    protected $table = 'ventas';

    protected $fillable = [
        'id_producto', 'nombre_cliente', 'cantidad', 'precio_venta', 'tipo_pago'
    ];
}
