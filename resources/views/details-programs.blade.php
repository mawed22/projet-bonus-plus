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
                            <h1 class=" text-primary-bonus fw-bold"> <i>Liste des programmes</i> </h1>
                        </div>
                    </div>
                </div>
                <div class="sous-menu text-white">
                    <a href="{{ route('index')}}" class="me-1 ">Accueil</a><i class=" fa fa-chevron-right "></i>
                    <a href="">Programme</a>
                </div>
            </div>

        </div>
    </div>
    <!--=======End=====-->
</div>

<main class="detail-programme">
    <div class="container mt-4">
        <div class="wrap my-3">
            <form action="">
                <div class="search">
                    <input type="text" class="searchTerm" placeholder="Rechercher ...">
                    <button type="submit" class="searchButton" title="submit">
                        <i class="fa fa-search"></i>
                    </button>
                </div>
            </form>
        </div>
    </div>
    <div class="site-section bg-left-half mb-5">
        <div class="container owl-2-style">
    
            <h1 class="text-primary-bonus fw-bold py-5 ">Nos programmes</h1>
    
    
            <div class="owl-carousel owl-2">
                <div class="media-29101">
                    <div class="card profile-card-1">
                        <img src="assets/images/rolly-4x4.jpeg" alt="profile-sample1" class="background" />
                        <div class="card-content">
                            <h2>Programme sur<small>Bonus media</small></h3>
                                <div class="icon-block"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"> <i
                                            class="fa fa-twitter"></i></a><a href="#"> <i class="fa fa-whatsapp"></i></a>
                                </div>
                        </div>
                    </div>
                </div>
                <div class="media-29101">
                    <div class="card profile-card-1">
                        <img src="assets/images/rolly-4x4.jpeg" alt="profile-sample1" class="background" />
                        <div class="card-content">
                            <h2>Programme sur<small>Bonus media</small></h3>
                                <div class="icon-block"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"> <i
                                            class="fa fa-twitter"></i></a><a href="#"> <i class="fa fa-whatsapp"></i></a>
                                </div>
                        </div>
                    </div>
                </div>
                <div class="media-29101">
                    <div class="card profile-card-1">
                        <img src="assets/images/work-1.jpg" alt="profile-sample1" class="background" />
                        <div class="card-content">
                            <h2>Programme sur<small>Bonus media</small></h3>
                                <div class="icon-block"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"> <i
                                            class="fa fa-twitter"></i></a><a href="#"> <i class="fa fa-whatsapp"></i></a>
                                </div>
                        </div>
                    </div>
                </div>
                <div class="media-29101">
                    <div class="card profile-card-1">
                        <img src="assets/images/rolly-4x4.jpeg" alt="profile-sample1" class="background" />
                        <div class="card-content">
                            <h2>Programme sur<small>Bonus media</small></h3>
                                <div class="icon-block"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"> <i
                                            class="fa fa-twitter"></i></a><a href="#"> <i class="fa fa-whatsapp"></i></a>
                                </div>
                        </div>
                    </div>
                </div>
                <div class="media-29101">
                    <div class="card profile-card-1">
                        <img src="assets/images/work-1.jpg" alt="profile-sample1" class="background" />
                        <div class="card-content">
                            <h2>Programme sur<small>Bonus media</small></h3>
                                <div class="icon-block">
                                    <a href="#"><i class="fa fa-facebook text-primary-bonus"></i></a>
                                    <a href="#"> <i class="fa fa-twitter"></i></a>
                                    <a href="#"> <i class="fa fa-whatsapp"></i></a>
                                </div>
                        </div>
                    </div>
                </div>
                <div class="media-29101">
                    <div class="card profile-card-1">
                        <img src="assets/images/work-1.jpg" alt="profile-sample1" class="background" />
                        <div class="card-content">
                            <h2>Programme sur<small>Bonus media</small></h3>
                                <div class="icon-block"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"> <i
                                            class="fa fa-twitter"></i></a><a href="#"> <i class="fa fa-whatsapp"></i></a>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
    
        </div>
    </div>
    <div class="site-section bg-left-half mb-5">
        <div class="container owl-2-style">
    
            <h1 class="text-primary-bonus fw-bold py-5 ">Nos Présentateurs</h1>
    
    
            <div class="owl-carousel owl-2">
                <div class="media-29101">
                    <a href="#"><img src="assets/images/rolly-4x4.jpeg" alt="Image" class="img-fluid"></a>
                    <h3><a href="#">Presentateur-1</a></h3>
                </div>
                <div class="media-29101">
                    <a href="#"><img src="assets/images/rolly-4x4.jpeg" alt="Image" class="img-fluid"></a>
                    <h3><a href="#">Presentateur-2</a></h3>
                </div>
                <div class="media-29101">
                    <a href="#"><img src="assets/images/rolly-4x4.jpeg" alt="Image" class="img-fluid"></a>
                    <h3><a href="#">Presentateur-3</a></h3>
                </div>
                <div class="media-29101">
                    <a href="#"><img src="assets/images/rolly-4x4.jpeg" alt="Image" class="img-fluid"></a>
                    <h3><a href="#">Presentateur-4</a></h3>
                </div>
                <div class="media-29101">
                    <a href="#"><img src="assets/images/rolly-4x4.jpeg" alt="Image" class="img-fluid"></a>
                    <h3><a href="#">Presentateur-5</a></h3>
                </div>
                <div class="media-29101">
                    <a href="#"><img src="assets/images/rolly-4x4.jpeg" alt="Image" class="img-fluid"></a>
                    <h3><a href="#">Presentateur-6</a></h3>
                </div>
            </div>
    
        </div>
    </div>
</main>
@endsection