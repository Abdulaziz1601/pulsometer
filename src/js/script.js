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
      640: {
        gutter: 20,
        items: 1,
       
      },
      700: {
      },
      900: {
        items: 1,
      }
    }
  });
  
  document.querySelector('.prev').addEventListener('click',function () {
    slider.goTo('prev');});
    document.querySelector('.next').addEventListener('click',function () {
      slider.goTo('next');});