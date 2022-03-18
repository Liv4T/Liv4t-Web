@extends('layouts.app')
@section('content')
    @include('menu')
    <piar-planification ></piar-planification>
    <footers></footers>
    <div class="container">
      <!--<app-vue></app-vue>-->
        <div class="row justify-content-center">
          <div class="card-body"> @if (session('status'))
            <div class="alert alert-success" role="alert">{{ session('status') }}</div>@endif
          </div>
        </div>
        </div>
    </div>
@endsection
