(function($) {
  "use strict";
  
 // menu 
  $('.siteBar-btn').click( function (){ 
    $('.mobile-menu').toggleClass('siteBar');   
  }); 


  // owlCarousel
  $(".slider").owlCarousel({
    margin: 0,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:false,
    animateOut: 'fadeOut',
    animateIn: 'flipInX',
    smartSpeed:1000,
    center: true,
    loop: true,
    items: 3,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>'
    ],
    nav: false,
    dots: true,
    responsive: {
      0: {
        items: 1
      },
      767: {
        items: 3
      },
      992: {
        items: 3
      },
      1200: {
        items: 3
      },
      1500: {
        items: 5
      }
    }
  });


 
})(jQuery);
