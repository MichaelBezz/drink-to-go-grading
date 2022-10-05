import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js';

export const buildSwiper = () => {
  new Swiper('.swiper', {
    loop: true,
    pagination: {
      el: '.slider__pagination',
      clickable: true,
      bulletElement: 'button',
      bulletClass: 'slider__pagination-button',
      bulletActiveClass:'slider__pagination-button--active'
    },
    navigation: {
      nextEl: '.slider__toggle--next',
      prevEl: '.slider__toggle--previous'
    }
  })
};
