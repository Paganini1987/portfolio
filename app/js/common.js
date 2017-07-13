$(function() {

	$('#my-menu').mmenu({
		extensions: ['theme-white', 'effect-menu-slide', 'pagedim-black'],
		navbar: {
			title: '<div class="avatar"><a class="phone" href="tel:+7-905-870-92-36"><i class="fa fa-phone"></i></a><a href="/"><img src="img/user.jpg" alt="avatar"></a><a class="mail" href="mailto:pavelivonin@yandex.ru"><i class="fa fa-envelope-o"></a></div>'
		},
		offCanvas: {
			position: 'right'
		}
	});

	var api = $('#my-menu').data('mmenu');
	api.bind('open:finish', function() {
		$('.hamburger').addClass('is-active');
	});
	api.bind('close:finish', function() {
		$('.hamburger').removeClass('is-active');
	});

	$(window).on('load', Height_calc());

	window.onresize = Height_calc;

	function Height_calc(){
		var right = $('#my-content').outerHeight()
		$('.left_column').height(right);
	}

	$('.image-link').magnificPopup({
	 	type:'image',
	 	gallery:{
	 		enabled: true
	 	},
	 	mainClass: 'mfp-with-zoom', // this class is for CSS animation below

	  zoom: {
	    enabled: true, // By default it's false, so don't forget to enable it

	    duration: 300, // duration of the effect, in milliseconds
	    easing: 'ease-in-out', // CSS transition easing function

	    opener: function(openerElement) {
	      return openerElement.is('div') ? openerElement : openerElement.find('div');
	    }
	  }
	});

	//fixMenu

	var menuY = $('#list').offset().top;
	
	function sideMenu(){
		var menuWidth = $('.left_column').width();
		var sTop = $(this).scrollTop();
		if(sTop>menuY){
			$('#list').addClass('menuFixed').width(menuWidth);
		}else{
			$('#list').removeClass('menuFixed').width(menuWidth);
		}
	};

	$(window).on('scroll', sideMenu);
	$(window).on('resize', sideMenu);


	//определение скролла вверх
	var scroll = ({
		state: [],
		clearState: function(){
			this.state=[]
		},
		addClass: function(obj){
			$(obj).addClass('mobileMenuFixed')
		},
		removeClass: function(obj){
			$(obj).removeClass('mobileMenuFixed')
		} 
	})

	function toTop(){
		scroll.state.push($(window).scrollTop())
		if(scroll.state.length>2 && $(window).scrollTop()>100){
			if(scroll.state[1]>scroll.state[2]){
				scroll.clearState()
				scroll.addClass('.mobile_menu')
			}else{
				scroll.clearState()
				scroll.removeClass('.mobile_menu')
			}
		}
	}

	$(window).on('scroll', toTop)


});
