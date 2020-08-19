<?php

namespace App\Http\Controllers;

use App\Courses;
use App\Quarterly;
use App\Weekly;
use App\Area;
use App\User;
use App\Grade;
use App\CoursesAchievement;
use App\Classroom;
use App\ClassroomStudent;
use App\ClassroomTeacher;
use Illuminate\Http\Request;
use Auth;

class CoursesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(String $id_area, String $id_classroom)
    {
        //
        $user = Auth::user();
        $quaterly = [];
        $achievements = [];
        if ($user->type_user == 1) {
            $Courses = Courses::where('id_area', $id_area)->where('id_classroom', $id_classroom)->first();
        } elseif ($user->type_user == 2) {
            $Courses = Courses::where('id_teacher', $user->id)->where('id_area', $id_area)->where('id_classroom', $id_classroom)->first();
        }
        if (isset($Courses)) {
            $achievements = CoursesAchievement::where('id_planification', $Courses->id)->get();
            if ($user->type_user == 1) {
                $Quarterlies = Quarterly::where('id_area', $id_area)->where('id_classroom', $id_classroom)->get();
            } elseif ($user->type_user == 2) {
                $Quarterlies = Quarterly::where('id_teacher', $user->id)->where('id_area', $id_area)->where('id_classroom', $id_classroom)->get();
            }
            // $data[0] = [
            //     'id'   => 0,
            //     'text' => 'Seleccione',
            // ];
            $Courses->achievements = $achievements;
            foreach ($Quarterlies as $key => $Quarterly) {
                $quaterly[$key] = [
                    'id'=>$Quarterly->id,
                    'content' => $Quarterly->content,
                    'unit_name' => $Quarterly->unit_name
                ];
            }
        }
         //get classroom name
         $classroom_name='';
         $classroom=Classroom::where('id',$id_classroom)->get();
         $area=Area::where('id',$id_area)->get();
 
         if(isset($classroom) && count($classroom)>0 && isset($area) && count($area)>0)
         {
             $classroom_name=$area[0]->name.' '.$classroom[0]->name;
         }

        $data = [
            'classroom_name'=> $classroom_name,
            'quaterly' =>  $quaterly,
            'courses' => $Courses,
            'achievements' => $achievements
        ];

        return response()->json($data);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function getAreaByUser()
    {
        //
        $auth = Auth::user();

        $user = User::find($auth->id);
        $areas = [];
        if ($user->type_user == 1) {
            $user_asigneds = ClassroomTeacher::all();
            foreach ($user_asigneds as $key => $user_asigned) {
                $user = User::find($user_asigned->id_user);
                $classroom = Classroom::find($user_asigned->id_classroom);
                $class = Area::find($user_asigned->id_area);
                $areas[$key] = [
                    'id' => isset($class->id) ? $class->id : '',
                    'text' => isset($class->name) && isset($classroom->name) ? $class->name . " - " . $classroom->name : '',
                    'id_classroom' => isset($classroom->id) ? $classroom->id : '',
                ];
            }
        } elseif ($user->type_user == 2) {
            $user_asignated = ClassroomTeacher::where('id_user', $user->id)->get();
            if (isset($user_asignated)) {
                foreach ($user_asignated as $key => $area) {
                    $classroom = Classroom::find($area->id_classroom);
                    $class = Area::find($area->id_area);
                    $areas[$key] = [
                        'id'           => $class->id,
                        'text'         => $class->name . " - " . $classroom->name,
                        'id_classroom' => $classroom->id,
                    ];
                }
            }
        } elseif ($user->type_user == 3) {
            $user_asignateds = ClassroomStudent::where('id_user', $user->id)->get();
            if (isset($user_asignateds)) {
                foreach ($user_asignateds as $key => $user_asignated) {
                    $classroom = Classroom::find($user_asignated->id_classroom);
                    $class = Area::where('id_grade', $classroom->id_grade)->get();
                    foreach ($class as $key => $area) {
                        $areas[$key] = [
                            'id' => $area->id,
                            'text' => $area->name,
                            'id_classroom' => $user_asignated->id_classroom,
                        ];
                    }
                }
            }
        }

        return response()->json($areas);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = $request->all();

        $courses = Courses::where('id_teacher', Auth::user()->id)->where('id_area', $data['id_area'])->where('id_classroom', $data['id_classroom'])->get();
        
        if(count($courses)==0){
            $course = Courses::create([
                'id_area'    => $data['id_area'],
                'id_classroom'  => $data['id_classroom'],
                'id_teacher'     =>  Auth::user()->id,
            ]);
        }
        else // duplicate =false
        {
            $course=$courses[0];
        }

             
        $achievements = $data['logros'];

        foreach ($achievements as $index => $achievement) {

            if(isset($achievement['id_achievement']))
            {
                $achievementUpdatedRowsCount = CoursesAchievement::where('id',$achievement['id_achievement'])->update(array('percentage'=>$achievement['porcentaje'],'achievement'=>$achievement['logro']));

                if($achievementUpdatedRowsCount<=0)
                {
                    $logro = CoursesAchievement::create([
                        'achievement'       => $achievement['logro'],
                        'percentage'        => $achievement['porcentaje'],
                        'id_planification'  => $course->id,
                    ]);
                }
            }
            else{
                $logro = CoursesAchievement::create([
                    'achievement'       => $achievement['logro'],
                    'percentage'        => $achievement['porcentaje'],
                    'id_planification'  => $course->id,
                ]);
            }

        }


        $Quarterlies = $data['trimestres'];

        foreach ($Quarterlies as $index => $Quarterly) {

            if(isset($Quarterly['id_quaterly']))
            {
                $quarterlyUpdatedRowsCount = Quarterly::where('id',$Quarterly['id_quaterly'])->update(array('content'=>$Quarterly['contenido'],'unit_name'=>$Quarterly['name']));

                if($quarterlyUpdatedRowsCount<=0)
                {
                    $subCate = Quarterly::create([
                        'content' => $Quarterly['contenido'],
                        'unit_name' => $Quarterly['name'],
                        'id_area'    => $data['id_area'],
                        'id_classroom'    => $data['id_classroom'],
                        'id_teacher'     =>  Auth::user()->id,
                    ]);
                }
            }
            else
            {
                $subCate = Quarterly::create([
                    'content' => $Quarterly['contenido'],
                    'unit_name' => $Quarterly['name'],
                    'id_area'    => $data['id_area'],
                    'id_classroom'    => $data['id_classroom'],
                    'id_teacher'     =>  Auth::user()->id,
                ]);
            }

        }




        return "ok";
    }


    /**
     * Display the specified resource.
     *
     * @param  \App\Courses  $courses
     * @return \Illuminate\Http\Response
     */
    public function courseWeekly(Request $request)
    {
        //
        $data = $request->all();
        $Weeks = $data['semana'];

        $count = 1;
        foreach ($Weeks as $index => $week) {
            $subCate = Weekly::create([
                'driving_question' => $week['driving_question'],
                'class_development' => $week['class_development'],
                'observation' => $week['observation'],
                'id_area'    => $data['id_area'],
                'id_classroom'    => $data['id_classroom'],
                'week'    => $count,
                'id_teacher'     =>  Auth::user()->id,
            ]);
            $count = $count + 1;
        }
        return "ok";
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Courses  $courses
     * @return \Illuminate\Http\Response
     */
    public function updateCourseWeekly(Request $request)
    {
        //
        $data = $request->all();
        $Weeks = $data['semana'];

        foreach ($Weeks as $index => $week) {
            $week_update = Weekly::findOrFail($week['id']);
            $week_update->driving_question = $week['text'];
            $week_update->class_development = $week['class'];
            $week_update->observation = $week['observation'];
            $week_update->save();
        }
        return "ok";
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Courses  $courses
     * @return \Illuminate\Http\Response
     */
    public function show(Courses $courses)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Courses  $courses
     * @return \Illuminate\Http\Response
     */
    public function edit(Courses $courses)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Courses  $courses
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Courses $courses)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Courses  $courses
     * @return \Illuminate\Http\Response
     */
    public function destroy(Courses $courses)
    {
        //
    }

    public function getWeek()
    {

        $Weeks = Weekly::all();
        $data = [];
        $data[0] = [
            'id'   => 0,
            'text' => 'Seleccione',
        ];
        foreach ($Weeks as $key => $week) {
            $data[$key + 1] = [
                'id'   => $week->id,
                'text' => $week->driving_question,
            ];
        }
        return response()->json($data);
    }

    public function editGetWeek(String $id_area, String $id_classroom)
    {
        $user = Auth::user();
        $data = [];
        if ($user->type_user == 1) {
            $Weeks = Weekly::where('id_area', $id_area)->where('id_classroom', $id_classroom)->get();
            // $data[0] = [
            //     'id'   => 0,
            //     'text' => 'Seleccione',
            // ];
            foreach ($Weeks as $key => $week) {
                $data[$key] = [
                    'id'   => $week->id,
                    'text' => $week->driving_question,
                    'class' => $week->class_development,
                    'observation' => $week->observation,
                    'id_area' =>  $week->id_area,
                    'id_classroom' =>  $week->id_classroom,
                ];
            }
        } elseif ($user->type_user == 2) {
            $Weeks = Weekly::where('id_teacher', $user->id)->get();
            $data = [];
            // $data[0] = [
            //     'id'   => 0,
            //     'text' => 'Seleccione',
            // ];
            foreach ($Weeks as $key => $week) {
                $data[$key] = [
                    'id'   => $week->id,
                    'text' => $week->driving_question,
                    'class' => $week->class_development,
                    'observation' => $week->observation,
                    'id_area' =>  $week->id_area,
                    'id_classroom' =>  $week->id_classroom,
                ];
            }
        }
        return response()->json($data);
    }
    public function editOneWeek(String $id_area, String $id_classroom)
    {
        $user = Auth::user();
        $data = [];
        if ($user->type_user == 1) {
            $Weeks = Weekly::where('id_area', $id_area)->where('id_classroom', $id_classroom)->get();
            // $data[0] = [
            //     'id'   => 0,
            //     'text' => 'Seleccione',
            // ];
            foreach ($Weeks as $key => $week) {
                $data[$key] = [
                    'id'   => $week->id,
                    'text' => $week->driving_question,
                    'class' => $week->class_development,
                    'observation' => $week->observation,
                    'id_area' =>  $week->id_area,
                    'id_classroom' =>  $week->id_classroom,
                ];
            }
        } elseif ($user->type_user == 2) {
            $Weeks = Weekly::where('id_teacher', $user->id)->where('id_area', $id_area)->where('id_classroom', $id_classroom)->get();
            // $data[0] = [
            //     'id'   => 0,
            //     'text' => 'Seleccione',
            // ];
            foreach ($Weeks as $key => $week) {
                $data[$key] = [
                    'id'   => $week->id,
                    'text' => $week->driving_question,
                    'class' => $week->class_development,
                    'observation' => $week->observation,
                    'id_area' =>  $week->id_area,
                    'id_classroom' =>  $week->id_classroom,
                ];
            }
        }
        return response()->json($data);
    }
    public function viewGetWeek(String $id_area, String $id_classroom)
    {
        $Weeks = Weekly::where('id_area', $id_area)->where('id_classroom', $id_classroom)->get();
        $data = [];
        foreach ($Weeks as $key => $week) {
            $data[$key] = [
                'id'   => $week->id,
                'text' => $week->driving_question,
                'class' => $week->class_development,
                'observation' => $week->observation,
                'id_area' =>  $week->id_area,
                'id_classroom' =>  $week->id_classroom,
            ];
        }
        return response()->json($data);
    }
    public function showWeek(String $id)
    {
        $weeks = Weekly::findOrFail($id);
        return response()->json($weeks);
    }
}
