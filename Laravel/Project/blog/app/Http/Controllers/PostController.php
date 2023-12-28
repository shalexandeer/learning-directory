<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;

class PostController extends Controller
{
    // Show all posts
    public function index() {
        $posts = Post::orderBy('created_at', 'desc')->get();
        return view('posts.index', ['posts' => $posts]);
    }

    // update post
    public function edit($id) {
        $post = Post::findOrFail($id);
        return view('posts.edit', ['post' => $post]);
    }

    // update post
    public function update(Request $request, $id) {
        // validations
        $request->validate([
            'title' => 'required',
            'description' => 'required',
        ]);

        $post = Post::findOrFail($id);

        if ($request->hasFile('image')) {
            $file_name = time() . '.' . request()->image->getClientOriginalExtension();
            request()->image->move(public_path('images'), $file_name);
            $post->image = $file_name;
        }

        $post->title = $request->title;
        $post->description = $request->description;

        $post->save();
        return redirect()->route('posts.index')->with('success', 'Post updated successfully.');
    }

    // Create post
    public function create() {
        return view('posts.create');
    }

    // Store post
    public function store(Request $request) {
        // validations
        $request->validate([
            'title' => 'required',
            'description' => 'required',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        $post = new Post();

        $file_name = time() . '.' . request()->image->getClientOriginalExtension();
        request()->image->move(public_path('images'), $file_name);

        $post->title = $request->title;
        $post->description = $request->description;
        $post->image = $file_name;

        $post->save();
        return redirect()->route('posts.index')->with('success', 'Post created successfully.');
    }
    
    //delete post
    public function destroy($id) {
        $post = Post::findOrFail($id);
        $post->delete();
        return redirect()->route('posts.index')->with('success', 'Post deleted successfully.');
    }

}
