@extends('layouts.app')

@section('content')
<new-menu-scholgov></new-menu-scholgov>
<staments-component></staments-component>
<div class="container">
    <div class="row justify-content-center">
        <div class="card-body"> @if (session('status'))
            <div class="alert alert-success" role="alert">{{ session('status') }}</div>@endif
        </div>
    </div>
</div>
@endsection
