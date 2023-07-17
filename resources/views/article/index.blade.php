@extends('base')

@section('content')

<div class="bg-secondary-bonus">
    <!--======= Top =====-->
    <div class="face-camera-top profil-competence">
        <div class="bg-secondary-bonus">
            <div class="container-fluid">
                <div class="row py-2 pb-4">
                    <div class="col-md-3 my-1">
                        <div class=" bg-primary-bonus zone-1 height-80 p-3 text-center">
                            <a href=""><img src="assets/images/LOGOS_JASMINA-02.png" alt="" class="logo"></a>
                        </div>
                    </div>
                    <div class="col-md-9 my-1">
                        <div class=" bg-white height-80 zone-2 p-3">
                            <h1 class=" text-primary-bonus fw-bold"> <i>Blog</i> </h1>
                        </div>
                    </div>
                </div>
                <div class="sous-menu text-white">
                    <a href="{{ route('index')}}" class="me-1 ">Accueil</a><i class=" fa fa-chevron-right "></i>
                    <a href="">Blog</a>
                </div>
            </div>

        </div>
    </div>
    <!--=======End=====-->
</div>
<main class="profil-competence">
    <section class="camera-cache__content">

        <div class="container mt-1 mb-5">
            <div class="row">
                 @foreach ($posts as $post )
                <div class="col-4 mt-5">
                    <div class="card">
                        <img src="assets/images/articles.png" class="card-img-top" alt="article_bonus">
                        <div class="card-body">
                            <h4 class="card-title">{{$post->title}}</h4>
                            <p class="card-text">{{$post->subtitle}}</p>
                            <a href="{{ route('article.show', ['slug' => $post->slug, 'post' => $post->id])}}" class="btn btn-primary" style="background-color: #e67e0f; color: #fff">Lire
                                plus <i class="fas fa-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
                @endforeach 
            </div>
            <div class="d-flex justify-content-center mt-5">
              {{ $posts ->links() }}
            </div> 
        </div>

    </section>
</main>
@endsection