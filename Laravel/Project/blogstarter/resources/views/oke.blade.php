@extends('layouts.app')

@section('content')
<div class="h-screen d-flex ">
  {{-- include sidebar --}}
  <sidebar></sidebar>
  {{-- include navbar --}}
  <div class="overflow-y-scroll overflow-x-hidden p-8">@yield('content')</div>
</div>

