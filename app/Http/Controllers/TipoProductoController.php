<?php

namespace App\Http\Controllers;

use App\TipoProducto;
use Illuminate\Http\Request;

class TipoProductoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return TipoProducto::all();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $tipoproducto = TipoProducto::create($request->all());
        $tipoproducto->save();
        return $tipoproducto;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\TipoProducto  $tipoProducto
     * @return \Illuminate\Http\Response
     */
    public function show(TipoProducto $tipoProducto)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\TipoProducto  $tipoProducto
     * @return \Illuminate\Http\Response
     */
    public function edit(TipoProducto $tipoProducto)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\TipoProducto  $tipoProducto
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $tipoproducto = TipoProducto::find($id);
        $tipoproducto->nombre = $request->input('nombre');
        $tipoproducto->save();
        return $tipoproducto;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\TipoProducto  $tipoProducto
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $tipoproducto = TipoProducto::find($id);
        $tipoproducto->delete();

        return [
            'deleted' => 'true'
        ];
    }
}
