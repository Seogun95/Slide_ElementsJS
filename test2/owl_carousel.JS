$(function () {
    // Owl Carousel
    var owl = $('#owl-slider');
    owl.owlCarousel({
        margin: 10,
        loop: true,
        mouseDrag: true,
        autoplayTimeout: 3000,
        autoplay: true,
        nav: true,
        autoplayHoverPause: true,
        animateOut: 'animate__slideOutDown',
        animateIn: 'animate__flipInX',
        items: 1,
        margin: 30,
        stagePadding: 0,
        smartSpeed: 450,
        navText: [
            `<svg width="35" height="35" viewBox="0 0 24 24" fill="#223c50"><path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"></path></svg>`,
            `<svg width="35" height="35" viewBox="0 0 24 24" fill="#223c50"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"></path></svg>`,
        ],
        items: 1,
    });
});
