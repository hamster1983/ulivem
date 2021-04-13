$(document).ready(function(){
	
	/*$('#top-slider').on('slide.bs.carousel', function(e) {
        $('.top-slider-indicators li').removeClass('active');
        $('.top-slider-indicators li:nth-of-type('+(e.to+1)+')').addClass('active');
    })*/

    $('.akc-slider').slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: true,
        speed: 1500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1199,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 820,
            settings: {
              slidesToShow: 1,
            }
          }
        ] 
      });
	
});