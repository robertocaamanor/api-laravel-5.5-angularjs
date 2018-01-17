<?php

namespace App\Http\Controllers;

use App\Tipo_pago;
use Illuminate\Http\Request;

class TipoPagoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Tipo_pago::all();
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
        $tipo_pago = new Tipo_pago($request->all());
        $tipo_pago->save();
        return $tipo_pago;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Tipo_pago  $tipo_pago
     * @return \Illuminate\Http\Response
     */
    public function show(Tipo_pago $tipo_pago)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Tipo_pago  $tipo_pago
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Tipo_pago  $tipo_pago
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $tipo_pago = Tipo_pago::find($id);
        $tipo_pago->nombre = $request->input('nombre');
        $tipo_pago->save();
        return $tipo_pago;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Tipo_pago  $tipo_pago
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $tipo_pago = Tipo_pago::find($id);
        $tipo_pago->delete();

        return [
            'deleted' => 'true'
        ];
    }
}
