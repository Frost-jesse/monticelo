$(document).ready(function() {
    $('#navBar').click(function() {
        $('ul.nav-list, .nav-bar').toggleClass('nav-open');
    });

    $('#js-carousel').owlCarousel({
        items: 1,
        nav: true,
        dotsEach: 1,
        loop: true,
        dots: false,
        navText: [
            '<i class="fas fa-chevron-left"></i>',
            '<i class="fas fa-chevron-right"></i>'
        ],

        responsive: {

            767.98: {
                dots: true,
                items: 2
            },

            991.98: {
                dots: true,
                items: 2,
                autoplay: true,
                autoplayTimeout: 3000
            },

            1199.98: {
                dots: true,
                items: 3,
                autoplay: true,
                autoplayTimeout: 3000
            }
        }
    });
});

$(window).scroll(function() {
    if ($(window).scrollTop() > 20) {
        $('.nav-menu,.nav-list').addClass("blue");
    } else {
        $('.nav-menu,.nav-list').removeClass("blue");
    }
});