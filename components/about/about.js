document.addEventListener('DOMContentLoaded', () => {
  const sliderPrevButton = document.querySelector('.about__content-slider-prevArrow')
  const sliderNextButton = document.querySelector('.about__content-slider-nextArrow')

  $('.about__content-slider').slick({
    dots: true,
    arrows: true,
    infinite: false,
    speed: 500,
    // autoplay: 4000,
    cssEase: 'linear',
    prevArrow: sliderPrevButton,
    nextArrow: sliderNextButton,
  });

})
