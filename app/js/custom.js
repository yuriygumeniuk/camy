$(document).ready(function () {
// ===================================
  $('.label').text($(window).width());
  $('.label').append('&nbsp;');
	window.addEventListener("resize", function() {
	  $('.label').text($(window).width());
	  $('.label').append('&nbsp;');
	}, false);
// =====================================
	function ibg(){
		$.each($('.ibg'), function(index, val) {
			if($(this).find('.img_bg').length>0){
				$(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
				$(this).find('.img_bg').css('display','none');
			}
		});
	}
	ibg();  
// =====================================

  $('.navigation__item a').click(function(){
	$(this).parents('.navigation-list').find('.navigation__item').removeClass('active');
	$(this).parent().addClass('active');
	return false
  });

  $('.footer-menu__item a').click(function(){
	$(this).parents('.footer-menu').find('.footer-menu__item').removeClass('active');
	$(this).parent().addClass('active');
	return false
  });
	$(function() {
		$.fn.scrollToTop = function() {
			$(this).hide().removeAttr("href");
			if ($(window).scrollTop() >= "500")
				$(this).fadeIn("slow")
			
			var scrollDiv = $(this)
			$(window).scroll(function() {
				if ($(window).scrollTop() <= "500")
					$(scrollDiv).fadeOut("slow")
				else $(scrollDiv).fadeIn("slow")
			})
			
			$(this).click(function() {
				$("html, body").animate({scrollTop: 0}, "slow")
			})
		}   
	})   

	$(function() {
		$("#go-top").scrollToTop()
		console.log(window.innerHeight)
	})

// slider-banner
  var mySwiper = new Swiper('.slider-banner', {
	  // roundLengths: true,
	  slidesPerView: 1,
	  speed: 2000,
	  loop: true,
	  navigation: {
		nextEl: '.forward',
		prevEl: '.backward',
	  },
  }); 
// var mySwiper = new Swiper('.slider-banner');
//   $('.forward').on('click', function(){
//       mySwiper.navigation.nextEl;
//   });
//   $('.backward').on('click', function(){
//       mySwiper.navigation.prevEl;
//   });
// slider-banner end

//////////////////////////////////
//////////////////////////////////

// slider-recent
  var recentSwiper = new Swiper('.slider-recent', {
	slidesPerView: 4,
	// roundLengths: true,
	spaceBetween: 19,
	freeMode: false,
	speed: 1500,
	navigation: {
		nextEl: '#recent-forward',
		prevEl: '#recent-backward',
	},
	loop: true,
  });
  // var recentSwiper = new Swiper('.slider-recent');
  // $('#recent-forward').on('click', function(){
  //     recentSwiper.navigation.nextEl;
  // });
  // $('#recent-backward').on('click', function(){
  //     recentSwiper.navigation.prevEl;
  // });


// slider-recent end


// var featuredSwiper = new Swiper('.swiper-container');
//   $('.forward').on('click', function(){
//       mySwiper.navigation.nextEl;
//   });
//   $('.backward').on('click', function(){
//       mySwiper.navigation.prevEl;
//   });

// slider-featured
  var featuredSwiper = new Swiper('.slider-featured', {
	loop: true,    
	slidesPerView: 4,
	spaceBetween: 19,
	freeMode: false,
	speed: 1500,
	navigation: {
		nextEl: '#featured-forward',
		prevEl: '#featured-backward',
	},
  });


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