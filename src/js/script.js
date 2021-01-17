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
          $(this).on('click', function(e) 
          {
            e.preventDefault();
            $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
            $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
          });
            });
      }
      toggleSlide('.catalog-item__link');
      toggleSlide('.catalog-item__back');
      
});