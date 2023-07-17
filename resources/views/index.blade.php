
@extends('base')

@section('content')
     
<!-- Start Main content  -->
<main class="accueil">
    <!--=== Start Block slider ===-->
    <section class="accueil__section-slider">
        <div class="container-fluid">
            <div class="row">
                <div class="accueil__section-slider--block-1 col-md-2 d-flex align-items-center">
                    <a href="#" class="">
                        <div class="">
                            <h2 class=" text-center text-white title-typed"></h2>
                        </div>
                    </a>
                </div>
                <div class="col-md-10 block-slider text-center bg-white">
                    <div class="accueil__section-slider--block-2 ">
                        <!--Swiper-->
                        <div class="swiper-container swiper-slider hero " data-loop="true" data-autoplay="5500"
                            data-dragable="false">
                            <div class="swiper-wrapper text-center">
                                <div class="swiper-slide" data-slide-bg="assets/images/banner-test.jpg"
                                    data-preview-bg="assets/images/banner-test.jpg">
                                    <div class="swiper-caption swiper-parallax" data-speed="0.5" data-fade="true">
                                        <div class="swiper-slide-caption">
                                            <div class="container">
                                                <div class="row justify-content-xl-center">
                                                    <div class="col-xl-12">
                                                        <h4 class="text-extra-big text-white font-weight-bold font-italic text-uppercase"
                                                            data-caption-animate="fadeInUp" data-caption-delay="300">
                                                            Titre principal
                                                        </h4>
                                                    </div>
                                                    <div class="col-xl-8 offset-top-10">
                                                        <h5 class="hidden d-sm-block text-primary text-white"
                                                            data-caption-animate="fadeInUp" data-caption-delay="500">
                                                            texte de description
                                                        </h5>
                                                        <!--
                                                            <div class="mt-4">
                                                                <a href="contact.html" class="btn btn-danger btn-anis-effect" data-waypoint-to="#welcome" data-caption-animate="fadeInUp" data-caption-delay="800">
                                                                    <span class="btn-text">Nous-contactez</span>
                                                                </a>
                                                            </div>-->
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide" data-slide-bg="assets/images/banner.png"
                                    data-preview-bg="assets/images/baniere.png">
                                    <div class="swiper-caption swiper-parallax" data-speed="0.5" data-fade="true">
                                        <div class="swiper-slide-caption">
                                            <div class="container">
                                                <div class="row justify-content-xl-center">
                                                    <div class="col-xl-12">
                                                        <h4 class="text-extra-big font-weight-bold font-italic text-uppercase"
                                                            data-caption-animate="fadeInUp" data-caption-delay="300">
                                                            slide 1
                                                        </h4>
                                                    </div>
                                                    <div class="col-xl-8 offset-top-10">
                                                        <h5 class="hidden d-sm-block text-light"
                                                            data-caption-animate="fadeInUp" data-caption-delay="500">
                                                            texte de description
                                                        </h5>
                                                        <!--<div class="offset-top-20 offset-sm-top-50"><a href="contact.html" class="btn btn-danger btn-anis-effect" data-waypoint-to="#welcome" data-caption-animate="fadeInUp" data-caption-delay="800"><span class="btn-text">Contactez-nous</span></a></div>-->
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide" data-slide-bg="assets/images/baniere.png"
                                    data-preview-bg="assets/images/baniere.png">
                                    <div class="swiper-caption swiper-parallax" data-speed="0.5" data-fade="true">
                                        <div class="swiper-slide-caption">
                                            <div class="container">
                                                <div class="row justify-content-xl-center">
                                                    <div class="col-xl-12">
                                                        <h4 class="text-extra-big font-weight-bold font-italic text-uppercase"
                                                            data-caption-animate="fadeInUp" data-caption-delay="300">
                                                            Slide 2
                                                        </h4>
                                                    </div>
                                                    <div class="col-xl-8 offset-top-10">
                                                        <h5 class="hidden d-sm-block text-primary text-white"
                                                            data-caption-animate="fadeInUp" data-caption-delay="500">
                                                            texte de description</h5>
                                                        <!--<div class="offset-top-20 offset-sm-top-50"><a href="contact.html" class="btn btn-danger btn-anis-effect" data-waypoint-to="#welcome" data-caption-animate="fadeInUp" data-caption-delay="800"><span class="btn-text">Contactez-nous</span></a></div>-->
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide" data-slide-bg="assets/images/baniere.png"
                                    data-preview-bg="assets/images/baniere.png">
                                    <div class="swiper-caption swiper-parallax" data-speed="0.5" data-fade="true">
                                        <div class="swiper-slide-caption">
                                            <div class="container">
                                                <div class="row justify-content-xl-center">
                                                    <div class="col-xl-12">
                                                        <h4 class="text-extra-big font-weight-bold font-italic text-uppercase"
                                                            data-caption-animate="fadeInUp" data-caption-delay="300">
                                                            Slide 3
                                                        </h4>
                                                    </div>
                                                    <div class="col-xl-8 offset-top-10">
                                                        <h5 class="hidden d-sm-block text-light"
                                                            data-caption-animate="fadeInUp" data-caption-delay="500">
                                                            texte de description</h5>
                                                        <!--<div class="offset-top-20 offset-sm-top-50"><a href="contact.html" class="btn btn-danger btn-anis-effect" data-waypoint-to="#welcome" data-caption-animate="fadeInUp" data-caption-delay="800"><span class="btn-text">Contactez-nous</span></a></div>-->
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide" data-slide-bg="assets/images/baniere.png"
                                    data-preview-bg="assets/images/baniere.png">
                                    <div class="swiper-caption swiper-parallax" data-speed="0.5" data-fade="true">
                                        <div class="swiper-slide-caption">
                                            <div class="container">
                                                <div class="row justify-content-xl-center">
                                                    <div class="col-xl-12">
                                                        <h4 class="text-extra-big font-weight-bold font-italic text-uppercase text-white"
                                                            data-caption-animate="fadeInUp" data-caption-delay="300">
                                                            Slide 4
                                                        </h4>
                                                    </div>
                                                    <div class="col-xl-8 offset-top-10">
                                                        <h5 class="hidden d-sm-block text-primary text-white"
                                                            data-caption-animate="fadeInUp" data-caption-delay="500">
                                                            texte de description</h5>
                                                        <!--<div class="offset-top-20 offset-sm-top-50"><a href="contact.html" class="btn btn-danger btn-anis-effect" data-waypoint-to="#welcome" data-caption-animate="fadeInUp" data-caption-delay="800"><span class="btn-text">Contactez-nous</span></a></div>-->
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-button swiper-button-prev swiper-parallax">
                                <i class="fa fa-chevron-left" aria-hidden="true"></i>
                            </div>
                            <div class="swiper-button swiper-button-next swiper-parallax">
                                <i class="fa fa-chevron-right" aria-hidden="true"></i>
                            </div>
                            <div class="swiper-pagination"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!--=== End Block slider ===-->
    <!-- Personnage d'assistance Start -->
    <div class="title-section-2 mt-4">
        <h2 class=" text-primary-bonus text-center">Besoin d'assistance ?</h2>
    </div>

    <section>
        <div class="container-fluid mb-4">
            <div class=" row">
                <div class="col-md-3 card mx-auto mb-2">
                    <a href="page-assistance.html">
                        <img src="assets/images/centre-assistance.png" class="w-100" alt="">
                        <h5 class="text-center text-primary-bonus">
                            Hello, je m'appelle Danie !
                            je suis votre assistante virtuelle!
                            Je réponds à tous vos questions en <span class=" fw-bold">Français</span>
                        </h5>
                    </a>
                </div>
                <div class="col-md-3 card mx-auto  mb-2">
                    <a href="page-assistance.html">
                        <img src="assets/images/centre-assistance.png" class="w-100" alt="">
                        <h5 class="text-center text-primary-bonus">
                            Hello, je m'appelle Freddy !
                            je suis votre assistant virtuel!
                            Je réponds à tous vos questions en <span class=" fw-bold">anglais</span>
                        </h5>
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!--
        <div class="row">
            <div class="col-md-3 col-sm-6">
                <div class="product-grid">
                    <div class="product-content">
                        <h3 class="title"><a href="#">Women's Blouse Top</a></h3>
                        <div class="price"><span>$81.23</span> $65.99</div>
                        <ul class="rating">
                            <li class="fas fa-star"></li>
                            <li class="fas fa-star"></li>
                            <li class="fas fa-star"></li>
                            <li class="fas fa-star"></li>
                            <li class="fas fa-star"></li>
                        </ul>
                        <ul class="product-links">
                            <li><a href="#"><i class="fa fa-shopping-bag"></i></a></li>
                            <li><a href="#"><i class="fas fa-random"></i></a></li>
                            <li><a href="#"><i class="fa fa-heart"></i></a></li>
                            <li><a href="#"><i class="fa fa-eye"></i></a></li>
                        </ul>
                    </div>
                    <div class="product-image">
                        <a href="#" class="image">
                            <img class="pic-1" src="assets/images/work-1.jpg">
                            <img class="pic-2" src="assets/images/work-1.jpg">
                        </a>
                        <span class="product-sale-label">Sale</span>
                    </div>
                </div>
            </div>
        </div>-->

    <!-- Personnage d'assistance End -->

    <section class="accueil__section-magazine">
        <div class="container-fluid">
            <div class="row border-top-bonus">
                <div class="accueil__section-magazine--block-1 col-md-2 d-flex align-items-center ">
                    <a href="http://" class="">
                        <div class="">
                            <h2 class=" text-center text-white font-weight-bold">Infos les moins récentes</h2>
                        </div>
                    </a>
                </div>
                <div class="accueil__section-magazine--block-2 col-md-8 text-center bg-white">
                    <div class="accueil__section-slider--block-2 mt-2">
                        <!--Swiper-->
                        <div class="recherche">
                            <div class="title-section-2 py-3">
                                <div class="wrap">
                                    <form action="">
                                        <div class="search">
                                            <input type="text" class="searchTerm"
                                                placeholder="Rechercher un magazine ici ...">
                                            <button type="submit" class="searchButton" title="submit">
                                                <i class="fa fa-search"></i>
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <!--Start slide magazine -->
                            <section class="categories">
                                <div class="">
                                    <div class="row">
                                        <div class="categories__slider owl-carousel">
                                            <div class="col-lg-3">
                                                <div class="categories__item set-bg"
                                                    data-setbg="assets/images/work-1.jpg">
                                                    <div class="product-grid">
                                                        <div class="product-content">
                                                            <h3 class="title"><a href="#">Women's Blouse Top</a></h3>
                                                            <ul class="rating">
                                                                <li class="fas fa-star"></li>
                                                                <li class="fas fa-star"></li>
                                                                <li class="fas fa-star"></li>
                                                                <li class="fas fa-star"></li>
                                                                <li class="fas fa-star"></li>
                                                            </ul>
                                                            <ul class="product-links">
                                                                <li><a href="#"><i class="fa fa-whatsapp"></i></a></li>
                                                                <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                                                <li><a href="#"><i class="fa fa-heart"></i></a></li>
                                                                <li><a href="#"><i class="fa fa-telegram"></i></a></li>
                                                            </ul>
                                                        </div>
                                                        <div class="product-image">
                                                            <a href="#" class="image">
                                                                <img class="pic-1" src="assets/images/work-1.jpg">
                                                                <img class="pic-2" src="assets/images/work-1.jpg">
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-3">
                                                <div class="categories__item set-bg"
                                                    data-setbg="assets/images/work-1.jpg">
                                                    <div class="product-grid">
                                                        <div class="product-content">
                                                            <h3 class="title"><a href="#">Women's Blouse Top</a></h3>
                                                            <ul class="rating">
                                                                <li class="fas fa-star"></li>
                                                                <li class="fas fa-star"></li>
                                                                <li class="fas fa-star"></li>
                                                                <li class="fas fa-star"></li>
                                                                <li class="fas fa-star"></li>
                                                            </ul>
                                                            <ul class="product-links">
                                                                <li><a href="#"><i class="fa fa-whatsapp"></i></a></li>
                                                                <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                                                <li><a href="#"><i class="fa fa-heart"></i></a></li>
                                                                <li><a href="#"><i class="fa fa-telegram"></i></a></li>
                                                            </ul>
                                                        </div>
                                                        <div class="product-image">
                                                            <a href="#" class="image">
                                                                <img class="pic-1" src="assets/images/work-1.jpg">
                                                                <img class="pic-2" src="assets/images/work-1.jpg">
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-3">
                                                <div class="categories__item set-bg"
                                                    data-setbg="assets/images/work-1.jpg">
                                                    <div class="product-grid">
                                                        <div class="product-content">
                                                            <h3 class="title"><a href="#">Women's Blouse Top</a></h3>
                                                            <ul class="rating">
                                                                <li class="fas fa-star"></li>
                                                                <li class="fas fa-star"></li>
                                                                <li class="fas fa-star"></li>
                                                                <li class="fas fa-star"></li>
                                                                <li class="fas fa-star"></li>
                                                            </ul>
                                                            <ul class="product-links">
                                                                <li><a href="#"><i class="fa fa-whatsapp"></i></a></li>
                                                                <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                                                <li><a href="#"><i class="fa fa-heart"></i></a></li>
                                                                <li><a href="#"><i class="fa fa-telegram"></i></a></li>
                                                            </ul>
                                                        </div>
                                                        <div class="product-image">
                                                            <a href="#" class="image">
                                                                <img class="pic-1" src="assets/images/work-1.jpg">
                                                                <img class="pic-2" src="assets/images/work-1.jpg">
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-3">
                                                <div class="categories__item set-bg"
                                                    data-setbg="assets/images/work-1.jpg">
                                                    <div class="product-grid">
                                                        <div class="product-content">
                                                            <h3 class="title"><a href="#">Women's Blouse Top</a></h3>
                                                            <ul class="rating">
                                                                <li class="fas fa-star"></li>
                                                                <li class="fas fa-star"></li>
                                                                <li class="fas fa-star"></li>
                                                                <li class="fas fa-star"></li>
                                                                <li class="fas fa-star"></li>
                                                            </ul>
                                                            <ul class="product-links">
                                                                <li><a href="#"><i class="fa fa-whatsapp"></i></a></li>
                                                                <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                                                <li><a href="#"><i class="fa fa-heart"></i></a></li>
                                                                <li><a href="#"><i class="fa fa-telegram"></i></a></li>
                                                            </ul>
                                                        </div>
                                                        <div class="product-image">
                                                            <a href="#" class="image">
                                                                <img class="pic-1" src="assets/images/work-1.jpg">
                                                                <img class="pic-2" src="assets/images/work-1.jpg">
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-3">
                                                <div class="categories__item set-bg"
                                                    data-setbg="assets/images/work-1.jpg">
                                                    <div class="product-grid">
                                                        <div class="product-content">
                                                            <h3 class="title"><a href="#">Women's Blouse Top</a></h3>
                                                            <ul class="rating">
                                                                <li class="fas fa-star"></li>
                                                                <li class="fas fa-star"></li>
                                                                <li class="fas fa-star"></li>
                                                                <li class="fas fa-star"></li>
                                                                <li class="fas fa-star"></li>
                                                            </ul>
                                                            <ul class="product-links">
                                                                <li><a href="#"><i class="fa fa-whatsapp"></i></a></li>
                                                                <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                                                <li><a href="#"><i class="fa fa-heart"></i></a></li>
                                                                <li><a href="#"><i class="fa fa-telegram"></i></a></li>
                                                            </ul>
                                                        </div>
                                                        <div class="product-image">
                                                            <a href="#" class="image">
                                                                <img class="pic-1" src="assets/images/work-1.jpg">
                                                                <img class="pic-2" src="assets/images/work-1.jpg">
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-3">
                                                <div class="categories__item set-bg"
                                                    data-setbg="assets/images/work-1.jpg">
                                                    <div class="product-grid">
                                                        <div class="product-content">
                                                            <h3 class="title"><a href="#">Women's Blouse Top</a></h3>
                                                            <ul class="rating">
                                                                <li class="fas fa-star"></li>
                                                                <li class="fas fa-star"></li>
                                                                <li class="fas fa-star"></li>
                                                                <li class="fas fa-star"></li>
                                                                <li class="fas fa-star"></li>
                                                            </ul>
                                                            <ul class="product-links">
                                                                <li><a href="#"><i class="fa fa-whatsapp"></i></a></li>
                                                                <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                                                <li><a href="#"><i class="fa fa-heart"></i></a></li>
                                                                <li><a href="#"><i class="fa fa-telegram"></i></a></li>
                                                            </ul>
                                                        </div>
                                                        <div class="product-image">
                                                            <a href="#" class="image">
                                                                <img class="pic-1" src="assets/images/work-1.jpg">
                                                                <img class="pic-2" src="assets/images/work-1.jpg">
                                                            </a>
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
                <div class="accueil__section-magazine--block-3 col-md-2 d-flex align-items-center justify-content-center text-center">
                    <a href="http://">
                        <div class="accueil__section-slider--block-3">
                            <p class=" fw-bold text-white display-7">Publicité dans le magazine</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </section>
        <!--=============== Parallax================ -->
        <section class="parallax parallax-section">
            <div class="overlay"></div>
            <div class="container">
                <div class="row">
                    <div class="col-md-12 parallax--text">
                        <h1 class="text-white title-mobile text-body-1"></h1>
                        <p class=" mt-3"><a href="{{ route('more')}}"
                                class=" btn btn-secondary-bonus w-25 rounded-pill btn-savoir-plus">En savoir plus</a></p>
                    </div>
                </div>
            </div>
        </section>
</main>
<!--End Start Main-->

@endsection