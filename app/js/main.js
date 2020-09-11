$(function () {

	$('.products-weekly__slider').slick({
		prevArrow: '<button class="arrow template__arrow template__arrow-left"><img class="template__img-arrow-left" src="../images/icons/chevron-left.svg" alt=""></button>',
		nextArrow: '<button class="arrow template__arrow template__arrow-right"><img class="template__img-arrow-right" src="../images/icons/chevron-right.svg" alt=""></button>',
	});

	var mixer = mixitup('.release-template');

	$('.rate-star').rateYo({
		rating: 4.5,
		starWidth: "15px",
		spacing: "3px",
		readOnly: false,
	});



	$('.release-template__star-rate').rateYo({
		rating: 4,
		starWidth: "13px",
		spacing: "4px",
		readOnly: false,
		normalFill: "#ffc000",
	});

});