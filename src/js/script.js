// Slick Slider
// $(document).ready(function () {
//     $('.carousel__inner').slick({
//         spped: 1200,
//         adaptiveHeight: true,
//         prevArrow: '<button type="button" class="slick-prev slick-button"><img src = "icons/left.svg"></button>',
//         nextArrow: '<button type="button" class="slick-next slick-button"><img src = "icons/right.svg"></button>',
//         responsive: [
//          {
//                 breakpoint: 992,
//                 settings: {
//                     dots: true,
//                     arrows: false
//                 }
//         }
//         ]
//     });
// });
const slider = tns({
	container: '.carousel__inner',
	items: 1,
	slideBy: 'page',
	autoplay: false,
	navPosition: "bottom",
	controls: false,
	autoHeight: true,
	responsive: {
	600: {
		controls: false
	}
	}
});

document.querySelector('.prev').addEventListener('click', function () {
	slider.goTo('prev');
});
document.querySelector('.next').addEventListener('click', function () {
	slider.goTo('next');
});

$(document).ready(function () {
	$('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function () {
		$(this)
			.addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
			.closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
	});

	function toggleSlide(item) {
		$(item).each(function (i) {
			$(this).on('click', function(e) {
				e.preventDefault();
				$('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
				$('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
			});
		});
	}

	toggleSlide('.catalog-item__link');
	toggleSlide('.catalog-item__back');

	// Modal

	$('[data-modal=consultation]').on('click', function() {
		$('.overlay, #consultation').fadeIn('slow'); // to make our code laconic we can write like this <-
	});

	$('.modal__close').on('click', function() {
		$('.overlay, #consultation, #thanks, #order').fadeOut('slow');
	})
	
	// for order 

	// $('.button_mini').on('click', function() {
	// 	$('.overlay, #order').fadeIn();
	// })

	$('.button_mini').each(function(i) {
		$(this).on('click', function() {
			$('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text()) // eq finds an elem by its index
			$('.overlay, #order').fadeIn();
		})
	})

	// form validation with validate jquery

	// At all forms we are reusing .feed-form, all our forms are related to feed-form
	// $('.feed-form').validate(); // it works with only one form, we have to write it like this
	// to use it multiple times

	// we have 3 forms
	// $('#consultation-form').validate();
	
	// $('#order form').validate(); 

	// We have to create function to DRY
	function valiateForms(form) {
		$(form).validate({
			rules: {
				name: {
					required: true,
					minlength: 2 
				},
				phone: "required",
				email: {
					required: true,
					email: true,
				},
			},
			messages: {
				name: {
					required:  "Пожалуйста введите свое имя",
					minlength: jQuery.validator.format("Введите {0} символов")
				},
				phone: "Пожалуйста введите свое номер телефона",
				email: {
					required: "Пожалуйста введите свою почту",
					email: "Неправильно введен адрес почты"
				}
			}
		});
	}

	// Reusing one function to validate our three forms
	valiateForms('#consultation-form');
	valiateForms('#consultation form');
	valiateForms('#order form');

	// masking phone number

	$('input[name=phone]').mask("+7 (999) 999-99-99"); //!!! this plugin do not work with type=number or type=tel

});