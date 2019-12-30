<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class FilmesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $filmes = filmes::all();
        return Response()->json($filmes);
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
        $filmes = new Filmes([

            'name' => $request->get('name'),
            'genre' => $request->get('genre'),
            'year' => $request->get('year'),
            'duration' => $request->get('duration'),
            'synopsis' => $request->get('synopsis')

        ]);

        $filmes->save();

        return Response()->json('Filmes salvo com sucesso !');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $filmes = Filmes::find($id);
        return Response()->json($filmes);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $filmes = Filmes::find($id);
        $filmes->name = $request->get('name');
        $filmes->genre = $request->get('genre');
        $filmes->year = $request->get('year');
        $filmes->duration = $request->get('duration');
        $filmes->synopsis = $request->get('synopsis');

        return Response()->json('Filme editado com sucesso !');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $filmes = Filmes::find($id);
        $filmes->delete();

        return Response()->json('Filme deletado com sucesso !');
    }
}
