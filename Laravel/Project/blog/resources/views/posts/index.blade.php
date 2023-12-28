@extends('layouts.app')
@section('content')
<div class="space-y-6">
  <div class="w-full flex justify-between">
    <h1 class="text-[32px] font-semibold">My Feed</h1>
    <a class="inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500" href="{{ route('posts.create') }}" role="button">Add Post</a>
  </div>
  <div class="w-full">
    <!-- Message if a post is posted successfully -->
    @if ($message = Session::get('success'))
    <div role="alert" id="alert" class="absolute top-5 left-[40%] rounded-xl border border-gray-100 bg-white p-4 w-[350px]">
      <div class="flex items-start gap-4">
        <span class="text-green-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="h-6 w-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </span>

        <div class="flex-1">
          <strong class="block font-medium text-gray-900">Success!</strong>

          <p class="mt-1 text-sm text-gray-700">{{$message}}</p>
        </div>

        <button class="text-gray-500 transition hover:text-gray-600">
          <span class="sr-only">Dismiss popup</span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="h-6 w-6"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
    @endif
    <div class="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
      @if (count($posts) > 0)
        @foreach ($posts as $post)
        <article class="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm">
          <img
            alt="Office"
            src="{{ asset('images/'.$post->image)}}"
            class="h-56 w-full object-cover"
          />
          <div class="p-4 sm:p-6">
            <a href="#">
              <h3 class="text-lg font-medium text-gray-900">
                {{$post->title}}
              </h3>
            </a>
            <p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
              <p>{{$post->description}}</p>
            </p>
            <a href="#" class="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600">
              Find out more
              <span aria-hidden="true" class="block transition-all group-hover:ms-0.5 rtl:rotate-180">
                &rarr;
              </span>
            </a>
          </div>
          {{-- button delete --}}
          <div class="flex justify-end">
            <a href="{{ route('posts.edit', $post->id) }}" class="inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500">Edit</a>
            <form action="{{ route('posts.destroy', $post->id) }}" method="POST">
              @csrf
              @method('DELETE')
              <button type="submit" class="inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500">Delete</button>
            </form>
        </article>
        @endforeach
    </div>
</div>
  @else
    <p>No Posts found</p>
  @endif
</div>
@endsection