@extends('layouts.app')

@section('content')
<menu-padres></menu-padres>
<history-psicology-component></history-psicology-component-component>
<div class="container">
    <div class="row justify-content-center">
        <div class="card-body"> @if (session('status'))
            <div class="alert alert-success" role="alert">{{ session('status') }}</div>@endif
        </div>
    </div>
</div>
</div>
@endsection