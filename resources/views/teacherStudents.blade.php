@extends('layouts.app')

@section('content')
  @if (Auth::user()->type_user == '2')
        <menu-docente></menu-docente>
  @endif
<teacher-students></teacher-students>
<footers></footers>
<div class="container">
    <div class="row justify-content-center">
      <div class="card-body"> @if (session('status'))
        <div class="alert alert-success" role="alert">{{ session('status') }}</div>@endif
      </div>
    </div>
    </div>
</div>
@endsection
