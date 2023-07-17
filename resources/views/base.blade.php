<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="utf-8">
    <title>Bonus media plateforme d'actualités</title>
    <meta content="width=device-width, initial-scale=1.0" name="viewport">
    <meta content="" name="keywords">
    <meta content="Bonus media est une plateforme de gestion d'actualidé dans le monde" name="description">
    <!-- Favicon -->
    <link href="{{asset('assets/images/LOGOS_JASMINA-01.png')}}" rel="icon">
    <!-- Icon Font Stylesheet -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"
        integrity="sha512-5A8nwdMOWrSz20fDsjczgUidUBR8liPYU+WymTZP1lmY9G6Oc7HlZv156XqnsgNUzTyMefFTcsFH/tnJE/+xBg=="
        crossorigin="anonymous">
    <!-- Libraries Stylesheet -->
    <link href="{{asset('assets/lib/animate/animate.min.css')}}" rel="stylesheet">
    <!-- Customized Bootstrap Stylesheet -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdn.boomcdn.com/libs/owl-carousel/2.3.4/assets/owl.carousel.css">
    <!--  Stylesheet -->
    <link rel="stylesheet" href="{{asset('assets/css/style-slider.css')}}">
    <link href="{{asset('assets/css/style-secondaire.css')}}" rel="stylesheet">
    <link href="{{asset('assets/css/style-slider-magazine.css')}}" rel="stylesheet">

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/baguettebox.js/1.10.0/baguetteBox.min.css" />

    <link href="{{asset('assets/libMenu/css/meanmenu.css')}}" rel="stylesheet">
    <link href="{{asset('assets/libMenu/css/fontawesome-all.min.css')}}" rel="stylesheet">
    <link href="{{asset('assets/libMenu/css/style.min.css')}}" rel="stylesheet">
    <link href="{{asset('assets/libMenu/css/responsive.css')}}" rel="stylesheet">
    <link href="{{asset('assets/sass/css/style.css')}}" rel="stylesheet">
</head>

<body>
 
    @include('includes.navbar')

    @yield('content')

    @include('includes.footer')

        <!-- JavaScript Libraries -->
    {{-- <script src="https://code.jquery.com/jquery-3.4.1.min.js "></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js "></script>
    <script src="assets/lib/wow/wow.min.js "></script>

    <script src="assets/js/script-slider-1.js "></script>
    <script src="assets/js/script-slider-2.js "></script>
    <script src="assets/lib/counterup/counterup.min.js "></script>

    <!-- Template Javascript -->
    <script src="assets/js/main.js "></script> --}}

</body>

</html>