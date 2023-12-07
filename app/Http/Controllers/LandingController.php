<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use Illuminate\Http\Request;
use Inertia\Inertia;

class LandingController extends Controller
{
    public function index()
    {
        $blog = Blog::where('kategori', 'Artikel')->orderBy('created_at', 'desc')->take(3)->get();
        return Inertia::render('Welcome', [
            'artikel' => $blog,
        ]);
    }
}
