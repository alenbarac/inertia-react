<?php

namespace App\Http\Controllers;

use App\Http\Resources\PostResource;
use App\Models\Post;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PostsController extends Controller
{
    function index() : \Inertia\Response {

       $posts = Post::with('user')->latest()->get();

        return Inertia::render('Posts/Index', [
            'posts' => PostResource::collection($posts)
        ]);
    }
}