$(function () {

	$('.products-weekly__slider').slick({
		prevArrow: '<button class="arrow product-card__arrow product-card__arrow-left"><img class="product-card__img-arrow-left" src="../images/icons/chevron-left.svg" alt=""></button>',
		nextArrow: '<button class="arrow product-card__arrow product-card__arrow-right"><img class="product-card__img-arrow-right" src="../images/icons/chevron-right.svg" alt=""></button>',
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
		prevArrow: '<button class="arrow followers-feed__arrow-left"><img class="product-card__img-arrow-left" src="../images/icons/chevron-left.svg" alt=""></button>',
		nextArrow: '<button class="arrow followers-feed__arrow-right"><img class="product-card__img-arrow-right" src="../images/icons/chevron-right.svg" alt=""></button>'
	});

	

	$('.rate-star').rateYo({
		rating: 4.5,
		starWidth: "15px",
		spacing: "3px",
		readOnly: false,
	});



	$('.star-rate').rateYo({
		rating: 4,
		starWidth: "13px",
		spacing: "4px",
		readOnly: false,
		normalFill: "#ffc000",
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

	

	var mixer = mixitup('.release-template');

});

