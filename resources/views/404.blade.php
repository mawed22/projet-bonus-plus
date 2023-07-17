@extends('base')

@section('content')
    
    <!-- Start Main content  -->
    <main class="page-404">
        <div id="notfound">
            <div class="notfound">
                <h1 class=" text-white fw-bold">Oups !!!</h1>
                <div class="notfound-404 mb-5">
                    <h1>4<span>0</span>4</h1>
                </div>
                <p class="mt-5 mb-2">Cette page est malheureusement
                indisponible ou introuvable. Nous
                vous prions de réessayer en
                entrant les informations correctes
                pour votre requête.</p>

                <h2 class="text-white fw-bold"><a href="{{ route('index')}}" class="btn btn-sm btn-secondary-bonus rounded-pill"> Retour à la page d'accueil</a></h2>
                <!--<a href="index.html" class="btn btn-sm btn-secondary-bonus rounded-pill mt-2">Retour a l'accueil</a>-->
            </div>
        </div>
    </main>
    <!--End Start Main-->

@endsection