<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Answer extends Model
{
    //
    protected $table = "answer";
    protected $fillable = ["answer", "question", "correct"];
}
