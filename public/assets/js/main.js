(function ($) {
    "use strict";

    // $(document).on('click', 'p a', function() {
    //     $(this).addClass('active').siblings().removeClass('active')
    //     alert('ok')
    // })

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();


    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').css('top', '0px');
        } else {
            $('.sticky-top').css('top', '-100px');
        }
    });


    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";

    $(window).on("load resize", function () {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
                function () {
                    const $this = $(this);
                    $this.addClass(showClass);
                    $this.find($dropdownToggle).attr("aria-expanded", "true");
                    $this.find($dropdownMenu).addClass(showClass);
                },
                function () {
                    const $this = $(this);
                    $this.removeClass(showClass);
                    $this.find($dropdownToggle).attr("aria-expanded", "false");
                    $this.find($dropdownMenu).removeClass(showClass);
                }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });


    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // // Date and time picker
    // $('.date').datetimepicker({
    //     format: 'L'
    // });
    // $('.time').datetimepicker({
    //     format: 'LT'
    // });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 25,
        dots: true,
        loop: true,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });

    $("#show_hide_password1 a").on('click', function (event) {
        event.preventDefault();
        if ($('#show_hide_password1 input').attr("type") == "text") {
            $('#show_hide_password1 input').attr('type', 'password');
            $('#show_hide_password1 i').addClass("fa-eye-slash");
            $('#show_hide_password1 i').removeClass("fa-eye");
        } else if ($('#show_hide_password1 input').attr("type") == "password") {
            $('#show_hide_password1 input').attr('type', 'text');
            $('#show_hide_password1 i').removeClass("fa-eye-slash");
            $('#show_hide_password1 i').addClass("fa-eye");
        }
    });
    $("#show_hide_password2 a").on('click', function (event) {
        event.preventDefault();
        if ($('#show_hide_password2 input').attr("type") == "text") {
            $('#show_hide_password2 input').attr('type', 'password');
            $('#show_hide_password2 i').addClass("fa-eye-slash");
            $('#show_hide_password2 i').removeClass("fa-eye");
        } else if ($('#show_hide_password2 input').attr("type") == "password") {
            $('#show_hide_password2 input').attr('type', 'text');
            $('#show_hide_password2 i').removeClass("fa-eye-slash");
            $('#show_hide_password2 i').addClass("fa-eye");
        }
    });

    $("#show_hide_password3 a").on('click', function (event) {
        event.preventDefault();
        if ($('#show_hide_password3 input').attr("type") == "text") {
            $('#show_hide_password3 input').attr('type', 'password');
            $('#show_hide_password3 i').addClass("fa-eye-slash");
            $('#show_hide_password3 i').removeClass("fa-eye");
        } else if ($('#show_hide_password3 input').attr("type") == "password") {
            $('#show_hide_password3 input').attr('type', 'text');
            $('#show_hide_password3 i').removeClass("fa-eye-slash");
            $('#show_hide_password3 i').addClass("fa-eye");
        }
    });

    const curentLocation = location.href;

    const linkItem = $('.navbar-nav a');
    const linkItemLenght = linkItem.length

    for (let i = 0; i < linkItemLenght; i++) {
        if (linkItem[i].href === curentLocation){
            linkItem[i].className = 'nav-item nav-link btn-link active'
        }
        
    }


    
})(jQuery);


// function changeImage(element) {
//     var main_prodcut_image = document.getElementById('main_product_image');

//     main_prodcut_image.src = element.src;
// }