$(function () {
    // Owl Carousel
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        margin: 10,
        loop: true,
        mouseDrag: true,
        autoplayTimeout: 3000,
        autoplay: true,
        nav: true,
        autoplayHoverPause: true,
        navText: ["<img src='./img/left_arrow.png'>", "<img src='./img/right_arrow.png'>"],
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 3,
            },
            1000: {
                items: 5,
            },
        },
    });
});
