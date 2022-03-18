@extends('layouts.app')

@section('content')
  @include('menu')
    <clases-client :user="'{{Auth::user()}}'"></clases-client>
<div class="container">
    <div class="row justify-content-center">
      <div class="card-body"> @if (session('status'))
        <div class="alert alert-success" role="alert">{{ session('status') }}</div>@endif
      </div>
    </div>
    </div>
</div>
@endsection