    $('.owl-carousel').owlCarousel({
      autoplay: true,
      items:1,
      animateOut: 'fadeOut',
      lazyLoad:true,
      loop:true,
      margin:10,
      autoplayTimeout:9000
    });
    $('ul.sc_btn li').click(function(){
		$('.schedule_image img').attr('src',$(this).attr('href'));
    $(this).addClass('active').siblings().removeClass('active');
		return false;
	});

    $("a").on('click', function(event) {

      if (this.hash !== "") {
 
        event.preventDefault();

        var hash = this.hash;

        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
     
          window.location.hash = hash;
        });
      } 
    });



