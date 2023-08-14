$(document).ready(function(){
	$('.slider-active').slick({
	  'arrows': false,
	  'dots':true,
	  'autoplay': true,
	});


	$('.p_slider_active').slick({
		centerMode: true,
		centerPadding: '440px',
		slidesToShow: 1,
		'arrows': true,
		prevArrow: '<span class="left_arrow"><img src="./assets/images/portfolio/left_arrow.png" alt=""></span>',
		nextArrow: ' <span class="right_arrow"><img src="./assets/images/portfolio/right-arrow.png" alt=""></span>',

		// 'autoplay': true,
		responsive: [
		  {
			breakpoint: 1200,
			settings: {
			  arrows: false,
			  centerMode: true,
			  
			  slidesToShow: 3
			}
		  },
		  {
			breakpoint: 768,
			settings: {
			  arrows: false,
			  centerMode: true,
			  
			  slidesToShow: 1
			}
		  },
		  {
			breakpoint: 480,
			settings: {
			  arrows: false,
			  centerMode: true,
			
			  slidesToShow: 1
			}
		  }
		]
	  });
		 

	//   Logo Slider 
	  $('.logo_slider_active').slick({
		'arrows': false,
		'dots':false,
		slidesToShow:5,
		'autoplay': true,
	  });


	


	// niceSelect 
	$('select').niceSelect();

	// Tesimonial Slider Js 
	$('.t_slider_active').slick({
		centerMode: true,
		centerPadding: '',
		slidesToShow: 3,
		'arrows': true,
		'autoplay': true,
		prevArrow: '<span class="left_arrow"><img src="./assets/images/testimonial/t_left.png" alt=""></span>',
		nextArrow: ' <span class="right_arrow"><img src="./assets/images/testimonial/t_right.png" alt=""></span>',

		
		responsive: [
		  {
			breakpoint: 768,
			settings: {
			  arrows: false,
			  centerMode: true,
			  
			  slidesToShow: 3
			}
		  },
		  {
			breakpoint: 480,
			settings: {
			  arrows: false,
			  centerMode: true,
			
			  slidesToShow: 1
			}
		  }
		]
	  });

	//   Footer Slider 
	$('.award__slider-active').slick({
		centerMode: true,
		centerPadding: '',
		slidesToShow: 4,
		'arrows': false,
		'autoplay': true,
		prevArrow: '<span class="left_arrow"><img src="./assets/images/testimonial/t_left.png" alt=""></span>',
		nextArrow: ' <span class="right_arrow"><img src="./assets/images/testimonial/t_right.png" alt=""></span>',

		
		responsive: [
		  {
			breakpoint: 768,
			settings: {
			  arrows: false,
			  centerMode: true,
			  
			  slidesToShow: 3
			}
		  },
		  {
			breakpoint: 480,
			settings: {
			  arrows: false,
			  centerMode: true,
			
			  slidesToShow: 1
			}
		  }
		]
	  });
	

	// Go to Top
    $(function () {
        // Scroll Event
        $(window).on('scroll', function () {
            var scrolled = $(window).scrollTop();
            if (scrolled > 500) $('.go-top').addClass('active');
            if (scrolled < 500) $('.go-top').removeClass('active');
        });
        // Click Event
        $('.go-top').on('click', function () {
            $("html, body").animate({ scrollTop: "0" }, 500);
        });
    });

	//    Counter Up JS
	//    $('.counter').counterUp({
    //     delay: 10,
    //     time: 1000
  	//   });
	
		

  })(jQuery);