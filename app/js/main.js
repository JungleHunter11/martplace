$(function () {

	$('.products-weekly__slider').slick({
		prevArrow: '<button class="arrow product-card__arrow product-card__arrow-left product-card__arrow-left--purple"><img class="product-card__img-arrow-left" src="../images/icons/chevron-left.svg" alt=""></button>',
		nextArrow: '<button class="arrow product-card__arrow product-card__arrow-right product-card__arrow-right--purple"><img class="product-card__img-arrow-right" src="../images/icons/chevron-right.svg" alt=""></button>',
	});

	$('.followers-feed__slider').slick({
		mobileFirst:true,
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		variableWidth: true,
		speed: 1000,
		responsive: [
			{
				breakpoint: 450,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
				}
			},
			{
				breakpoint: 799,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					infinite: true,
				}
			},
			{
				breakpoint: 1135,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
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
		// normalFill: "#ffc000",
	});
	

	$('.menu-btn').on('click', function () {
		$('.main-menu').slideToggle('500', 'linear');

	});

	$('.user-btn').on('click', function () {
		$('.links').slideToggle('500', 'linear');

	});

	$('.main-menu__arrow--home').on('click', function () {
		$('.dropmenu--home').slideToggle(500);

	});
	$('.main-menu__arrow--allproducts').on('click', function () {
		$('.dropmenu--allproducts').slideToggle(500);

	});
	$('.main-menu__arrow--wordpress').on('click', function () {
		$('.dropmenu--wordpress').slideToggle(500);

	});
	$('.main-menu__arrow--pages').on('click', function () {
		$('.dropmenu--pages').slideToggle(500);

	});

	$('.dropmenu__col--martplace').on('click', function () {
		$('.dropmenu__inner--martplace').slideToggle(500);

	});
	$('.dropmenu__col--dashboard').on('click', function () {
		$('.dropmenu__inner--dashboard').slideToggle(500);

	});
	$('.dropmenu__col--others').on('click', function () {
		$('.dropmenu__inner--others').slideToggle(500);

	});

	$('.aside__title').on('click', function(){
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

