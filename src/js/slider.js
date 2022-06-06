$(document).ready(function () {
  var $status = $('.reviews__number');
  var $slickElement = $('.slider');

  $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    var i = (currentSlide ? currentSlide : 0) + 1;
    $status.text(i + '/' + slick.slideCount);
  });

  $('.slider').slick({
    autoplay: false,
    centerMode: true,
    arrows: true,
    centerPadding: '0',
    slidesToShow: 1,
    variableWidth: true,
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    easing: 'ease',
    asNavFor: '.slider__text',
    responsive: [{
      breakpoint: 767,
      settings: {
        variableWidth: false,
        slidesToShow: 1,
        centerMode: true,
        arrows: false
      }
    }]
  });
});

$('.slider__text').slick({
  arrows: false,
  centerPadding: '0',
  slidesToShow: 1,
  asNavFor: '.slider',
  dots: false,
  fade: true,
});

