<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BahasaIndonesiaController extends Controller
{
    public function index()
    {
        $blog = Blog::where('kategori', 'Materi')->where('mapel', 'Bahasa Indonesia')->orderBy('id', 'desc')->get();
        return Inertia::render('BahasaIndonesia', [
            'page' => 'Bahasa Indonesia',
            'artikel' => $blog,
        ]);
    }
    public function kamus()
    {
        return Inertia::render('KamusBahasaJawa', [
            'page' => 'Kamus Bahasa Jawa',
        ]);
    }
}
