<?php

namespace App\Http\Controllers;

use App\ConfigurationParameter;
use Illuminate\Http\Request;
use Auth;

class ConfigurationController extends Controller
{
    public function getPropertyByCode(string $code)
    {
        $user=Auth::user();
        $userInstitution=$user->institution_id;

        $property=ConfigurationParameter::where('code',$code)->where('institution_id', $userInstitution)->first();

        if(!isset($property)) return response()->json([]);

        return response()->json($property);

    }
    public function setProperty(Request $request,string $code)
    {
        $data=$request->all();

        ConfigurationParameter::where('code',$code)->update([
            'content'=>$data['value']
        ]);
        return response()->json([]);

    }
}
