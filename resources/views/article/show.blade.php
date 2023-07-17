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
                    <a href="{{ route('article.index')}}">Blog</a>
                </div>
            </div>

        </div>
    </div>
    <!--=======End=====-->
</div>
<main class="profil-competence">
    <section class="camera-cache__content">
        <div class="container-fluid mt-3">
            <div class="row ">
                <div class="col-md-3 bg-primary-bonus border-primary-light h-100">
                    <h3 class="mb-4">Our Newsletter</h3>
                    <form class="form-newsletter">
                        <div class="mb-3"> 
                            <input type="text" name="name" placeholder="Noms & Prénoms" class="form-control" required="required"> 
                        </div>
                        <div class="mb-3"> 
                            <input type="text" name="email" placeholder="Email" class="form-control" required="required">
                            
                        </div>
                        <div class="mb-3"> 
                            <input type="text" name="phone" placeholder="phone" class="form-control" required="required">
                            
                        </div> 
                        <button type="submit" class="btn btn-secondary-bonus btn-sm mb-2 w-100 rounded-pill" title="button">Envoyer</button>
                    </form>
                </div>
                <div class="col-md-6">
                    <!--div class="">
                        <h3 class=" fw-bold">Chapeau de l’article</h3>
                    </div-->
                    
                    <div class="blog-container">
                    
                        <div class="blog-header">
                            <div class="blog-cover" style="background     : url(../assets/images/articles.png)">
                            </div>
                        </div>
                    
                        <div class="blog-body">
                            <div class="blog-title">
                                <h4><a href="#">{{ $post->title }}</a></h4>
                            </div>
                            <div class="blog-summary">
                                <p>{{ $post->content }} </p>
                            </div>
                            <div class="blog-tags d-flex justify-content-between">
                                <p class="text-gray"><span> <small>Publier le {{ $post->created_at}}</small> </span> <span> <small>Par Le Writter</small> </span></p>
                                <h6 class=""><span class=" text-primary-bonus fw-bold"> <small>Patager avec</small> </span> 
                                    <span class="ms-4"><i class="fa fa-whatsapp text-success"></i></span>
                                    <span class="ms-4"><i class="fa fa-facebook text-primary-bonus"></i></span>
                                    <span class="ms-4"><i class="fa  fa-telegram text-success"></i></span>
                                </h6>
                            </div>
                        </div>
                    
                        <div class="blog-footer">
                            <ul class="mt-1">
                                <li class="published-date">2 days ago</li>
                                <li class="comments text-secondary-bonus">
                                    <i class="fa fa-comments fa fa-2x"></i><span class="numero">2</span>
                                </li>
                            </ul>
                        </div>
                    
                    </div>

                    <div class="blog-container">
                        <div class="blog-title mb-3">
                            <h2 class="">Commentaires</h2>
                        </div>
                        <div class="mb-3">
                            <div class="d-flex">
                                <div class="flex-shrink-0">
                                    <img class="profil-user-comments" src="../assets/images/images-homme.png" alt="Generic placeholder image">
                                </div>
                                <div class="flex-grow-1 ms-3">
                                    <h6>Rolly anyce</h6>
                                </div>
                            </div>
                            <div class="blog-body">
                                <div class="blog-summary">
                                    <p>Here is an example of a post without a cover image. You don't always have to have a cover image. In fact,
                                        leaving them out from time to time and disrupt the predictive flow and make the overall design more
                                        interesting. Something to think about.</p>
                                </div>
                            </div> 
                        </div>
                        <div class="mb-3">
                            <div class="d-flex">
                                <div class="flex-shrink-0">
                                    <img class="profil-user-comments" src="../assets/images/images.png" alt="Generic placeholder image">
                                </div>
                                <div class="flex-grow-1 ms-3">
                                    <h6>Jasmine</h6>
                                </div>
                            </div>
                            <div class="blog-body">
                                <div class="blog-summary">
                                    <p>Here is an example of a post without a cover image. You don't always have to have a cover image. In fact,
                                        leaving them out from time to time and disrupt the predictive flow and make the overall design more
                                        interesting. Something to think about.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!--======== Form comments=======-->
                    <div class="">
                        <div class="bg-white">
                            <form action="" method="post">
                                <textarea class=" px-2 outline-none resize-none border rounded-lg placeholder:text-sm w-100"
                                    placeholder="Saisir ici"></textarea>
                                
                                <div class="text-end mt-2">
                                    <button type="submit" title="button" class="btn btn-secondary-bonus btn-sm">Ajouter</button>
                                </div>
                            </form>
                        </div>
                    </div><br>
                    <!--======== Form comments=======-->
                    
                </div>
                <div class="col-md-3 top-blog">
                    <h2><i class="fa fa-angle-right me-2 fw-bold text-primary-bonus"></i>Articles Récents</h2>
                
                    @foreach ( $recentposts as $recentpost )
                        <div class="cards-wrapper mb-2">
                            <div class="card-grid-space">
                                <a class="card" href={{ route('article.show', ['slug' => $recentpost->slug, 'post' => $recentpost->id])}} style="background-image:linear-gradient(rgba(6, 3, 21, 0.5), rgba(6, 3, 21, 0.5)), url(../assets/images/articles.png);background-size: cover;background-repeat: no-repeat;">
                                    <div>
                                        <h2>{{ $recentpost->title }}</h2>
                                        <p style="color: #fff;">{{ $recentpost->subtitle }}</p>
                                        <div class="date">{{ $recentpost->created_at}}</div>
                                        <div class="tags">
                                            <div class="tag btn-sm btn-secondary-bonus btn">Lire Plus</div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    @endforeach

                </div>
            </div>
        </div>
    </section>
</main>
    <!--======= Top Blog=====-->
    <div class="blog-top">
        <div class="w">
            <div class="">
                <div class="">
                    <div class="">
                        <div class=" radius-15 text-center">
                            <img src="../assets/images/banniere-pub.gif" alt="" class="w-100">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--=======End Top Blog=====-->
@endsection