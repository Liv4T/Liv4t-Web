<?php

namespace App\Exports;

use App\User;
use Illuminate\Contracts\View\View;
use Maatwebsite\Excel\Concerns\FromView;

class ProductsExport implements FromView
{
    public function view(): View
    {   
        $user=Auth::user();
        $userInstitution=$user->institution_id;

        $user = User::where('type_user', 2)->where('institution_id',$userInstitution)->get();
        return view('exports.users', [
            'users' => $user,
        ]);
    }
}
