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
                            <h1 class=" text-primary-bonus fw-bold"> <i>A Propos de Bonus</i> </h1>
                        </div>
                    </div>
                </div>
                <div class="sous-menu text-white">
                    <a href="{{ route('index')}}" class="me-1 ">Accueil</a><i class=" fa fa-chevron-right "></i>
                    <a href="">A Propos de Bonus</a>
                </div>
            </div>

        </div>
    </div>
    <!--=======End=====-->
</div>
    
<main class="nous">
    <section class="nous__content bg-primary-bonus mt-3">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-3">
                    <div class="nous__content--block-1 my-3 nav flex-column nav-pills text-center" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        <button class="nav-link active btn btn-white-bonus btn-anis-effect-bonus w-100 text-center mb-2" id="v-pills-bonus-tab" data-bs-toggle="pill" data-bs-target="#v-pills-bonus" type="button" role="tab" aria-controls="v-pills-bonus" aria-selected="true">
                            Bonus
                        </button>
                        <button class="nav-link btn btn-white-bonus btn-anis-effect-bonus w-100 text-center mb-2" id="v-pills-equipe-tab" data-bs-toggle="pill" data-bs-target="#v-pills-equipe" type="button" role="tab" aria-controls="v-pills-equipe" aria-selected="false">
                            L'équipes
                        </button>
                        <button class="nav-link btn btn-white-bonus btn-anis-effect-bonus w-100 text-center mb-2" id="v-pills-collaboration-tab" data-bs-toggle="pill" data-bs-target="#v-pills-collaboration" type="button" role="tab" aria-controls="v-pills-collaboration" aria-selected="false">
                            Collaborations
                        </button>
                        <button class="nav-link btn btn-white-bonus btn-anis-effect-bonus w-100 text-center mb-2" id="v-pills-savoirFaire-tab" data-bs-toggle="pill" data-bs-target="#v-pills-savoirFaire" type="button" role="tab" aria-controls="v-pills-savoirFaire" aria-selected="false">
                            Galerie d’activités
                        </button>
                        <button class="nav-link btn btn-white-bonus btn-anis-effect-bonus w-100 text-center mb-2" id="v-pills-service-tab" data-bs-toggle="pill" data-bs-target="#v-pills-service" type="button" role="tab" aria-controls="v-pills-service" aria-selected="false">
                            Services
                        </button>
                    </div>
                </div>
                <div class="col-md-9 text-center bg-white pb-3">
                    <div class="nous__content--block-2 mt-0">
                        <div class="tab-content" id="v-pills-tabContent">
                            <div class="tab-pane fade show active" id="v-pills-bonus" role="tabpanel" aria-labelledby="v-pills-bonus-tab" tabindex="0">
                                <div class="">
                                    <div class="nous__content--block-2--bonus py-2">
                                        <div class="container">
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <article class="postcard dark blue">
                                                        <a class="postcard__img_link" href="#">
                                                            <img class="postcard__img" src="assets/images/logo_bonus_media_final-03-copie.png" alt="Image Title" class="" />
                                                        </a>
                                                        <div class="postcard__text">
                                                            <h1 class="postcard__title text-white"><a href="#">Title document</a></h1>
                                                            <div class="postcard__subtitle small">
                                                                <time datetime="2020-05-25 12:00:00">
                                                                    <i class="fas fa-calendar-alt mr-2"></i>Mon, May 25th 2020
                                                                </time>
                                                            </div>
                                                            <div class="postcard__bar"></div>
                                                            <div class="postcard__preview-txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
                                                                fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius! Ducimus
                                                                nemo accusantium maiores velit corrupti tempora reiciendis molestiae repellat vero. Eveniet ipsam
                                                                adipisci illo iusto quibusdam, sunt neque nulla unde ipsum dolores nobis enim quidem excepturi,
                                                                illum quos!</div>
                                                            <!--<ul class="postcard__tagbox">
                                                                <li class="tag__item"><i class="fas fa-tag mr-2"></i>Podcast</li>
                                                                <li class="tag__item"><i class="fas fa-clock mr-2"></i>55 mins.</li>
                                                                <li class="tag__item play blue">
                                                                    <a href="#"><i class="fas fa-play mr-2"></i>Play Episode</a>
                                                                </li>
                                                            </ul>-->
                                                        </div>
                                                    </article>
                                                    
                                                    <article class="postcard dark red">
                                                        <a class="postcard__img_link" href="#">
                                                            <img class="postcard__img" src="assets/images/logo_bonus_media_final-03-copie.png" alt="Image Title" />
                                                        </a>
                                                        <div class="postcard__text">
                                                            <h1 class="postcard__title  text-white"><a href="#"> Title document</a></h1>
                                                            <div class="postcard__subtitle small">
                                                                <time datetime="2020-05-25 12:00:00">
                                                                    <i class="fas fa-calendar-alt mr-2"></i>Mon, May 25th 2020
                                                                </time>
                                                            </div>
                                                            <div class="postcard__bar"></div>
                                                            <div class="postcard__preview-txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
                                                                fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius! Ducimus
                                                                nemo accusantium maiores velit corrupti tempora reiciendis molestiae repellat vero. Eveniet ipsam
                                                                adipisci illo iusto quibusdam, sunt neque nulla unde ipsum dolores nobis enim quidem excepturi,
                                                                illum quos!</div>
                                                        </div>
                                                    </article>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade equipe" id="v-pills-equipe" role="tabpanel" aria-labelledby="v-pills-equipe-tab" tabindex="0">
                                <div class="row p-3 ">
                                    <div class="col-md-6 col-12 px-3">
                                        <div class="row  bg-light py-1 rounded-3">
                                            <div class="col-md-4">
                                                <div class="card equipe__content-1">
                                                    <div class="profil">
                                                        <img src="assets/images/rolly.jpeg" alt="" height="100%" class="w-100">
                                                    </div>
                                                    <div class="card-body p-1">
                                                        <p class=" text-secondary-bonus mb-1 size-12"> <small>Seignou Rolly Anyce</small> </p>
                                                        <b><p class=" text-primary-bonus mb-0 size-15"> <small>Developpeur d'application web</small> </p></b>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-8 mx-auto">
                                                <p class=" text-dark text-justify ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis eleifend quam adipiscing vitae. Lorem ipsum dolor sit amet, consectetur
                                                    adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-12 px-3">
                                        <div class="row  bg-light py-1 rounded-3">
                                            <div class="col-md-4">
                                                <div class="card equipe__content-1">
                                                    <div class="profil">
                                                        <img src="assets/images/rolly.jpeg" alt="" height="100%" class="w-100">
                                                    </div>
                                                    <div class="card-body p-1">
                                                        <p class=" text-secondary-bonus mb-1 size-12"> <small>Seignou Rolly Anyce</small> </p>
                                                        <b><p class=" text-primary-bonus mb-0 size-15"> <small>Developpeur d'application web</small> </p></b>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-8 mx-auto">
                                                <p class=" text-dark text-justify ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis eleifend quam adipiscing vitae. Lorem ipsum dolor sit amet, consectetur
                                                    adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr class="line-equipe">
                                <div class="row p-3 ">
                                    <div class="col-md-6 px-3">
                                        <div class="row  bg-light py-1 rounded-3">
                                            <div class="col-md-4">
                                                <div class="card equipe__content-1">
                                                    <div class="profil">
                                                        <img src="assets/images/rolly.jpeg" alt="" height="100%" class="w-100">
                                                    </div>
                                                    <div class="card-body p-1">
                                                        <p class=" text-secondary-bonus mb-1 size-12"> <small>Seignou Rolly Anyce</small> </p>
                                                        <b><p class=" text-primary-bonus mb-0 size-15"> <small>Developpeur d'application web</small> </p></b>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-8 mx-auto">
                                                <p class=" text-dark text-justify ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis eleifend quam adipiscing vitae. Lorem ipsum dolor sit amet, consectetur
                                                    adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6 px-3">
                                        <div class="row  bg-light py-1 rounded-3">
                                            <div class="col-md-4">
                                                <div class="card equipe__content-1">
                                                    <div class="profil">
                                                        <img src="assets/images/rolly.jpeg" alt="" height="100%" class="w-100">
                                                    </div>
                                                    <div class="card-body p-1">
                                                        <p class=" text-secondary-bonus mb-1 size-12"> <small>Seignou Rolly Anyce</small> </p>
                                                        <b><p class=" text-primary-bonus mb-0 size-15"> <small>Developpeur d'application web</small> </p></b>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-8 mx-auto">
                                                <p class=" text-dark text-justify ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis eleifend quam adipiscing vitae. Lorem ipsum dolor sit amet, consectetur
                                                    adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr class="line-equipe">
                                <div class="row p-3 ">
                                    <div class="col-md-6 px-3">
                                        <div class="row  bg-light py-1 rounded-3">
                                            <div class="col-md-4">
                                                <div class="card equipe__content-1">
                                                    <div class="profil">
                                                        <img src="assets/images/rolly.jpeg" alt="" height="100%" class="w-100">
                                                    </div>
                                                    <div class="card-body p-1">
                                                        <p class=" text-secondary-bonus mb-1 size-12"> <small>Seignou Rolly Anyce</small> </p>
                                                        <b><p class=" text-primary-bonus mb-0 size-15"> <small>Developpeur d'application web</small> </p></b>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-8 mx-auto">
                                                <p class=" text-dark text-justify ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis eleifend quam adipiscing vitae. Lorem ipsum dolor sit amet, consectetur
                                                    adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6 px-3">
                                        <div class="row  bg-light py-1 rounded-3">
                                            <div class="col-md-4">
                                                <div class="card equipe__content-1">
                                                    <div class="profil">
                                                        <img src="assets/images/rolly.jpeg" alt="" height="100%" class="w-100">
                                                    </div>
                                                    <div class="card-body p-1">
                                                        <p class=" text-secondary-bonus mb-1 size-12"> <small>Seignou Rolly Anyce</small> </p>
                                                        <b><p class=" text-primary-bonus mb-0 size-15"> <small>Developpeur d'application web</small> </p></b>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-8 mx-auto">
                                                <p class=" text-dark text-justify ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis eleifend quam adipiscing vitae. Lorem ipsum dolor sit amet, consectetur
                                                    adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr class="line-equipe">
                                <div class="row p-3 ">
                                    <div class="col-md-6 px-3">
                                        <div class="row  bg-light py-1 rounded-3">
                                            <div class="col-md-4">
                                                <div class="card equipe__content-1">
                                                    <div class="profil">
                                                        <img src="assets/images/rolly.jpeg" alt="" height="100%" class="w-100">
                                                    </div>
                                                    <div class="card-body p-1">
                                                        <p class=" text-secondary-bonus mb-1 size-12"> <small>Seignou Rolly Anyce</small> </p>
                                                        <b><p class=" text-primary-bonus mb-0 size-15"> <small>Developpeur d'application web</small> </p></b>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-8 mx-auto">
                                                <p class=" text-dark text-justify ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis eleifend quam adipiscing vitae. Lorem ipsum dolor sit amet, consectetur
                                                    adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6 px-3">
                                        <div class="row  bg-light py-1 rounded-3">
                                            <div class="col-md-4">
                                                <div class="card equipe__content-1">
                                                    <div class="profil">
                                                        <img src="assets/images/rolly.jpeg" alt="" height="100%" class="w-100">
                                                    </div>
                                                    <div class="card-body p-1">
                                                        <p class=" text-secondary-bonus mb-1 size-12"> <small>Seignou Rolly Anyce</small> </p>
                                                        <b><p class=" text-primary-bonus mb-0 size-15"> <small>Developpeur d'application web</small> </p></b>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-8 mx-auto">
                                                <p class=" text-dark text-justify ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis eleifend quam adipiscing vitae. Lorem ipsum dolor sit amet, consectetur
                                                    adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr class="line-equipe">
                            </div>
                            <div class="tab-pane fade" id="v-pills-collaboration" role="tabpanel" aria-labelledby="v-pills-collaboration-tab" tabindex="0">
                                <div class="row p-3 ">
                                    <div class="col-md-3 col-12 mb-2 px-3">
                                        <div class="">
                                            <div class="">
                                                <div class="card equipe__content-1">
                                                    <div class="profil">
                                                        <img src="assets/images/rolly.jpeg" alt="" height="100%" class="w-100">
                                                    </div>
                                                    <div class="card-body p-1">
                                                        <p class=" text-secondary-bonus mb-1 size-12"> <small>Seignou Rolly Anyce</small> </p>
                                                        <b><p class=" text-primary-bonus mb-0 size-15"> <small>Developpeur d'application web</small> </p></b>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-3 col-12 mb-2 px-3">
                                        <div class="">
                                            <div class="">
                                                <div class="card equipe__content-1">
                                                    <div class="profil">
                                                        <img src="assets/images/rolly.jpeg" alt="" height="100%" class="w-100">
                                                    </div>
                                                    <div class="card-body p-1">
                                                        <p class=" text-secondary-bonus mb-1 size-12"> <small>Seignou Rolly Anyce</small> </p>
                                                        <b><p class=" text-primary-bonus mb-0 size-15"> <small>Developpeur d'application web</small> </p></b>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-3 col-12 mb-2 px-3">
                                        <div class="">
                                            <div class="">
                                                <div class="card equipe__content-1">
                                                    <div class="profil">
                                                        <img src="assets/images/rolly.jpeg" alt="" height="100%" class="w-100">
                                                    </div>
                                                    <div class="card-body p-1">
                                                        <p class=" text-secondary-bonus mb-1 size-12"> <small>Seignou Rolly Anyce</small> </p>
                                                        <b><p class=" text-primary-bonus mb-0 size-15"> <small>Developpeur d'application web</small> </p></b>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-3 col-12 mb-2 px-3">
                                        <div class="">
                                            <div class="">
                                                <div class="card equipe__content-1">
                                                    <div class="profil">
                                                        <img src="assets/images/rolly.jpeg" alt="" height="100%" class="w-100">
                                                    </div>
                                                    <div class="card-body p-1">
                                                        <p class=" text-secondary-bonus mb-1 size-12"> <small>Seignou Rolly Anyce</small> </p>
                                                        <b><p class=" text-primary-bonus mb-0 size-15"> <small>Developpeur d'application web</small> </p></b>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-3 col-12 mb-2 px-3">
                                        <div class="">
                                            <div class="">
                                                <div class="card equipe__content-1">
                                                    <div class="profil">
                                                        <img src="assets/images/rolly.jpeg" alt="" height="100%" class="w-100">
                                                    </div>
                                                    <div class="card-body p-1">
                                                        <p class=" text-secondary-bonus mb-1 size-12"> <small>Seignou Rolly Anyce</small> </p>
                                                        <b><p class=" text-primary-bonus mb-0 size-15"> <small>Developpeur d'application web</small> </p></b>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-3 col-12 mb-2 px-3">
                                        <div class="">
                                            <div class="">
                                                <div class="card equipe__content-1">
                                                    <div class="profil">
                                                        <img src="assets/images/rolly.jpeg" alt="" height="100%" class="w-100">
                                                    </div>
                                                    <div class="card-body p-1">
                                                        <p class=" text-secondary-bonus mb-1 size-12"> <small>Seignou Rolly Anyce</small> </p>
                                                        <b><p class=" text-primary-bonus mb-0 size-15"> <small>Developpeur d'application web</small> </p></b>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-3 col-12 mb-2 px-3">
                                        <div class="">
                                            <div class="">
                                                <div class="card equipe__content-1">
                                                    <div class="profil">
                                                        <img src="assets/images/rolly.jpeg" alt="" height="100%" class="w-100">
                                                    </div>
                                                    <div class="card-body p-1">
                                                        <p class=" text-secondary-bonus mb-1 size-12"> <small>Seignou Rolly Anyce</small> </p>
                                                        <b><p class=" text-primary-bonus mb-0 size-15"> <small>Developpeur d'application web</small> </p></b>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-3 col-12 mb-2 px-3">
                                        <div class="">
                                            <div class="">
                                                <div class="card equipe__content-1">
                                                    <div class="profil">
                                                        <img src="assets/images/rolly.jpeg" alt="" height="100%" class="w-100">
                                                    </div>
                                                    <div class="card-body p-1">
                                                        <p class=" text-secondary-bonus mb-1 size-12"> <small>Seignou Rolly Anyce</small> </p>
                                                        <b><p class=" text-primary-bonus mb-0 size-15"> <small>Developpeur d'application web</small> </p></b>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>
                            <div class="tab-pane fade" id="v-pills-savoirFaire" role="tabpanel" aria-labelledby="v-pills-savoirFaire-tab" tabindex="0">
                                <p class=" text-dark">Galerie d’activités</p>
                            </div>
                            <div class="tab-pane fade" id="v-pills-service" role="tabpanel" aria-labelledby="v-pills-service-tab" tabindex="0">
                                <div class="container bg-dark">
                                    <div class="row">
                                        <div class="col-md-12 col-12">
                                                
                                            <video width="440" height="341" controls class="video-display-mobile">
                                        
                                                <source src="assets/video/kila_m_bongo_konami_h264_30588.mp4" type="video/mp4">
                                        
                                                Download the
                                                <a href="assets/video/kila_m_bongo_konami_h264_30588.mp4">WEBM</a>
                                                or
                                                <a href="assets/video/kila_m_bongo_konami_h264_30588.mp4">MP4</a>
                                                video.
                                            </video>
                                        </div>
                                    </div>
                                </div>
                                <!--Start slide magazine -->
                                <section class="container categories my-3">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="categories__slider owl-carousel">
                                                <div class="col-lg-3">
                                                    <div class="product-wrapper text-center">
                                                        <div class="product-img">
                                                            <a href="datail-en-savoir-plus-nous.html" data-abc="true">
                                                                <img src="assets/images/work-1.jpg" alt="" class="w-100">
                                                            </a>
                                                            <span class="text-center">
                                                                ALIMENTATION - AGROALIMENTAIRE
                                                            </span>
                                                            <div class="product-action bg-secondary-bonus">
                                                                <div class="product-action-style">
                                                                    <a href="datail-en-savoir-plus-nous.html" class=" d-flex justify-content-center align-items-center">
                                                                        <span class="font-size-18 text-primary-bonus bg-white rounded-pill p-1">En savoir plus</span>
                                                                        <i class="fa fa-chevron-right text-primary-bonus font-size-30"></i>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-lg-3">
                                                    <div class="product-wrapper text-center">
                                                        <div class="product-img">
                                                            <a href="datail-en-savoir-plus-nous.html" data-abc="true">
                                                                <img src="assets/images/work-1.jpg" alt="" class="w-100">
                                                            </a>
                                                            <span class="text-center">
                                                                    LOCATION ESPACE PUBLICITAIRE
                                                            </span>
                                                            <div class="product-action bg-secondary-bonus">
                                                                <div class="product-action-style">
                                                                    <a href="datail-en-savoir-plus-nous.html" class=" d-flex justify-content-center align-items-center">
                                                                        <span class="font-size-18 text-primary-bonus bg-white rounded-pill p-1">En savoir plus</span>
                                                                        <i class="fa fa-chevron-right text-primary-bonus font-size-30"></i>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-lg-3">
                                                    <div class="product-wrapper text-center">
                                                        <div class="product-img">
                                                            <a href="datail-en-savoir-plus-nous.html" data-abc="true">
                                                                <img src="assets/images/work-1.jpg" alt="" class="w-100">
                                                            </a>
                                                            <span class="text-center">
                                                               GESTION GRAPHIQUE DES ESPACES
                                                            </span>
                                                            <div class="product-action bg-secondary-bonus">
                                                                <div class="product-action-style">
                                                                    <a href="datail-en-savoir-plus-nous.html" class=" d-flex justify-content-center align-items-center">
                                                                        <span class="font-size-18 text-primary-bonus bg-white rounded-pill p-1">En savoir plus</span>
                                                                        <i class="fa fa-chevron-right text-primary-bonus font-size-30"></i>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-lg-3">
                                                    <div class="product-wrapper text-center">
                                                        <div class="product-img">
                                                            <a href="datail-en-savoir-plus-nous.html" data-abc="true">
                                                                <img src="assets/images/work-1.jpg" alt="" class="w-100">
                                                            </a>
                                                            <span class="text-center">
                                                                GESTION DES PROJETS DE CANDIDATURE
                                                            </span>
                                                            <div class="product-action bg-secondary-bonus">
                                                                <div class="product-action-style">
                                                                    <a href="datail-en-savoir-plus-nous.html" class=" d-flex justify-content-center align-items-center">
                                                                        <span class="font-size-18 text-primary-bonus bg-white rounded-pill p-1">En savoir plus</span>
                                                                        <i class="fa fa-chevron-right text-primary-bonus font-size-30"></i>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-lg-3">
                                                    <div class="product-wrapper text-center">
                                                        <div class="product-img">
                                                            <a href="datail-en-savoir-plus-nous.html" data-abc="true">
                                                                <img src="assets/images/work-1.jpg" alt="" class="w-100">
                                                            </a>
                                                            <span class="text-center">
                                                                ALIMENTATION - AGROALIMENTAIRE
                                                            </span>
                                                            <div class="product-action bg-secondary-bonus">
                                                                <div class="product-action-style">
                                                                    <a href="datail-en-savoir-plus-nous.html" class=" d-flex justify-content-center align-items-center">
                                                                        <span class="font-size-18 text-primary-bonus bg-white rounded-pill p-1">En savoir plus</span>
                                                                        <i class="fa fa-chevron-right text-primary-bonus font-size-30"></i>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-lg-3">
                                                    <div class="product-wrapper text-center">
                                                        <div class="product-img">
                                                            <a href="datail-en-savoir-plus-nous.html" data-abc="true">
                                                                <img src="assets/images/work-1.jpg" alt="" class="w-100">
                                                            </a>
                                                            <span class="text-center">
                                                                ALIMENTATION - AGROALIMENTAIRE
                                                            </span>
                                                            <div class="product-action bg-secondary-bonus">
                                                                <div class="product-action-style">
                                                                    <a href="datail-en-savoir-plus-nous.html" class=" d-flex justify-content-center align-items-center">
                                                                        <span class="font-size-18 text-primary-bonus bg-white rounded-pill p-1">En savoir plus</span>
                                                                        <i class="fa fa-chevron-right text-primary-bonus font-size-30"></i>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <!--End Js Plugins -->

                            </div>
                        </div>
                    </div>
                </div>
                <div class="logo-nous">
                    <img src="assets/images/LOGOS_JASMINA-03.png" class="logo" alt="">
                </div>
            </div>
        </div>
    </section>
</main>
@endsection