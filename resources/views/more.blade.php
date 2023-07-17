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
                            <h1 class=" text-primary-bonus fw-bold"> <i>En savoir plus</i> </h1>
                        </div>
                    </div>
                </div>
                <div class="sous-menu text-white">
                    <a href="{{ route('index')}}" class="me-1 ">Accueil</a><i class=" fa fa-chevron-right "></i>
                    <a href="">En savoir plus</a>
                </div>
            </div>

        </div>
    </div>
    <!--=======End=====-->
</div>
<main class="en-savoir-plus mb-3">
    <section id="hero" class="d-flex justify-content-center align-items-center">
        <div class="container position-relative" data-aos="zoom-in" data-aos-delay="100">
            <h1>Devenir membre sur Bonus</h1>
            <a href="" class="btn-get-started btn-nous-contacter">Nous
                contactez</a>
        </div>
    </section>
    <section>
        <div class="container my-3">
            <div class="row">
                <div class="col-md-6 wow fadeInUp" data-wow-delay="0.2s">
                    <div  class=" d-flex align-items-center mx-auto">
                        <h2 class="my-2 font-size-40 title-mobile title-team w-100">Bonus Team</h2>
                        <hr class=" w-100 ligne-title">
                    </div>
                    <div class="card equipe__content-1">
                        <div class="profil">
                            <img src="assets/images/team.png" alt="" height="100%" class="w-100">
                        </div>
                        <div class="card-body p-1 text-center">
                            <p>On mettre un petit texte
                            descriptif ici en dessous</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 shadow p-4 wow fadeInUp" data-wow-delay="0.5s">
                    <h2 class="my-2 font-size-30 title-mobile title-team text-secondary-bonus">Comment adhérer à notre Famille ?</h2>
                
                    <div class="">
                        <p class=" text-justify">Ici onmettre un log texte explicatif de la procédure
                            à suivre
                            Bonus Bonus Bonus Bonus Bonus Bonus Bonus
                            Bonus Bonus Bonus Bonus Bonus Bonus Bonus
                            Bonus Bonus Bonus Bonus Bonus Bonus Bonus
                            Bonus Bonus BonusBonus Bonus Bonus Bonus
                            Bonus Bonus
                        </p>
                        <p class=" text-justify">Ici onmettre un log texte explicatif de la procédure
                            à suivre
                            Bonus Bonus Bonus Bonus Bonus Bonus Bonus
                            Bonus Bonus Bonus Bonus Bonus Bonus Bonus
                            Bonus Bonus Bonus Bonus Bonus Bonus Bonus
                            Bonus Bonus BonusBonus Bonus Bonus Bonus
                            Bonus Bonus
                        </p>
                        <p class=" text-justify">Ici onmettre un log texte explicatif de la procédure
                            à suivre
                            Bonus Bonus Bonus Bonus Bonus Bonus Bonus
                            Bonus Bonus Bonus Bonus Bonus Bonus Bonus
                            Bonus Bonus Bonus Bonus Bonus Bonus Bonus
                            Bonus Bonus BonusBonus Bonus Bonus Bonus
                            Bonus Bonus
                        </p>
                    </div>
                </div>
            </div>
            <div class="row my-3 pt-3" style="background: #F2F2F2;">
                <div class="col-md-4 d-flex col-12 wow fadeInUp " data-wow-delay="0.1s">
                    <img src="assets/images/img-1-copie.png" alt="" class=" mr-3">
                    <div>
                      <p>679 00 96 51 <br> Assistance 24h/24 7j/7</p> 
                    </div>
                </div>
                <div class="col-md-4 d-flex col-12 wow fadeInDown" data-wow-delay="0.3s">
                    <img src="assets/images/img-3-copie.png" alt="" class=" mr-3">
                    <div>
                        <p>Email<br> <span class=" text-primary-bonus">bonuscontact@gmail.com</span> </p>
                    </div>
                </div>
                <div class="col-md-4 d-flex col-12 wow fadeInDown" data-wow-delay="0.5s">
                    <img src="assets/images/img-2-copie.png" alt="" class=" mr-3">
                    <div>
                        <p>679 00 96 51 <br>Support whatsapp</p>
                    </div>
                </div>
                
                <div class="d-flex text-center pt-2">
                    <a class="btn btn-outline-light btn-social bg-white" href="">
                        <i class="fab fa-instagram fa-2x"></i>
                    </a>
                    <a class="btn btn-outline-light btn-social bg-white text-primary" href="">
                        <i class="fab fa-facebook-f fa-2x"></i>
                    </a>
                    <a class="btn btn-outline-light btn-social bg-white text-danger" href="">
                        <i class="fab fa-youtube fa-2x"></i>
                    </a>
                    <a class="btn btn-outline-light btn-social bg-white text-primary" href="">
                        <i class="fab fa-twitter fa-2x"></i>
                    </a>
                    <a class="btn btn-outline-light btn-social bg-white text-danger" href="">
                        <i class="fab fa-google fa-2x"></i>
                    </a>
                </div>
            </div>
        </div>
    </section>
</main>
@endsection