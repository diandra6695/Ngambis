<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BahasaJawaController extends Controller
{
    public function index()
    {
        $blog = Blog::where('kategori', 'Materi')->where('mapel', 'Bahasa Jawa')->orderBy('id', 'desc')->get();
        return Inertia::render('BahasaJawa', [
            'page' => 'Bahasa Jawa',
            'artikel' => $blog,
        ]);
    }
    public function kamus()
    {
        return Inertia::render('KamusBahasaJawa', [
            'page' => 'Kamus Bahasa Jawa',
        ]);
    }
    public function latinToJawa()
    {
        return Inertia::render('LatinToJawa', [
            'page' => 'Latin - Aksara Jawa',
        ]);
    }
}
