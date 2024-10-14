<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PostsController extends Controller
{
    function index() : \Inertia\Response {

        $posts = Post::all();

        return Inertia::render('Posts/Index', [
            'posts' => $posts
        ]);
    }
}