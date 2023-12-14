<?php

use App\Http\Controllers\BahasaIndonesiaController;
use App\Http\Controllers\BahasaInggrisController;
use App\Http\Controllers\BahasaJawaController;
use App\Http\Controllers\BlogController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\LandingController;
use App\Http\Controllers\MatematikaController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SejarahController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

use function Termwind\render;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/home', [HomeController::class, 'index'])->name('home');

Route::get('/home/matematika', [MatematikaController::class, 'index'])->name('materi.matematika');
Route::get('/home/bahasaIndonesia', [BahasaIndonesiaController::class, 'index'])->name('materi.bahasaIndonesia');
Route::get('/home/bahasaInggris', [BahasaInggrisController::class, 'index'])->name('materi.bahasaInggris');
Route::get('/home/sejarah', [SejarahController::class, 'index'])->name('materi.sejarah');
Route::get('/home/bahasajawa', [BahasaJawaController::class, 'index'])->name('materi.bahasajawa');
Route::get('/home/bahasajawa/kamus', [BahasaJawaController::class, 'kamus'])->name('materi.bahasajawa.kamus');
Route::get('/home/bahasaIndonesia/kamus', [BahasaJawaController::class, 'latinToJawa'])->name('materi.bahasajawa.latinToJawa');
Route::get('/home/matematika', [MatematikaController::class, 'index'])->name('materi.matematika');
Route::get('/blog/{slug}', [BlogController::class, 'detail'])->name('detail');
Route::get('/home/blog/{slug}', [BlogController::class, 'detailHome'])->name('detail.home');
Route::get('/blog', [BlogController::class, 'blog'])->name('blog.home');
Route::get('/about', function () {
    return Inertia::render('About');
})->name('about');

Route::get('/home/blog', function () {
    return Inertia::render('Blog');
})->name('blog');

Route::get('/', [LandingController::class, 'index'])->name('index');

Route::get('/dashboard', [BlogController::class, 'index'])->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/dashboard/blog', [BlogController::class, 'index'])->name('blog')->middleware('auth');
Route::get('/dashboard/blog/create', [BlogController::class, 'create'])->name('blog.create')->middleware('auth');
Route::post('/dashboard/blog/store', [BlogController::class, 'store'])->name('blog.store')->middleware('auth');
Route::get('/dashboard/blog/edit/{id}', [BlogController::class, 'edit'])->name('blog.edit')->middleware('auth');
Route::post('/dashboard/blog/update/{id}', [BlogController::class, 'update'])->name('blog.update')->middleware('auth');
Route::post('/dashboard/blog/destroy/{id}', [BlogController::class, 'destroy'])->name('blog.destroy')->middleware('auth');

require __DIR__ . '/auth.php';
