<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SejarahController extends Controller
{
    public function index()
    {
        $blog = Blog::where('kategori', 'Materi')->where('mapel', 'Sejarah')->orderBy('id', 'desc')->get();
        return Inertia::render('Sejarah', [
            'artikel' => $blog,
        ]);
    }
}
