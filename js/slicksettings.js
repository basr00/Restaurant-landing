$(document).ready(function () {
	$('.opinions__box').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2500,
		arrows: false,
		mobileFirst: true,
		responsive: [
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 860,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
				},
			},
		],
	});
});
