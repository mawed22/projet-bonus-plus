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
                            <h1 class=" text-primary-bonus fw-bold"> <i>Création d'un compte</i> </h1>
                        </div>
                    </div>
                </div>
                <div class="sous-menu text-white">
                    <a href="{{ route('index')}}" class="me-1 ">Accueil</a><i class=" fa fa-chevron-right "></i>
                    <a href="">Création d'un compte</a>
                </div>
            </div>

        </div>
    </div>
    <!--=======End=====-->
</div>
<main class="inscription mt-5">
    <!-- Block slider -->
    <section class="">
        <div class="container">
            <div class="row">
                <div class="col-md-5">
                    <img src="assets/images/logo_bonus_media_final-03-1.png" alt="Logo_bonus_media" class="w-100">
                </div>
                <div class="col-md-7">
                    <section class="vh-100">
                        <div class="h-custom">
                            <div class="row d-flex justify-content-center align-items-center h-100">
                                <form>
                                    <div class="">
                                        <a href="http://" target="_blank" rel="noopener noreferrer"
                                            class="btn  bg-secondary text-white w-100 Sign">
                                            Sign up with Google
                                        </a>
                                    </div>

                                    <div class="divider d-flex align-items-center my-4">
                                        <p class="text-center fw-bold mx-3 mb-0">OU</p>
                                    </div>

                                    <!-- nom input -->
                                    <div class="row mb-4">
                                        <div class="col-6">
                                            <input type="text" id="nom" name="nom" class="form-control"
                                                placeholder="Nom" />
                                        </div>
                                        <div class="col-6">
                                            <input type="text" id="prenom" name="prenom" class="form-control"
                                                placeholder="Prénom" />
                                        </div>
                                    </div>
                                    <!-- email -->
                                    <div class="row mb-4">
                                        <div class="col-12">
                                            <input type="email" id="email" name="email" class="form-control"
                                                placeholder="Adresse email" />
                                        </div>
                                    </div>
                                    <div class="form-group mb-4">
                                    <!-- password-1 -->
                                        <div class="input-group d-flex hidden-password" id="show_hide_password1">
                                            <input class="form-control" name="password" type="password" class=""
                                                placeholder="Votre mot de passe" />
                                            <div class="display-eye">
                                                <a href=""><i class="fa fa-eye-slash text-secondary-bonus"
                                                        aria-hidden="true"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- password-2 -->
                                    <div class="form-group mb-4">
                                        <div class="input-group d-flex hidden-password" id="show_hide_password2">
                                            <input class="form-control" type="password" class=""
                                                placeholder="Confirmation du mot de passe" />
                                            <div class="display-eye">
                                                <a href=""><i class="fa fa-eye-slash text-secondary-bonus"
                                                        aria-hidden="true"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <!-- Checkbox -->
                                        <div class="form-check mb-0">
                                            <input class="form-check-input me-2" type="checkbox" value=""
                                                id="conditionUser1" />
                                            <label class="form-check-label" for="conditionUser1">
                                                j'ai lu et accepté les
                                                informations de confidentialités
                                            </label>
                                        </div>
                                        <!--<a href="#!" class="text-body">Forgot password?</a>-->
                                    </div>
                                    <div class="mt-4 d-flex justify-content-between align-items-center">
                                        <div class="form-check mb-0">
                                            <input class="form-check-input me-2" type="checkbox" value="" id="conditionUser2" />
                                            <label class="form-check-label" for="conditionUser2">
                                                je suis d'accord que Bonus
                                                m'envoi des cotenus mes centres
                                                d'inérêts, des guides sur l'usage de la
                                                plateformes et des messages à titre
                                                commercial
                                            </label>
                                        </div>
                                        <!--<a href="#!" class="text-body">Forgot password?</a>-->
                                    </div>

                                    <div class="text-center text-lg-start mt-4 pt-2">
                                        <button type="button" class="btn  bg-primary-bonus w-100"
                                            style="padding-left: 2.5rem; padding-right: 2.5rem;">Enrégister</button>
                                        <p class="small fw-bold mt-2 pt-1 mb-0">J'ai déjà un compte ? <a href="#!"
                                                class="link-danger" data-toggle="modal"
                                                data-target="#exampleModal" data-whatever="@mdo">Me connecter</a></p>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    </section>

    <!-- Modal -->
    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title text-end" id="staticBackdropLabel">Connexion</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="">
                            <a href="http://" target="_blank" rel="noopener noreferrer" class="btn  bg-secondary text-white w-100 Sign">
                                Se connecter avec Google
                            </a>
                        </div>
                    
                        <div class="divider d-flex align-items-center my-4">
                            <p class="text-center fw-bold mx-3 mb-0">OU</p>
                        </div>
                    
                        <!-- email -->
                        <div class="row mb-4">
                            <div class="col-12">
                                <input type="text" id="email" name="email" class="form-control" placeholder="Email ou numéro de téléphone" />
                            </div>
                        </div>
                        <div class="form-group mb-4">
                            <div class="input-group d-flex hidden-password" id="show_hide_password3">
                                <input class="form-control" type="password" class="" placeholder="Confirmation du mot de passe" />
                                <div class="display-eye">
                                    <a href=""><i class="fa fa-eye-slash text-secondary-bonus" aria-hidden="true"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="d-flex justify-content-between align-items-center">
                            <!-- Checkbox -->
                            <div class="form-check mb-0">
                                <input class="form-check-input me-2" type="checkbox" value="" id="conditionUser1" />
                                <label class="form-check-label" for="conditionUser1">
                                    Se souvenir de moi
                                </label>
                            </div>
                            <!--<a href="#!" class="text-body">Forgot password?</a>-->
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
                    <button type="button" class="btn btn-primary-bonus">Se connecter</button>
                </div>
            </div>
        </div>
    </div>

</main>
@endsection