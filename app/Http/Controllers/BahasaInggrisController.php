<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BahasaInggrisController extends Controller
{
    public function index()
    {
        $blog = Blog::where('kategori', 'Materi')->where('mapel', 'Bahasa Inggris')->orderBy('id', 'desc')->get();
        return Inertia::render('BahasaInggris', [
            'page' => 'Bahasa Indonesia',
            'artikel' => $blog,
        ]);
    }
}
