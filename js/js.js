'use strict';
const swiper = new Swiper('.js-questions-swiper', {
  slidesPerView: 4,
  spaceBetween: 24,
  navigation: {
    nextEl: '.swiper-next',
    prevEl: '.swiper-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    }
  }
});