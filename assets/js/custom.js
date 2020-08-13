(function($) {
	'use strict';
	jQuery(document).on('ready', function(){

    // START MENU JS
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 50) {
            $('.navbar-light').addClass('menu-shrink');
        } else {
            $('.navbar-light').removeClass('menu-shrink');
        }
    });			
 
    $('.navbar-nav .nav-item .nav-link').on('click', function(e){
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top - 50
        }, 1500);
        e.preventDefault();
    });
   
    $(document).on('click','.navbar-collapse.show',function(e) {
        if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
            $(this).collapse('hide');
        }
    });		
    // END MENU JS

    // Home Slider JS
    $('.home-slider').owlCarousel({
        items:1,
        loop:true,
        margin:10,
        nav: true,
        dots: false,
        smartSpeed: 1000,
        animateOut: 'fadeOut',
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        navText: [
            "<i class='icofont-rounded-left'></i>",
            "<i class='icofont-rounded-right'></i>"
        ],
    })

    // Sorting Portfolio JS
    $('#Container').mixItUp();
    
    //Popup Gallery JS
    $('.popup-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0,1]
        }
    });

    // Study Slider Two JS
    $('.study-slider').owlCarousel({
        items:1,
        loop:true,
        margin:10,
        nav: false,
        dots: true,
        smartSpeed: 1000,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
    })

    // CounterUp JS
    $('.counter').counterUp({
        delay: 50,
        time: 3000
    });

    // Service Slider JS
    $(".service-item").owlCarousel({
        items:1,
        loop:true,
        margin:1,
        nav:false ,
        autoplay: true,
        autoplayhover:true,
        dots:true,
        autoplayTimeout:3000,
        animateOut: 'slideOutUp',
        animateOut: 'slideOutDown',
    });

    // WOW JS
    new WOW().init();

    // Back to top 
    $('body').append('<div id="toTop" class="back-to-top-btn"><i class="icofont-simple-up"></i></div>');
    $(window).scroll(function () {
        if ($(this).scrollTop() != 0) {
            $('#toTop').fadeIn();
        } else {
            $('#toTop').fadeOut();
        }
    }); 
    $('#toTop').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 900);
        return false;
    });

    // PRELOADER
    jQuery(window).on('load',function(){
        jQuery(".loader").fadeOut(500);
    });

}); 	
})(jQuery);