@extends('layouts.app')
@section('content')
<div class="container">
  <h1 class="text-[32px] font-semibold">Add Post</h1>
  <section class="mt-3">
    <form method="post" class="space-y-6" action="{{ route('posts.store') }}" enctype="multipart/form-data">
      @csrf
      <!-- Error message when data is not inputted -->
      @if ($errors->any())
        <div class="alert alert-danger">
          <ul>
            @foreach ($errors->all() as $error)
              <li>{{ $error }}</li>
            @endforeach
          </ul>
        </div>
      @endif
      <div class="space-y-3">
        <div>
          <label for="floatingInput">Title</label>
          <input placeholder="Insert Title" class="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50" type="text" name="title">
          
        </div><div>
          <label for="floatingTextArea">Description</label>
          <textarea placeholder="Insert Description" class="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50" name="description" id="floatingTextarea" cols="30" rows="10"></textarea>
          
        </div><div>
          <label for="formFile" class="form-label">Add Image</label>
          <img src="" alt="" class="img-blog">
          <input class="form-control" type="file" name="image">
        </div>
      </div>
      <button class="inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500">Save</button>
    </form>
  </section>
    
</div>
@endsection