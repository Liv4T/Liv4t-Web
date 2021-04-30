<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\SchoolGovernmentMembers;
use Auth;

class SchoolGovernmentMembersController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $user=Auth::user();
        $userInstitution= $user->institution_id;

        $user_id = $user->id;
        $members = SchoolGovernmentMembers::where('user_creator_id','=',$user_id)->where('institution_id','=',$userInstitution)->orderBy('order','asc')->get();
        return response()->json($members);
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
        $user=Auth::user();
        $userInstitution= $user->institution_id;

        $members = new SchoolGovernmentMembers();
        $members->member = $request->member;
        $members->position = $request->position;
        $members->description = $request->description;
        $members->order = $request->order;
        $members->user_creator_id = $request->user_creator_id;
        $members->user_id = $request->user_id;
        $members->image = $request->image;
        $members->imageSchoolGovernment = $request->imageSchoolGovernment;
        $members->modeInsert = $request->modeInsert;
        $members->institution_id= $userInstitution;
        $members->save();
        return response()->json("Miembro Creado");
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
        //
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
        $members = SchoolGovernmentMembers::findOrFail($id);
        $members->member = $request->member;
        $members->position = $request->position;
        $members->description = $request->description;
        $members->order = $request->order;
        $members->user_id = $request->user_id;
        $members->image = $request->image;
        $members->imageSchoolGovernment = $request->imageSchoolGovernment;
        $members->modeInsert = $request->modeInsert;
        $members->save();
        return response()->json("Miembro Actualizado");
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $members = SchoolGovernmentMembers::findOrFail($id);
        $members->delete();
        return response()->json("Miembro Eliminado");
    }
}
