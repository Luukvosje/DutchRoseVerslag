

(function ($) {
    "use strict";
    
    // Header scroll class
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#header').addClass('header-scrolled');
        } else {
            $('#header').removeClass('header-scrolled');
        }
    });
    if ($(window).scrollTop() > 100) {
        $('#header').addClass('header-scrolled');
    }

    
    // Smooth scrolling on the navbar links
    $(".nav-menu a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 70
            }, 1500, 'easeInOutExpo');
            
            if ($(this).parents('.nav-menu').length) {
                $('.nav-menu .menu-active').removeClass('menu-active');
                $(this).closest('li').addClass('menu-active');
            }
        }
    });
    console.log("Hello");
    // Carousell 
    var elm = document.querySelector('.nav-menu');
    var ms = new MenuSpy(elm,{
        activeClass   : 'menu-active',
        threshold     : 71,
        enableLocationHash: false
    });


    // jQuery counterUp
    $('#counters .number').counterUp({
        delay: 10,
        time: 1000
    });

    // Porfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('.portfolio-flters li').on('click', function () {
        $(".portfolio-flters li").removeClass('filter-active');
        $(this).addClass('filter-active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });


    // Testimonials carousel
    // $(".testimonials-carousel").owlCarousel({
    //     autoplay: true,
    //     dots: true,
    //     loop: true,
    //     items: 1
    // });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
    
})(jQuery);

let slideIndex = 0;

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "inline";  
    setTimeout(showSlides, 4000); // Change image every 2 seconds
  }

showSlides();

