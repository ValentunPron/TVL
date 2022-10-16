window.addEventListener('DOMContentLoaded', () => {
	// Burger
	document.querySelector('.header__burger').addEventListener('click', e => {
		document.querySelector('.header__burger').classList.toggle('active');
		document.querySelector('.header__menu').classList.toggle('active');
		document.querySelector('body').classList.toggle('lock');
	});
	//  Slider 
	$('.testim__slider').slick({
		infinite: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 10000,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 3,
		dots: true,
		appendDots: $('.testim__dots'),
		autoplaySpeed: 12000,
		pauseOnFocus: false,
		pauseOnHover: false,
		speed: 500,
		responsive: [{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					infinite: true,
					dots: true,
				}
			},
			{
				breakpoint: 500,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					dots: true,
				}
			}
		]
	});

	const titleButton = document.querySelectorAll('.footer__menu-block');

	titleButton.forEach(item => {
		item.addEventListener('click', e => {
			if (e.target.classList[0] == 'footer__list-title') {
				e.target.classList.toggle('active');
				item.classList.toggle('active');
			}
		})
	})
	adaptiveHeight();
	window.addEventListener("resize", adaptiveHeight, true);
	//Height Adaptive Slider
	function adaptiveHeight() {
		var max_col_height = 0;
		$('.testim__bg').each(function () {
			if ($(this).height() > max_col_height) {
				max_col_height = $(this).height();
			}
		});
		$('.testim__bg').height(max_col_height);
	}

	// Scroll 
	$('.menu__item a').each((index, element) => {
		$(`#${element.id}`).click(() => {
			$('html, body').animate({
				scrollTop: ($(`.${element.id}`).offset().top) + 25
			}, 500);
			if ($('.header__burger, .header__menu').hasClass('active')) {
				$('.header__burger, .header__menu').toggleClass('active');
				$('body').toggleClass('lock')
			}
		})
	});

	$('.about-button').click(() => {
		$('html, body').animate({
			scrollTop: $('.about').offset().top
		}, 400);
	});

	$('.tours-button').click(() => {
		$('html, body').animate({
			scrollTop: $('.offer').offset().top
		}, 400);
	});

	$('.blog-button').click(() => {
		$('html, body').animate({
			scrollTop: $('.about-us').offset().top
		}, 400);
	});

	$('.contact-button').click(() => {
		$('html, body').animate({
			scrollTop: ($('.about-us__contact').offset().top) + 75
		}, 400);
	});

	$('.link-logo').click(() => {
		$('html, body').animate({
			scrollTop: 0
		}, 400);
	});
});