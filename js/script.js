
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
		appendDots:$('.testim__dots'),
		autoplaySpeed: 12000,
		pauseOnFocus: false,
		pauseOnHover: false,
		speed: 500,
		responsive: [
			{
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

	window.addEventLissaner("resize", adaptiveHeight)
	//Height Adaptive Slider
	function adaptiveHeight() {
		var max_col_height = 0; 
		$('.testim__bg').each(function(){
			if ($(this).height() > max_col_height) { 
				max_col_height = $(this).height(); 
			}
		});
		$('.testim__bg').height(max_col_height); 
	}
});