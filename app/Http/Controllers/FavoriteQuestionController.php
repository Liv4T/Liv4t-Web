<?php

namespace App\Http\Controllers;

use App\Question;
use Illuminate\Http\Request;

class FavoriteQuestionController extends Controller
{
    // very important
    // --------------
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function store(Question $question){
        $question->favorites()->attach(auth()->id());

        if (request()->expectsJson()){
            // this means action is operated successfully but there is no content to return
            return response()->json(null, 204);
        }
        return back();
    }

    public function destroy(Question $question){
        $question->favorites()->detach(auth()->id());

        if (request()->expectsJson()){
            return response()->json(null, 204);
        }
        return back();
    }
}
