
<!-- Topbar Start -->
<div class="container-fluid bg-secondary-bonus header-top">
    <div class="row py-3">
        <div class="col-md-6 mb-1">
            <div class="header-top__block-left">
                <div>
                    <img src="assets/images/LOGOS_JASMINA-01.png" alt="" class="logo">
                </div>
                <div class="ms-5 text-dark">
                    <i>
                        <h2 class="mb-0 text-top-1">Une chose en plus!</h2>
                    </i>
                    <i>
                        <h2 class="text-top-2">Adding a plus!</h2>
                    </i>
                </div>
            </div>
        </div>
        <div class="col-md-6 mb-1">
            <a href="https://bit.ly/3QKRkvz" target="_blank">
                <div class="header-top__block-right text-center">
                    <img src="assets/images/logo_bonus_media_final-03-1.png" alt="" class="logo_bonus_media">
                </div>
            </a>
        </div>
    </div>
</div>
<!-- Topbar End -->

<!-- header area start -->
<header>
    <!-- header top area start -->
    <div class="header-top-area">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="header-top-address-lang-area d-flex justify-content-between">
                        <ul class="header-short-info">
                            <li>
                                <i class="fa fa-phone"></i>
                                <div class="short-info">
                                    <span class=" text-secondary-bonus">phone</span>

                                    <span>+237 673 033 645 / +237 694 521 525</span>
                                </div>
                            </li>

                            <li>
                                <i class="fa fa-at"></i>
                                <div class="short-info">
                                    <span class=" text-secondary-bonus">Email</span>
                                    <span>bonusplus@gmail.com</span>
                                </div>
                            </li>

                            <li>
                                <i class="fa fa-map-marker"></i>
                                <div class="short-info">
                                    <span class=" text-secondary-bonus">address</span>
                                    <span>Douala rue Deido</span>
                                </div>
                            </li>
                        </ul>
                        <div class="mb-2">
                            <a href="" class=" w-100 btn btn-sm btn-secondary-bonus rounded-pill" data-toggle="modal"
                                data-target="#exampleModal" data-whatever="@mdo">Se connecter</a>
                        </div>
                        <div  class="mb-2">
                            <select class="w-100 text-center selectpicker btn-sm form-select-sm bg-primary-bonus p-1 rounded-pill">
                                <option>Français</option>
                                <option>english</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- header top area end -->
</header>
<!-- header area end -->

<!-- main area start -->
<div class="ul-nav-area">
    <div class="container">
        <div class="row">
            <!-- logo start -->
            <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 d-md-none d-lg-none">
                <div class="header-logo">
                    <a href="index.html"><img src="assets/images/LOGOS JASMINA-02.png" alt="logo"
                            class="logo-navbar"></a>
                </div>
            </div>
            <!-- main menu area start -->
            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">

                <!-- Header Social Start -->
                <div class="header-top-right float-right">
                    <ul class="header-search-social">
                        <li><a id="search-btn" href="#"><i class="fa fa-search"></i></a></li>
                        <li><a id="social-pop-btn" href="#"><i class="fa fa-align-left"></i></a></li>
                    </ul>
                </div>
                <!-- Header Social End -->

            @php
                $routeName = request()->route()->getName();
            @endphp

                <div class="main-menu-area text-center">
                    <div class="main-menu">
                        <nav id="mobile-menu">
                            <ul>
                                <li><a href="{{ route('index')}}" @if (str_starts_with($routeName, 'index')) style="color: #e67e0f;" @else @endif>Accueil</a></li>
                                <li><a href="{{ route('about')}}" @if (str_starts_with($routeName, 'about')) style="color: #e67e0f;" @else @endif>Nous</a></li>
                                <li><a href="{{ route('programs')}}" @if (str_starts_with($routeName, 'programs')) style="color: #e67e0f;" @else @endif>Programmes</a></li>
                                <li><a href="#">Mon réseau</a>
                                    <ul class="sub-menu text-left">
                                        <li><a href="team.html">Espace opportunuité</a></li>
                                        <li><a href="testimonial.html">Coaching et Formation</a></li>
                                        <li><a href="error.html">Le jour du marché</a></li>
                                        <li><a href="error.html">Porte Feuille</a></li>
                                    </ul>
                                </li>
                                <li><a href="#">Profil de compétence</a>
                                    <ul class="sub-menu text-left">
                                        <li><a href="team.html">Temps plein</a></li>
                                        <li><a href="testimonial.html">Freelance</a></li>
                                        <li><a href="error.html">Le jour du marché</a></li>
                                    </ul>
                                </li>
                                {{-- <li><a href="boutique.html">Banque d'image</a>
                                    <ul class="sub-menu text-left">
                                        <li>
                                            <a href="blog-list.html">menu 1</a>
                                        </li>
                                        <li>
                                            <a href="blog-grid.html">menu 1</a>
                                        </li>
                                        <li>
                                            <a href="blog-details.html">menu 1</a>
                                        </li>
                                    </ul>
                                </li> --}}
                                <li><a href="{{ route('article.index')}}" @if (str_starts_with($routeName, 'article.')) style="color: #e67e0f;" @else @endif>Blog</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
            <div class="col-12">
                <div class="mobile-menu"></div>
            </div>
            <!-- main menu area end -->
        </div>
    </div>
</div>

<!-- search form start -->
<div class="search-form-area" id="search-overlay">
    <div class="search-form-centered">
        <div id="search-box">
            <i id="close-btn" class="fa fa-times fa-2x"></i>
            <form class="search-form">
                <input class="form-control" placeholder="Type your text" type="text">
                <button type="submit">
                    <span>Search</span>
                </button>
            </form>
        </div>
    </div>

</div>
<!-- search form end -->

<!-- social popup area start -->
<div id="ul-social-popup-overlay" class="ul-social-popup-area">
    <div class="container">
        <div class="row">
            <div class="col-xl-12">
                <i id="popup-close-btn" class="fa fa-times fa-2x"></i>
                <div class="ul-social-popup">
                    <ul class="ul-social">
                        <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                        <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i class="fa fa-instagram"></i></a></li>
                        <li><a href="#"><i class="fa fa-vk"></i></a></li>
                        <li><a href="#"><i class="fa fa-vimeo"></i></a></li>
                        <li><a href="#"><i class="fa fa-wordpress"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- social popup area end -->

<!-- main area end -->

