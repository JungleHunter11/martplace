$(function () {

	$('.products-weekly__slider').slick({
		prevArrow: '<button class="arrow product-card__arrow product-card__arrow-left product-card__arrow-left--purple"><img class="product-card__img-arrow product-card__img-arrow--left" src="../images/icons/chevron-left.svg" alt="arrow left"></button>',
		nextArrow: '<button class="arrow product-card__arrow product-card__arrow-right product-card__arrow-right--purple"><img class="product-card__img-arrow product-card__img-arrow--right" src="../images/icons/chevron-right.svg" alt="arrow right"></button>',
	});

	$('.followers-feed__slider').slick({
		mobileFirst: true,
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		speed: 500,
		responsive: [
			{
				breakpoint: 1,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					variableWidth: false
				}
			},
			{
				breakpoint: 699,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					infinite: true,
					variableWidth: false
				}
			},
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					variableWidth: true
				}
			}
		],
		prevArrow: '<button class="arrow product-card__arrow-left product-card__arrow-left--blue"><img class="product-card__img-arrow-left" src="../images/icons/chevron-left.svg" alt=""></button>',
		nextArrow: '<button class="arrow product-card__arrow-right product-card__arrow-right--blue"><img class="product-card__img-arrow-right" src="../images/icons/chevron-right.svg" alt=""></button>'
	});



	$('.rate-star--products-weekly').rateYo({
		rating: 4.5,
		starWidth: "15px",
		spacing: "3px",
		readOnly: false,
	});



	$('.rate-star--products-release').rateYo({
		rating: 4,
		starWidth: "13px",
		spacing: "4px",
		readOnly: false,
		normalFill: "#ffc000",
	});

	$('.followers-feed__star-rate').rateYo({
		rating: 4.5,
		starWidth: "15px",
		spacing: "3px",
		readOnly: false,
	});


	$('.menu-btn').on('click', function () {
		$('.main-menu').slideToggle('500', 'linear');
		$(this).even('.menu-btn').toggleClass('cross');

	});

	$('.main-menu__arrow').on('click', function() {
		$(this).next('.dropmenu').toggleClass('is-open');
		$(this).even('.main-menu__arrow').toggleClass('sub-open');

	});



	$('.main-menu__arrow--col-menu').on('click', function () {
		// $(this).next('.dropmenu__inner').toggleClass('is-open')
		$(this).parent().next('.dropmenu__inner').slideToggle('500', 'linear');

	});

	$('.user-btn').on('click', function () {
		$('.links').toggleClass('active');
		return false;
	});

	$(document).on('click', function(){
		if($('.links').hasClass('active') && $(event.target).closest(".links").length == 0) {
				$('.links').toggleClass('active');
		};
		
	});

	


	$('.aside__title').on('click', function () {
		$(this).next('.aside-box__list').toggleClass('hidden');
		$(this).next('.form-range').toggleClass('hidden');
	});

	$(".js-range-slider").ionRangeSlider({
		type: "double",
		min: 0,
		max: 399,
		from: 30,
		to: 300,
		prefix: '$'
	});

	var mixer = mixitup('.products-release__inner');

});
