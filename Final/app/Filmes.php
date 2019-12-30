<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Filmes extends Model
{

 use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'genre', 'year', 'duration', 'synopsis'
    ];
}
