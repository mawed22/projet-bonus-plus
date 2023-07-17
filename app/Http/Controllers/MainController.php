<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class MainController extends Controller
{
    public function index()
    {
        return view('index');
    }
  
    public function about()
    {
        return view('about');
    }
  
    public function programs()
    {
        return view('programs');
    }
  
    public function detailsprograms()
    {
        return view('details-programs');
    }
  
    public function more()
    {
        return view('more');
    }
  
}
