// Проверка, загрузилась ли страница
$(document).ready(function(){

// Бургер
	$('.header__burger').click(function(event){
		$('.header__burger,.header__nav,.header').toggleClass('_active')
		$('body').toggleClass('_lock')
	});
// Бургер \

// IBG

	function ibg(){

		$.each($('.ibg'), function(index, val) {

			if($(this).find('img').length>0){
				$(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
				
			}
			
		});
	}

	ibg();

// IBG \

// Slider

	$('.main__slider').slick({
		dots: true,
		arrows: false,
	});

// Slider \

// Плавающая шапка
	if ($(window).width() > '768') {
		const navOffset = $('.header').offset().top;
		$(window).scroll(function(){
			const scrolled = $(this).scrollTop();

			if(scrolled > navOffset) {
				$('.header').addClass('_fixed-header');
			}

			if(scrolled < navOffset) {
				$('.header').removeClass('_fixed-header');
			}
		});
	}
// Плавающая шапка \
});