$(document).ready(function () {

function ibg(){
    $.each($('.ibg'), function(index, val) {
        if($(this).find('.img_bg').length>0){
            $(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
            $(this).find('.img_bg').css('display','none');
        }
    });
}
ibg();
  // slider banner
  var mySwiper = new Swiper('.swiper-container', {
      // roundLengths: true,
      slidesPerView: 1,
      speed: 2000,
      loop: true,
      navigation: {
        nextEl: '.forward',
        prevEl: '.backward',
      },
  });
  
var mySwiper = new Swiper('.swiper-container');
  $('.forward').on('click', function(){
      mySwiper.navigation.nextEl;
  });
  $('.backward').on('click', function(){
      mySwiper.navigation.prevEl;
  });
  // slider new + featured
  // var mySwiper = new Swiper('.new-product-block', {
  //   slidesPerView: 4,    
  //   slidesPerGroup: 2,
  //   loop: true,    
  //   spaceBetween: 8,
  //   freeMode: false,
  //   speed: 4000,
  //   autoplay: {
  //     delay: 5000,
  //     disableOnInteraction: false,
  //   },
  // });
  
    // var featuredSwiper = document.querySelector('#featured-slider').swiper;
    //     $('#featured-slider').hover(function(){
    //          featuredSwiper.autoplay.stop();
    //     }, function(){
    //          featuredSwiper.autoplay.start();
    //     });

    // var newSwiper = document.querySelector('#new-slider').swiper;
    //     $('#new-slider').hover(function(){
    //          newSwiper.autoplay.stop();
    //     }, function(){
    //          newSwiper.autoplay.start();
    //     });

// slider tesimonials
// var testimonialsSwiper = new Swiper('.testimonials-slider', {
//   fadeEffect: { crossFade: true },
//   virtualTranslate: true,
//   autoplay: {
//       delay: 8000,
//       disableOnInteraction: false,
//   },
//   speed: 1500, 
//   slidersPerView: 1,
//   effect: "fade",
//   pagination: {
//       el: '.swiper-pagination',
//       clickable: true,
//     },
// });

});