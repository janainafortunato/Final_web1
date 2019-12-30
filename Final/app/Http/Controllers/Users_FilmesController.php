<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class Users_FilmesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $users_filmes = Users_filmes::all();
        return Response()->json($users_filmes);
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
         $users_filmes = new Users_Filmes([

            'user_id' => $request->get('user_id'),
            'movie_id' => $request->get('movie_id'),
            'watched' => $request->get('watched'),
            'grade' => $request->get('grade')

        ]);

        $users_filmes->save();

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
         $users_filmes = Users_Filmes::find($id);
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
        $users_filmes = Users_Filmes::find($id);
        $users_filmes->user_id = $request->get('user_id');
        $users_filmes->movie_id = $request->get('movie_id');
        $users_filmes->watched = $request->get('watched');
        $users_filmes->grade = $request->get('grade');
        

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
        $users_filmes = Users_Filmes::find($id);
        $users_filmes->delete();

        return Response()->json('Filme deletado com sucesso !');
    }
}
