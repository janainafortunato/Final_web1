<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Users_Filmes extends Model
{
   

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'user_id', 'movie_id', 'watched', 'grade'
    ];
}
