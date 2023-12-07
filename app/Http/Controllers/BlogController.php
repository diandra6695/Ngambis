<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use App\Models\Kategori;
use App\Models\Mapel;
use Illuminate\Http\Request;
use Intervention\Image\ImageManagerStatic as Image;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class BlogController extends Controller
{
    //fungsi index
    public function index()
    {
        return view('admin.blog', [
            'artikels' => Blog::orderBy('id', 'desc')->get(),
        ]);
    }

    //halaman create
    public function create()
    {
        return view('admin.create', [
            'kategori' => Kategori::all(),
            'mapel' => Mapel::all(),
        ]);
    }

    //fungsi store
    public function store(Request $request)
    {
        $rules = [
            'title' => 'required',
            'image' => 'required|max:1000|mimes:jpg,jpeg,png,webp',
            'description' => 'required|min:20',
        ];

        $messages = [
            'title.required' => 'Judul wajib diisi!',
            'image.required' => 'Judul wajib diisi!',
            'description.required' => 'Judul wajib diisi!',
        ];

        $this->validate($request, $rules, $messages);
        $fileName = time() . '.' . $request->image->extension();
        $request->file('image')->storeAs('public/artikel', $fileName);

        # Artikel
        $storage = "storage/content-artikel";
        $dom = new \DOMDocument();
        $dom->encoding = 'UTF-8';

        # untuk menonaktifkan kesalahan libxml standar dan memungkinkan penanganan kesalahan pengguna.
        libxml_use_internal_errors(true);
        $dom->loadHTML($request->description, LIBXML_HTML_NOIMPLIED | LIBXML_HTML_NODEFDTD);
        # Menghapus buffer kesalahan libxml
        libxml_clear_errors();

        # Baca di https://dosenit.com/php/fungsi-libxml-php
        $images = $dom->getElementsByTagName('img');

        foreach ($images as $img) {
            $src = $img->getAttribute('src');
            if (preg_match('/data:image/', $src)) {
                preg_match('/data:image\/(?<mime>.*?)\;/', $src, $groups);
                $mimetype = $groups['mime'];
                $fileNameContent = uniqid();
                $fileNameContentRand = substr(md5($fileNameContent), 6, 6) . '_' . time();
                $filePath = ("$storage/$fileNameContentRand.$mimetype");
                $image = Image::make($src)->resize(1440, 720)->encode($mimetype, 100)->save(public_path($filePath));
                $new_src = asset($filePath);
                $img->removeAttribute('src');
                $img->setAttribute('src', $new_src);
                $img->setAttribute('class', 'img-responsive');
            }
        }

        Blog::create([
            'title' => $request->title,
            'author' => auth()->user()->name,
            'slug' => Str::slug($request->title, '-'),
            'image' => $fileName,
            'mapel' => $request->mapel,
            'kategori' => $request->kategori,
            'description' => $dom->saveHTML(),
        ]);

        return redirect(route('blog'))->with('success', 'data berhasil di simpan');
    }

    //halaman edit
    public function edit($id)
    {
        return view('admin.edit');
    }

    //fungsi update
    public function update(Request $request, $id)
    {
    }

    //fungsi delete
    public function destroy($id)
    {
    }

    public function detail($slug)
    {
        $blog = Blog::where('slug', $slug)->get();
        $moreArtikel = Blog::where('kategori', 'Artikel')->orderBy('created_at', 'desc')->take(3)->get();
        return Inertia::render('DetailBlog', [
            'page' => 'Bahasa Jawa',
            'artikel' => $blog,
            'moreArtikel' => $moreArtikel,
        ]);
    }
    public function detailHome($slug)
    {
        $blog = Blog::where('slug', $slug)->get();
        $moreArtikel = Blog::where('kategori', 'Materi')->orderBy('created_at', 'desc')->take(3)->get();
        return Inertia::render('DetailBlog', [
            'page' => 'Bahasa Jawa',
            'artikel' => $blog,
            'moreArtikel' => $moreArtikel,
        ]);
    }
}
