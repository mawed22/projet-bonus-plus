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
                            <h1 class=" text-primary-bonus fw-bold"> <i>Programmes</i> </h1>
                        </div>
                    </div>
                </div>
                <div class="sous-menu text-white">
                    <a href="{{ route('index')}}" class="me-1 ">Accueil</a><i class=" fa fa-chevron-right "></i>
                    <a href="">Programmes</a>
                </div>
            </div>

        </div>
    </div>
    <!--=======End=====-->
</div>
        <main class="programme">
        <section class="">
            <div class="">
                <section class="banner-programme">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-10 text-center mx-auto mt-5">
                                <h1 class="text-white mt-5 fw-bold">
                                    Toutes les émissions web et de télévisions en illimitée !!!
                                </h1>
                                <h2 class="text-white mt-2 fw-bold">Toutes les émissions web et de télévisions en
                                    illimitée !!!</h2>
                                <h3 class="text-white mt-2 fw-bold">Déjà connecté ? Laissez votre mail.</h3>
                                <div class="text-center">
                                    <div class="mx-5 col-md-6 mx-auto">
                                        <form action="l" method="">
                                            <div class="input-group mb-3 mt-4">

                                                <input type="text" class="form-control" placeholder="Enter email"
                                                    aria-label="Recipient's username" aria-describedby="button-addon2">
                                                <button class="btn btn-secondary-bonus border-rad" type="submit"
                                                    id="button-addon2"><a href="{{ route('details-programs')}}" style="text-decoration: none">Commencer</a> </button>

                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <!--<div class="row">
                    <div class="col-md-3">
                        <div class="nous__content--block-1 my-3 nav flex-column nav-pills text-center">
                            <a href="face-aux-cameras.html" class="nav-link active btn btn-white-bonus btn-anis-effect-bonus w-100 text-center mb-2">
                                Face aux cameras
                            </a>
                            <a href="decouverte.html" class="nav-link btn btn-white-bonus btn-anis-effect-bonus w-100 text-center mb-2">
                                Bonus découverte
                            </a>
                            <a href="bonus-talk.html" class="nav-link btn btn-white-bonus btn-anis-effect-bonus w-100 text-center mb-2">
                                Bonus talk
                            </a>
                            <a href="bonus-info.html" class="nav-link btn btn-white-bonus btn-anis-effect-bonus w-100 text-center mb-2">
                                Bonus info
                            </a>
                            <a href="bon-a-savoir.html" class="nav-link btn btn-white-bonus btn-anis-effect-bonus w-100 text-center mb-2">
                                Bon à savoir
                            </a>
                            <a href="" class="nav-link btn btn-white-bonus btn-anis-effect-bonus w-100 text-center mb-2">
                                L'opinion
                            </a>
                            <a href="camera-cache.html" class="nav-link btn btn-white-bonus btn-anis-effect-bonus w-100 text-center mb-2">
                                Cameras cachées
                            </a>
                        </div>
                    </div>
                    <div class="col-md-9 text-center bg-white pb-3">
                        <div class="nous__content--block-2 mt-0 bg-light d-flex justify-content-center align-items-center">
                            <a href="http://"><img src="assets/images/logo-youtube-final.png" alt=""></a>
                        </div>
                    </div>
                    <div class="logo-nous">
                        <img src="assets/images/LOGOS_JASMINA-03.png" class="logo" alt="">
                    </div>
                </div>-->
            </div>
        </section>
    </main>
@endsection