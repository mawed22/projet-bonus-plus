<?php

use App\Http\Controllers\MainController;
use App\Http\Controllers\ArticleController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

// Route::get('/', function () {
//     return view('welcome');
// });

Route::get('/', [MainController::class, 'index'])->name('index');
Route::get('/a-propos', [MainController::class, 'about'])->name('about');
Route::get('/programmes', [MainController::class, 'programs'])->name('programs');
Route::get('/details-programmes', [MainController::class, 'detailsprograms'])->name('details-programs');
Route::get('/en-savoir-plus', [MainController::class, 'more'])->name('more');
Route::get('/inscription', [MainController::class, 'registration'])->name('login2');

Route::prefix('/article')->name('article.')->controller(ArticleController::class)->group(function () {
    Route::get('/','index')->name('index');
    
    Route::get('/{slug}-{post}', 'show')->where([
        'post' => '[0-9]+',
        'slug'  => '[a-z0-9\-]+'
    ])->name('show');
    
});


// Méthode fallback() en dernière position
Route::fallback(function() {
    return view('404'); // la vue 404.blade.php
 });