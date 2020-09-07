$(function ()) {

var mySwiper = new Swiper('.swiper-container', {
	slidesPerView: 4,
	spaceBetween: 28,
	slidesPerGroup: 4,
	loop: true,
	loopFillGroupWithBlank: true,
	arrows: true,
	speed: 1000,
	navigation: {
		nextEl: '.class',
		prevEl: '.class',
	}
});

$('').on('click', function () {
	$('').slideToggle();

});

});