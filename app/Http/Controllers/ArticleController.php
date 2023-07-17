<?php

namespace App\Http\Controllers;

use Illuminate\Contracts\View\View;
use Illuminate\Http\RedirectResponse;
use App\Models\Article;
use Illuminate\Contracts\Pagination\Paginator;
use Illuminate\Http\Request;

class ArticleController extends Controller
{
    public function index (): View {
        
        return view('article.index', [
            'posts' => Article::paginate(1)
        ]);
     }
   
    public function show(string $slug, Article $post): RedirectResponse | View {
        
        if ($post->slug != $slug){
            return to_route('article.show', ['slug' => $post->slug, 'id' => $post->id]);
        }


        return view('article.show',[
            'post' => $post,
            'recentposts' => Article::where('id', '>', 0)->limit(3)->get()
        ]);
    }
}
