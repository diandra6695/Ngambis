<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MatematikaController extends Controller
{
    public function index()
    {
        $blog = Blog::where('kategori', 'Materi')->where('mapel', 'Matematika')->orderBy('id', 'desc')->get();
        return Inertia::render('Matematika', [
            'artikel' => $blog,
            'head' => 'Matematika',
        ]);
    }
}
