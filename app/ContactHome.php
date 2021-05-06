<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ContactHome extends Model
{
    protected $table =  'contact_home';
    protected $fillable = ['email'];
}
