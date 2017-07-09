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

});
